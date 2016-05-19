var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
//var minifyCss = require('gulp-minify-css');

// THIS TASK COMPILE SASS INTO CSS DEV DIRECTORY AND LOG OUT ERROR

gulp.task('sass', function () {
    gulp.src('dev/app/assets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('dev/app/assets/css'));
        //.pipe(autoprefixer())
        //.pipe(minifyCss())
        //.pipe(gulp.dest('dist'));
});



