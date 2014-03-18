'use strict';

var portfolioApp = angular.module('portfolioApp', [
        'ngRoute',
        'ngResource',
        'portfolioApp.services',
        'portfolioApp.controllers',
        'portfolioApp.constants',
        'portfolioApp.filters',
        'portfolioApp.directives'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.tpl.html', controller: 'HomeController', title: 'Home Page'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.tpl.html', controller: 'AboutController', title: 'About Page'});
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.tpl.html', controller: 'ContactController', title: 'Contact Page'});
        $routeProvider.when('/property-information', {
            templateUrl: 'partials/property-information.tpl.html',
            controller: 'PropertyInformationController',
            title: 'Property Information Page',
            contactform:'partials/contact-form.html'
        });
        $routeProvider.when('/blog', {templateUrl: 'partials/blog.tpl.html', controller: 'BlogController', title: 'Blog Page'});

        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .run(['$location', '$rootScope', 'baseTitle', function ($location, $rootScope, baseTitle) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = baseTitle + current.$$route.title;
        });
    }]);

// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000
  });
});



