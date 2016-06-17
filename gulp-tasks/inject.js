var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 * Inject front-end dev dependencies into index.html
 */

gulp.task('inject', ['sass'], function () {
  // Our JS and CSS files
  var sources = gulp.src(['dev/app/**/*.js', '.tmp/**/*.css'], {
    /* This speeds-up processing */
    read: false
  });
  var wiredep = require('wiredep').stream; // Injects bower front-end dependencies
  return gulp.src('dev/app/index.html')
    .pipe(wiredep({
      ignorePath: '../..'
    })) // inject bower dependencies
    .pipe($.inject(sources, {
      ignorePath: 'dev/app/'
    }))
    .pipe(gulp.dest('dev/app'));
});
