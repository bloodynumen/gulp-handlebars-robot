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
      root: './src/tpl/',
      ext: 'html'
    }))
    .pipe(gulp.dest('./build/tpl/'));
});
```
