var app = angular.module('app');
console.log("show survey controller")

app.controller('showController', ['$scope', 'surveyFactory','$location','$routeParams', function($scope, surveyFactory, $location, $routeParams) {

// console.log($routeParams.id)
//   surveyFactory.show($routeParams.id, function(data){
//       $scope.survey = data
//       // console.log($scope.survey)
//     })

 $scope.survey = [];
//  console.log($scope.friends)
$scope.quest = {};
 var index = function () {
     surveyFactory.index(function(data) {
         $scope.surveys = data;
         var fid = $routeParams.id
          for(survey of $scope.surveys){
            if(survey._id == fid){
              $scope.quest = survey;
            }
          }
     })
 }
 index();

 $scope.vote = function(option){
   $scope.quest.votes += 1;
  //  surveyFactory.update($scope.quest.votes, function(data){
  //    $location.url('/')
  //  })

 }


}]);
