var gulp = require('gulp');
var minCSS = require('gulp-clean-css');
// var jshint = require('gulp-jshint');
// var stylish = require('jshint-stylish');
var rev = require('gulp-rev');
// var uglify = require('gulp-uglify');
var del = require('del');
var usemin = require('gulp-usemin');

// IMPORT FILES FROM DIST
gulp.task('imagemin', function () {
  del(['dist/app/assets/images/*'], {
    force: true
  });
  gulp.src('dev/app/assets/images/*')
    .pipe(gulp.dest('dist/app/assets/images'));
});

gulp.task('data', function () {
  del(['dist/app/data/*'], {
    force: true
  });
  gulp.src('dev/app/data/*.json')
    .pipe(gulp.dest('dist/app/data/'));
});

gulp.task('copyfonts', function () {
  del(['dist/app/assets/fonts/*'], {
    force: true
  });
  gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('dist/app/assets/fonts/'));
});

// BUNDLE FILES INTO ONE
gulp.task('usemin', function () {
  gulp.src('dev/app/**/*.html')
    .pipe(usemin({
      js: [rev()],
      css: [minCSS(), rev()]
    }))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('build', ['copyfonts', 'data', 'imagemin', 'usemin']);
