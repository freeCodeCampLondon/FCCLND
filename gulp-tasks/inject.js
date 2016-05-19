var gulp = require('gulp');
var inject = require('gulp-inject');  // GULP-INJECT IS USED FOR FILES WE DEVELOP
var wiredep = require('wiredep').stream; // WIREDEP USE TO INJECT DEPENDENCIES SUCH AS BOWWER FILES PACKAGE

//THIS TASK WILL INJECT DEPENDENCIES AND OTHER CSS/JS FILES IN THE DEV FOLDER
gulp.task('inject', function () {
  var target = gulp.src('dev/app/index.html');
  //OUR CSS / JS FILES
  var sources = gulp.src(['dev/app/**/**/*.js', 'dev/app/assets/**/*.css'], {read: false})
  // It's not necessary to read the files (will speed up things), we're only after their paths:
    return target
        .pipe(wiredep({
            dependencies: true // FROM BOWER.JSON
        }))
        .pipe(inject(sources,  {ignorePath: 'dev/app/'} ))
        .pipe(gulp.dest('dev/app'));
});
