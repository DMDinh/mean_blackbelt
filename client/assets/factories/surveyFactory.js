app.factory('surveyFactory', ['$http', function($http) {
  console.log('reached survey Factory');
  var surveylist = [];
  var factory = {};
  var option = {vote: 0};
  factory.index = function(callback) {
      $http.get('/survey').then(function(res){
        var surveys = res.data
        callback(surveys);
      });
  }

  factory.show = function(id, callback) {
      $http.get('/survey/'+id).then(function(res){
         var survey = res.data;
        callback(survey)
      });
  }
  factory.create = function(survey, callback) {
    console.log(survey)
      $http.post('/survey', survey).then(function(res){
        // console.log(res.data);
        if (typeof(callback) == 'function'){
          return callback(res.data);

        }
      });
  }
  factory.update = function(survey, callback) {
    console.log("update here")
    $http.put('/survey/'+survey._id, survey).then(function(returned_data) {
        // console.log(res.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(survey, callback) {
    console.log(survey)
    $http.delete('/survey/'+survey._id).then(function(res) {
      if(typeof callback === 'function') {
        callback(res.data)
      }
    })
  }

  // factory.vote = function (data) {
  //   option.vote += 1;
  // }

  return factory;
}]);
