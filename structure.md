
#FCC LND web app

Freecodecamp portal for Londoners campers

Hey guys, I have been starting developing our portal. The aim of this site is keeping track of people working at Freecodecamp track in London in order to have an easy tools to keep in touch with each other, meet new people and track at which point of the FCC track others are..so we can connect easily with others are at the same point of the track if we are willing to pair programming.

#TECHS USED SO FAR

gulp
boostrap css
font-awesome
Jquery.isotope
angularJS
Firebase

#App structure

/FccLndApp
|/bower-components
|				  angular/
|                 angular-route/----------------to manage our views: / and /campers
|				  angular-sanitize/-------------to render HTMl from JSON or Firebase
|				  angularfire/------------------API to connect AngularJS with Firebase
|				  bootstrap-css-only/
|				  firebase/ --------------------Firebase provider module
|				  font-awasome/
|				  isotope/ --------------- dynamic layout Jquery based used on campers page
|
|
|/dev -----------------our developent enviroment or source files
|                    /app/
|                        /assets/
|								/css---------------compiled but NOT minify for dev purpouse
|								/images
|								/sass
|									/modules----------variables, partials files
|									main.scss
|						/campers/
|								campers-inner.html -----template called by isotope directive
|								campers.controller.js ----cntr with inject directive and service
|								campers.directive.js -----isotope directive used just by campers
|								campers.html-----view for /campers with filter and directive
|						/data/
|								fccLndData.json ------data to call when not connected with Firebase
|						/main/
|								main.controllers.js--- with inject service to render data 
|								main.html
|						/shared/
|								controller.js ---cntr for navigation
|								/services/
|									services.js----- local ajax or Firebase service to render data
|
|						app.js -------declaration of angular app and deps
|						app.route.js -----config our routes: / and /campers
|						index.html -----header and footer and where view are rendered
|
|/dist ---------- Here will be our dist foulders: similar to dev/app, it will contain min css and
				  js. Files ready for disto.

|/gulp-task
|			inject.js -----at the moment injecting bower dep and our css/js in dev/app/index.html
|			script.js------jshint checking our js files
|			server.js------start server, call task to compile sass, watch js/css/html
|			style.js ------gulp task to compile sass and render css in app/assets/css/
|
|/node-modules/ -------------//npm modules
|
| bower.json --------------//listing bower-components dep with relative versions used

| gulpfile.js //starting gulp

| package.json ---------------//listing npm depences: node, gulp, test-unit etc


|.gitignore --------------// files youdon't want to commit: npm, bower dependecies


|					

| /gulp-task/
|           style.js // 1.from sass to css in app 2.sass->css in dist (minify)
|			server.js //1.start dev server 2.sync browser
|           script.js//1.verify js in app 2. verify and miinidy in dist
|           inject.js// 1. inject assets in html app annd dist.
|           bower.js//1.inject bower files 2.Move them and inject in dist
|			test.js // unit test ?


| /app
|      index.html
|	   app.js
|	   app.module.js // modeles used by app: firebase
|      app.routes.js // routes for /index and /about
|	   /shared
|			.service.js //services shared in all app- firebase
|	   
|			/components
|			    /home
|					home-controller.js
|					home-directive.js ///angular-dynamic-layout/ ?
|					home-view.html //Filtering
|				/about
|					about-controller.js
| 					about-view.html
|     /assets
|			/sass
|			/img
|			/data
				campers.json

|server.js
|
|/dist
|/test
|karma.conf.js