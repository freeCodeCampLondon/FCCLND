// include gulp
var gulp = require('gulp');
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish')

// JS hint task
gulp.task('script', function() {
  gulp.src('dev/app/**/**/*.js')
     .pipe(jshint())
  	 .pipe(jshint.reporter(stylish));
});
