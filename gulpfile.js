// CALL GULP TO CREATE TASKS FOR DEVELOPMENT
var gulp = require('gulp');
// REQUIRE-DIR PERMIT YOU DIVIDE GULP TASKS ACROSS MULTIPLE FILES
var requireDir = require('require-dir');
requireDir('./gulp-tasks');  // SET GULP DIRECTORY

// CALLING ALL TASKS WE NEED FOR DEVELOPMENT
gulp.task('default', [ 'inject', 'script', 'server'], function () {

});
