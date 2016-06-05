var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages branch
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src('./dist/app/**/*')
    .pipe(deploy());
});
