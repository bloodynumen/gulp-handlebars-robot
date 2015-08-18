## Describe

This plugin for batch generate templates.
Every templates has own json file for data.
Evety Templates has own layout, by layout property of json.
Default layout is main-layout.

## Usage

Install gulp-handlebars-robot as a development dependency:

```shell
npm install --save-dev gulp-handlebars-robot
```

## Compiling templates

Given the following directory structure:

```
src                          # Your application's source files
-- tpl
    |-- hbs                  # A folder containing templates named with dot notation
    |   |-- app
    |   |   `-- detail.hbs
    |   `-- index.hbs
    |-- json                 # A folder containing json data for templates
    |   |-- app
    |   |   `-- detail.json
    |   `-- index.json       # json for index.hbs, allow not existed
    `-- layout
        `-- main-layout.hbs # layout file for handlebars-layouts
```

## gulpfile.js

``` javascript
gulp.task('tpl', ['clean-tpl'], function() {
  return gulp.src('./src/tpl/hbs/**/*')
    .pipe(handlebars_robot({
      root: './src/tpl/', //the root that contain json directory and layout directory
      ext: '.html' //output file extention
    }))
    .pipe(gulp.dest('./build/tpl/'));
});
```
## 中文说明

## 说明

批量生成模板插件,每个模版都可以有对应的json数据文件,以及不同的布局(通过json文件中定义的layout属性,默认为使用main-layout布局)

安装 gulp-handlebars-robot

```shell
npm install --save-dev gulp-handlebars-robot
```

## 编译模板

类似一下目录结构

```
src                          # 源码目录
-- tpl
    |-- hbs                  # handlebars相关模板
    |   |-- app
    |   |   `-- detail.hbs
    |   `-- index.hbs
    |-- json                 # 模板所以来的数据 json格式
    |   |-- app
    |   |   `-- detail.json
    |   `-- index.json
    `-- layout
        `-- main-layout.hbs # layout文件
```

## gulpfile.js

``` javascript
gulp.task('tpl', ['clean-tpl'], function() {
  return gulp.src('./src/tpl/hbs/**/*')
    .pipe(handlebars_robot({
      root: './src/tpl/', //the root that contain json directory and layout directory
      ext: '.html' //output file extention
    }))
    .pipe(gulp.dest('./build/tpl/'));
});
```
