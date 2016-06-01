var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
  gulp.src('dist/app/*')
    .pipe(deploy());
});
