var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// JS hint task
gulp.task('script', function () {
  gulp.src('dev/app/**/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
