console.log('survey controller after route');

var mongoose = require('mongoose');
var Survey = mongoose.model('Survey')

module.exports = {
  index: function(req,res){
    //your code here
    Survey.find({}, function(err, results) {
      if (err) {
        console.log(err)
        res.json(err)
      }  else{
        res.json(results);
      }
    })
  },

  create: function(req,res){
    //your code here
    console.log('POST DATA', req.body);
    var survey = new Survey({author: req.body.author, question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, votes: 0});

    survey.save(function(err){
      if(err){
        console.log("something went wrong!");
        res.json(err);
      } else {
        console.log("success added survey!");
        res.json(survey)
        // res.redirect('/')
      }
    })
  },

  update: function(req,res){
    //your code here
    console.log("update 2")
    Survey.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.json(result);
    })
  },

  delete: function(req,res){
    console.log(req.params.id)
    Survey.findOne({_id: req.params.id}, function(err, data){
      if (err) {
        res.json(err);
      } else {
        Survey.remove(data, function(error, datum) {
          if (error) {
            res.json(error);
          } else {
            res.json(datum);
          }
        })
      }
    })
  },

  show: function(req,res){
    //your code here
    console.log("showing friend here")
    Friend.findOne({_id: req.params.id}, function(err, data){
      if (err) { console.log("somehting wrong");
    }else {
      res.json(data);
      }
    })
  }
}
