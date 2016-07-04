var gulp = require('gulp');
var argv = require('yargs').argv;
var $ = require('gulp-load-plugins')();
/**
 * Minify and push build to gh-pages branch
 */
var options = {};
if (argv.production) { // gulp deploy --production (push to upstream repo)
  options['remoteUrl'] = 'https://github.com/FreeCodeCampLondon/FCCLND.git';
} else if (argv.push) { // gulp deploy --push (push to your fork)
  /* no options needed */
} else { // compile but do not push
  options['push'] = false;
}

gulp.task('deploy', ['build'], function () {
  return gulp.src('./dist/app/**/*')
    /* Remove the debug message*/
    .pipe($.if('*.html', $.useref()))
    /* This is to ensure that we work from Firebase in production */
    .pipe($.if('*.js', $.replace('var localData = true;', 'var localData = false;')))
    /* Minify JavaScript */
    .pipe($.if('*.js', $.uglify({ mangle: false })))
    .pipe($.if('*.js', $.rev()))
    /* Minify CSS */
    .pipe($.if('*.css', $.cleanCss()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.ghPages(options));
});
