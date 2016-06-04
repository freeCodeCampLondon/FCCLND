var gulp = require('gulp');
var inject = require('gulp-inject'); // GULP-INJECT IS USED FOR FILES WE DEVELOP
var wiredep = require('wiredep').stream; // WIREDEP USE TO INJECT DEPENDENCIES SUCH AS BOWWER FILES PACKAGE

/**
 * Inject front-end dev dependencies into index.html
 */

gulp.task('inject', ['sass'], function () {
  var target = 'dev/app/index.html';
  // OUR CSS / JS FILES
  var sources = gulp.src(['dev/app/**/**/*.js', '.tmp/**/*.css'], {
    read: false
  });
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  return gulp.src(target)
    .pipe(wiredep({
      ignorePath: '../..'
    })) // inject bower dependencies
    .pipe(inject(sources, {
      ignorePath: 'dev/app/'
    }))
    .pipe(gulp.dest('dev/app'));
});
