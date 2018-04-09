'use strict';

// dependencies
// installing dependencies:
//  npm update
//  npm install gulp-<dependency> --save-dev
//
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

// SCSS/CSS

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

// compile scss to css

gulp.task('compile_scss', function(){
  gulp.src(SCSS_SRC)
  .pipe(scss().on('error', sass.logError))
  .pipe(monifiyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
})

// detect changes in SCSS
gulp.task('watch_scss', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

// tasks
gulp.task('default', ['watch_scss']);