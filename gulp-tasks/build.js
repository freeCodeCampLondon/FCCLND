var gulp = require('gulp'),
    minCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    del = require('del');
    usemin = require('gulp-usemin')

//IMPORT FILES FROM DIST
gulp.task('imagemin', function() {
  return del(['dist/app/assets/images/*']), {force: true}, gulp.src('dev/app/assets/images/*')
    .pipe(gulp.dest('dist/app/assets/images'))
});

gulp.task('data', function () {
  return del(['dist/app/data/*']), {force: true}, gulp.src('dev/app/data/*.json')
    .pipe(gulp.dest('dist/app/data/'));
});

 gulp.task('copyfonts', function() {
   return del(['dist/app/assets/fonts/*']), {force: true}, gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('dist/app/assets/fonts/'));
 });

//BUNDLE FILES INTO ONE
gulp.task('usemin',['sass'], function () {
  return gulp.src('dev/app/**/*.html')
      .pipe(usemin({
        js: [rev()],
        css:[minCSS(),rev()]
              }))
      .pipe(gulp.dest('dist/app'));
});

gulp.task('build', ['copyfonts','data', 'imagemin',  'usemin'], function () {
});