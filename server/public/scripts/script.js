const app = angular.module('soloApp', ['ngRoute']); 

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as hc'
  }).when('/tags', {
    templateUrl: 'views/tags.html',
    controller: 'TagController as tc'
  }).when('/users', {
    templateUrl: 'views/users.html',
    controller: 'UserController as uc'
  }).when('/newquestion', {
    templateUrl: 'views/newquestion.html',
    controller: 'newquestionController as nc'
  }).when('/individualquestion', {
    templateUrl: 'views/individualquestion.html',
    controller: 'individualquestionController as ic'
  }).when('/search', {
    templateUrl: 'views/search.html',
    controller: 'searchController as sc'
  }).when('/home', {
    redirectTo: '/'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });
});