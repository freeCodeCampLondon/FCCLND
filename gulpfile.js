/**
 * Gulp is our development taskrunner
 */

var gulp = require('gulp');
require('require-dir')('./gulp-tasks'); // Modularised Gulp Tasks

/* Default Task */
gulp.task('default', ['serve-dev']);
