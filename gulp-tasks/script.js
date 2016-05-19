// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('script', function() {
  gulp.src('dev/app/**/**/*.js')
    .pipe(jshint())
});
