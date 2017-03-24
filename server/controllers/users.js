// console.log('survey controller after route');
//
// var mongoose = require('mongoose');
// var User = mongoose.model('User')
//
// module.exports = {
//   index: function(req,res){
//     //your code here
//     Survey.find({}, function(err, results) {
//       if (err) {
//         console.log(err)
//         res.json(err)
//       }  else{
//         res.json(results);
//       }
//     })
//   },
//
//   create: function(req,res){
//     //your code here
//     console.log('POST DATA', req.body);
//     var user = new User({name: req.body.name});
//     user.save(function(err){
//       if(err){
//         console.log("something went wrong!");
//         res.json(err);
//       } else {
//         console.log("success added user!");
//         res.json(user)
//         // res.redirect('/')
//       }
//     })
//   },
//
//
//   delete: function(req,res){
//     console.log(req.params.id)
//     Survey.findOne({_id: req.params.id}, function(err, data){
//       if (err) {
//         res.json(err);
//       } else {
//         Survey.remove(data, function(error, datum) {
//           if (error) {
//             res.json(error);
//           } else {
//             res.json(datum);
//           }
//         })
//       }
//     })
//   },
//
//   show: function(req,res){
//     //your code here
//     console.log("showing friend here")
//     Friend.findOne({_id: req.params.id}, function(err, data){
//       if (err) { console.log("somehting wrong");
//     }else {
//       res.json(data);
//       }
//     })
//   }
// }
