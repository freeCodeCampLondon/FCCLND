var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
/**
 * Minify and push build to gh-pages branch
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src('./dist/app/**/*')
    /* This is to ensure that we work from Firebase in production */
    .pipe(gulpif('*.js', $.replace('var localData = true;', 'var localData = false;')))
    .pipe(gulpif('*.js', $.uglify({ mangle: false }))) // Minify JavaScript
    .pipe(gulpif('*.js', $.rev()))
    .pipe(gulpif('*.css', $.cleanCss())) // Minify CSS
    .pipe(gulpif('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.deploy());
});
