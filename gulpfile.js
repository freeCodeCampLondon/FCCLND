//CALL GULP TO CREAT TASKS FOR DEVELOPMENT
var gulp = require('gulp');
// REQUIRE-DIR PERMIT YOU DIVIDE GULP TASKS ACROSS MULTIPLE FILES
var requireDir = require('require-dir');
requireDir('./gulp-tasks');  // SET GULP DIR

//CALLING ALL TASKS WE NEED FOR DEVELPMENT
gulp.task('default', [ 'inject', 'script', 'server'], function () {

});
