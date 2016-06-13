var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

/**
 * Lint JavaScript
 */
gulp.task('lint', function () {
  return gulp.src(['./**/*.js', '!node_modules/**', '!bower_components/**', '!dist/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
