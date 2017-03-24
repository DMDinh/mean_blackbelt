console.log('routes');

var path = require('path');
var surveys = require('./../controllers/surveys.js');

console.log("reached routes")
module.exports = function(app){
app.get('/survey', function(req, res) {
  surveys.index(req, res);
});
app.get('/survey/:id', function(req, res) {
  surveys.show(req, res);
});
app.post('/survey', function(req, res) {
  surveys.create(req, res);
});
app.post('/user', function(req, res) {
  surveys.create(req, res);
});
app.put('/survey/:id', function(req, res) {
  surveys.update(req, res);
});
app.delete('/survey/:id', function(req, res) {
  surveys.delete(req, res);
});




}
