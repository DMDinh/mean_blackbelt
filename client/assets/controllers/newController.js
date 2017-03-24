var app = angular.module('app');
console.log("new survey controller")

app.controller('newController', ['$scope', 'surveyFactory','$location', function($scope, surveyFactory, $location) {
  $scope.survey = {};
  $scope.surveys = [];
  $scope.errors = [];

  $scope.create = function() {
    $scope.errors = {};
      surveyFactory.create($scope.survey, function(data) {
        if (data.errors){
          console.log(data.errors)
          $scope.errors = data.errors
        } else { surveyFactory.index(function(data){
        console.log(data)
        $scope.surveys = data;
        $location.url('/dashboard')
        })
      }
      });
  }



}]);
