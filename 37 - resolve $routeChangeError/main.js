var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "ViewCtrl",
      resolve: {
        loadData: viewCtrl.loadData
      }
    })
});

app.controller("AppCtrl", function ($rootScope) {
  $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    console.log(rejection);
  })
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $route) {
  console.log($route);
  $scope.model = {
    message: "I'm a great app!" 
  }
});

viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();
  $timeout(function () {
    defer.reject("Your network is down");
  }, 500)
  return defer.promise;
}