var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

/**
 * Compile sass to css held in .tmp/
 */

gulp.task('sass', function () {
  // Remove pre-complied css
  del('./.tmp/**/*.css');
  // Compile sass
  return gulp.src('dev/app/assets/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./.tmp'));
});
