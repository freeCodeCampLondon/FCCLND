/**
 * Gulp is our development taskrunner
 */

var gulp = require('gulp');
require('require-dir')('./gulp-tasks'); // Modularised Gulp Tasks
var $ = require('gulp-load-plugins')();

/* Default Task */
gulp.task('default', ['serve-dev']);
