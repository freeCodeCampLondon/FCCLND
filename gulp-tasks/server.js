var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

browserSync.init({
    server: {
        baseDir: "dev/app", // START SERVER IN OUR DEVELOPMENT ENVIROMENT
        routes: {
                "/bower_components": "bower_components" // WATCH ALSO BOWER DIR OTHERWISE EXTERNAL TO SERVER
                }
            }
});

// Static Server + watching scss/html files
gulp.task('server', ['sass', 'script'], function() {   //WATCH SASS, JS & HTML FILES FOR CHANGES
    gulp.watch('dev/app/assets/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('dev/app/**/*.js,' ['script']).on('change', browserSync.reload);
    gulp.watch("dev/app/*.html").on('change', browserSync.reload);
});
