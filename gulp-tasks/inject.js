var gulp = require('gulp');
var inject = require('gulp-inject'); // Injects our front-end JS and CSS files
var wiredep = require('wiredep').stream; // Injects bower front-end dependencies

/**
 * Inject front-end dev dependencies into index.html
 */

gulp.task('inject', ['sass'], function () {
  var target = 'dev/app/index.html';
  // Our JS and CSS files
  var sources = gulp.src(['dev/app/**/*.js', '.tmp/**/*.css'], {
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
