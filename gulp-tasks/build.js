var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
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
gulp.task('useref', ['browserify', 'inject'], function () {
  del('./dist/app/**/*.{html,js,css}');
  return gulp.src('./dev/app/**/*.html') 
    .pipe($.useref({ searchPath: '.' }))
    .pipe(gulp.dest('./dist/app'));
});

gulp.task('build', ['copy:fonts', 'copy:images', 'copy:data', 'useref']);
