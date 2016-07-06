var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
/**
 * Lint JavaScript
 */
gulp.task('lint', function() {
  return gulp.src(['./**/*.js', '!node_modules/**', '!dist/**'])
    .pipe($.eslint())
    .pipe($.eslint.format());
});
