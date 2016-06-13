var gulp  = require('gulp'),
    deploy = require('gulp-gh-pages');


/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src("dist/app/*")
    .pipe(deploy())
});
