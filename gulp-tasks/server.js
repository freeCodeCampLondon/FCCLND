var gulp = require('gulp');
var browserSync = require('browser-sync');
var dist = browserSync.create('dist');
var dev = browserSync.create('dev');

/**
 * Serve development version of app
 */
gulp.task('serve-dev', ['inject', 'lint', 'browserify'], function () {
  return (function () { /* Temporary fix to stop this task from running when not called */
    /* Serve development files with browserSync */
    dev.init({
      server: {
        baseDir: './dev/app',
        routes: { /* Ensures files from external folders can also be served */
          '/bower_components': 'bower_components',
          '/.tmp': '.tmp'
        }
      },
      port: 3001,
      ui: {
        port: 3011
      }
    });
    /* Watch files for changes and reload */
    gulp.watch('./dev/app/**/*.scss', ['sass']).on('change', dev.reload);
    gulp.watch('./dev/app/**/*.js', ['lint', 'browserify']).on('change', dev.reload);
    gulp.watch('./dev/app/**/*.html').on('change', dev.reload);
  })();
});

/**
 * Serve Production Version of App
 */
gulp.task('serve-build', ['build'], function () {
  return (function () {
    dist.init({
      server: {
        baseDir: './dist/app',
      },
      port: 3000,
      ui: {
        port: 3010
      }
    });
    gulp.watch(['./tmp/**/*.css', './dev/app/**/*.{js,html}'], ['build']).on('change', dist.reload);
  })();
});
