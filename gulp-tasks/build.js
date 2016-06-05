var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var cleanCss = require('gulp-clean-css');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var del = require('del');

/**
 * Copy static files from /dev to /dist
 */

gulp.task('copy:fonts', function () {
  del('dist/app/assets/fonts/**/*.{ttf,wof,eof,svg}');
  return gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('dist/app/assets/fonts/'));
});

gulp.task('copy:images', function () {
  del('dist/app/assets/images/**/*.*');
  return gulp.src('dev/app/assets/images/**/*.*')
    .pipe(gulp.dest('dist/app/assets/images'));
});

gulp.task('copy:data', function () {
  del('dist/app/data/*');
  return gulp.src('dev/app/data/*.json')
    .pipe(gulp.dest('dist/app/data/'));
});

/**
 * Concatenate front-end dependencies and minify
 */
gulp.task('optimise', ['inject'], function () {
  del('./dist/app/**/*.{html,js,css}');
  return gulp.src('./dev/app/**/*.html')
    .pipe(useref())
    /* This is to ensure that we work from Firebase in production */
    .pipe(gulpif('*.js', replace('var localData = true;', 'var localData = false;')))
    .pipe(gulpif('*.js', uglify({ mangle: false }))) // Minify JavaScript
    .pipe(gulpif('*.js', rev()))
    .pipe(gulpif('*.css', cleanCss())) // Minify CSS
    .pipe(gulpif('*.css', rev()))
    .pipe(revReplace())
    .pipe(gulpif('*.html', htmlmin({
      collapseWhitespace: true,
      preserveLineBreaks: true
     })))
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('build', ['copy:fonts', 'copy:images', 'copy:data', 'optimise']);
