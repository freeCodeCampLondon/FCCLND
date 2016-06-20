var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
/**
 * Minify and push build to gh-pages branch
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src('./dist/app/**/*')
    /* This is to ensure that we work from Firebase in production */
    .pipe($.if('*.js', $.replace('var localData = true;', 'var localData = false;')))
    .pipe($.if('*.js', $.uglify({ mangle: false }))) // Minify JavaScript
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.cleanCss())) // Minify CSS
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.ghPages());
});
