var through = require('through2');
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');
require('handlebars-layouts')(handlebars);
var PluginError = gutil.PluginError;

module.exports = function (opt) {
  //set dir
  var rootPath = path.join(__dirname, '/../../', opt.root);
  var jsonDir = path.join(rootPath, '/json/');
  var layoutDir = path.join(rootPath, '/layout/');
  var defaultLayout = path.join(layoutDir, 'main-layout.hbs');
  var ext = '.html';
  if (opt.ext)
  {
    ext = opt.ext;
  }

  function replaceExtension(path, ext) {
    if (typeof ext === 'undefined') {
      ext = '.json';
    }
    return gutil.replaceExtension(path, ext);
  }
  function transform(file, enc, cb) {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError('gulp-handlebars-robot', 'Streaming not supported'));
    var str = file.contents.toString('utf8');
    var jsonFile = replaceExtension(path.join(jsonDir, file.relative));
    var dest = replaceExtension(file.path, ext);
    var data = {};
    if (fs.existsSync(jsonFile)) {
      data = require(jsonFile);
    }
    if (data.layout) {
      layoutHtml = path.join(layoutDir, data.layout);
    } else {
      layoutHtml = defaultLayout;
    }
    if (fs.existsSync(layoutHtml) == false) {
      return cb(new PluginError('gulp-handlebars-robot', 'layout not found'));
    }

    try {
      // Render
      handlebars.registerPartial('layout', fs.readFileSync(layoutHtml, 'utf8'));
      var template = handlebars.compile(str);
      tpl = template(data);
      file.contents = new Buffer(tpl);
      file.path = dest;
      return cb(null, file);
    } catch (err) {
      return cb(new PluginError('gulp-handlebars-robot', err));
    }
  }

  return through.obj(transform);
};
