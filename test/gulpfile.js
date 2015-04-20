var gulp = require('gulp');
var del = require('del');
var handlebars_robot = require('gulp-handlebars-robot');

gulp.task('clean-tpl', function(cb) {
  del(['build/tpl'], cb);
});

gulp.task('tpl', ['clean-tpl'], function() {
  return gulp.src('./src/tpl/hbs/**/*')
    .pipe(handlebars_robot({
      root: './src/tpl/',
      ext: '.php'
    }))
    .pipe(gulp.dest('./build/tpl/'));
});