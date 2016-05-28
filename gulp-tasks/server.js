var gulp        = require('gulp');
var browserSync = require('browser-sync');
var dist = browserSync.create('dist');
var dev = browserSync.create('dev');

dist.init({
    server: {
        baseDir: "dist/app", // START SERVER IN OUR DEVELOPMENT ENVIROMENT
        routes: {
                "/bower_components": "bower_components" // WATCH ALSO BOWER DIR OTHERWISE EXTERNAL TO SERVER
                }
            },
        port: 3000,
        ui:{
			port: 3010
		}
});

dev.init({
    server: {
        baseDir: "dev/app", // START SERVER IN OUR DEVELOPMENT ENVIROMENT
        routes: {
                "/bower_components": "bower_components" // WATCH ALSO BOWER DIR OTHERWISE EXTERNAL TO SERVER
                }
            },
        port: 3001,
        ui:{
			port: 3011
		}
});


// Static Server + watching scss/html files
gulp.task('server', ['sass', 'script'], function() {   //WATCH SASS, JS & HTML FILES FOR CHANGES
    gulp.watch('dev/app/assets/sass/**/*.scss', ['sass', 'build']).on('change', dev.reload, dist.reload);
    gulp.watch('dev/app/**/*.js,' ['script', 'build']).on('change', dev.reload, dist.reload);
    gulp.watch("dev/app/*.html").on('change', dev.reload, dist.reload);
});
