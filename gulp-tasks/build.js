var gulp = require('gulp');
var del = require('del');

/**
 * Copy static files from /dev to /dist
 */

gulp.task('copy:fonts', function() {
  del('dist/app/assets/fonts/**/*.{ttf,wof,eof,svg}');
  return gulp.src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
    .pipe(gulp.dest('dist/app/assets/fonts/'));
});

gulp.task('copy:images', function() {
  del('dist/app/assets/images/**/*.*');
  return gulp.src('dev/app/assets/images/**/*.*')
    .pipe(gulp.dest('dist/app/assets/images'));
});

gulp.task('copy:data', function() {
  del('dist/app/data/*');
  return gulp.src('dev/app/data/*.json')
    .pipe(gulp.dest('dist/app/data/'));
});

gulp.task('copy:html', function() {
  del('./dist/app/**/*.html');
  return gulp.src('./dev/app/**/*.html')
    .pipe(gulp.dest('./dist/app/'));
});

gulp.task('build', ['copy:fonts', 'copy:images', 'copy:data', 'copy:html', 'browserify']);
