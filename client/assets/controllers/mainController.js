var app = angular.module('app');
console.log("main controller")

app.controller('mainController', ['$scope','$location', 'surveyFactory','$routeParams', function($scope, $location, surveyFactory, $routeParams) {
  $scope.surveys = [];

  var index = function () {
      surveyFactory.index(function(data) {
          // console.log(data);
          $scope.surveys = data;
      })
  }

  index();

  $scope.delete = function(survey) {
    console.log(survey)
    surveyFactory.delete(survey, function(data){
      surveyFactory.index(function(data){
        $scope.surveys = data;
      })
    });
  }

  // $scope.show = function(friend){
  //   // console.log(friend)
  //   friendsFactory.show(friend, function(data){
  //     console.log(data.data)
  //     console.log("here")
  //     var friend = data.data;
  //     console.log(friend)
  //     $location.url('/show/'+friend._id)
  //   })
  // }
  // show();

}]);
