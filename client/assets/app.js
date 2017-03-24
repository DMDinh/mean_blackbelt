var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
$routeProvider

    // .when('/login', {
    //   templateUrl: 'partials/login.html',
    //   controller: 'userController'
    // })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'mainController'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'newController'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/poll.html',
      controller: 'showController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
