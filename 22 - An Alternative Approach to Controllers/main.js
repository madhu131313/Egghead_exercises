var app = angular.module('phoneApp', []);

app.controller("AppCtrl",function ($scope) {
  // $scope.sayHi = function () {
  //   alert("Hi");
  // }

  this.sayHi = function () {
    alert("Hi");
  }

  return $scope.AppCtrl = this
})

app.directive("panel",function () {
	return {
    restrict: "E",
    transclude: true,
    template: '<div class="panel" ng-transclude>This is a panel component</div>'
	}
})
