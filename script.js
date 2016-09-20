var app = angular.module('computerSolutions', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/main', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'MainCtrl'
  })
  .when('/services', {
    templetUrl: 'services.html',
    controller: 'ServicesCtrl'
  })
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    redirectTo: '/main'
  });
}])

.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.person = 'John Doe';
}])

.controller('ServicesCtrl', ['$scope', function () {}])

.controller('ContactCtrl', ['$scope', function () {}]);
