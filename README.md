[![Stories in Ready](https://badge.waffle.io/FreeCodeCampLondon/FCCLND.png?label=ready&title=Ready)](https://waffle.io/FreeCodeCampLondon/FCCLND)
# FCC London Campers Web App

[![Join the chat at https://gitter.im/artitudinale1/FCCLND](https://badges.gitter.im/FreeCodeCampLondon/FCCLND.svg)](https://gitter.im/FreeCodeCampLondon/FCCLND?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Portal for Free Code Camp London Campers

Hey guys, I have started to develop our portal. The aim is to keep track of people learning with the Free Code Camp curriculum in London. This is so that we have an easy tool to keep in touch with each other, meet new people and track at which point of the FCC curriculum others are so we can easily pair program with those who are at the same point.

It's supposed to be newbie friendly so that everyone can contribute, which is why it is slightly over-commented. :)

There will be issues to resolve using: CSS, HTML, JS, Gulp, Unit Tests and in the future I'd like to migrate from Firebase to MongoDB - probably MongoLab - using NodeJS and ExpressJS to develop our little CMS.

### INSTALL

`git clone https://github.com/FreeCodeCampLondon/FCCLND.git`

`cd` into the FCCLND folder

Install these packages globally:

`npm install --global bower gulp-cli`

Install NPM Packages:

`npm install`

Install front-end dependencies:

`bower install`

Start developing with live-reload:

`gulp`

###[How to Contribute](CONTRIBUTING.md)
###[How to add yourself to the Campers page](dev/app/data/README.md)

### TECH USED SO FAR

* [Gulp](http://gulpjs.com/)

* [Bootsrap CSS](http://getbootstrap.com/css/)

* [Font Awesome]( http://fontawesome.io/?utm_source=hackernewsletter)

* [Isotope](http://isotope.metafizzy.co/)

* [AngularJS 1](https://angularjs.org/)

* [Firebase](http://firebase.com/)

### App Structure

Ideas taken from:

* [Scotch.io Angularjs Best practices directory structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

* [Blog Rancle: Angular Gulp Best Practices](http://blog.rangle.io/angular-gulp-bestpractices/)

![FCC LND app structure](./app-structure.png)
