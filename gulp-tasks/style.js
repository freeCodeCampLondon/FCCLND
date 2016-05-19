var gulp = require('gulp');
var sass = require('gulp-sass');
// TODO: var autoprefixer = require('gulp-autoprefixer');
// TODO: var minifyCss = require('gulp-minify-css');

// THIS TASK COMPILES SASS INTO THE DEV CSS DIRECTORY AND LOGS ERRORS

gulp.task('sass', function () {
    gulp.src('dev/app/assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('dev/app/assets/css'));
        //.pipe(autoprefixer())
        //.pipe(minifyCss())
        //.pipe(gulp.dest('dist'));
});
