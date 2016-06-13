var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var deploy = require('gulp-gh-pages');

/**
 * Minify and push build to gh-pages branch
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src('./dist/app/**/*')
    /* This is to ensure that we work from Firebase in production */
    .pipe(gulpif('*.js', replace('var localData = true;', 'var localData = false;')))
    .pipe(gulpif('*.js', uglify({ mangle: false }))) // Minify JavaScript
    .pipe(gulpif('*.js', rev()))
    .pipe(gulpif('*.css', cleanCss())) // Minify CSS
    .pipe(gulpif('*.css', rev()))
    .pipe(revReplace())
    .pipe(deploy());
});
