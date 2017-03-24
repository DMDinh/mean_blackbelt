// require mongoose
var mongoose = require('mongoose');
// create the schema
var Schema = mongoose.Schema;
var SurveySchema = new mongoose.Schema({
 author: {type: String, required: true, minlength: 4},
 question: {type: String, required: true, minlength: 8},
 option1: {type: String, required: true, minlength: 3},
 option2: {type: String, required: true, minlength: 3},
 option3: {type: String, required: true, minlength: 3},
 option4: {type: String, required: true, minlength: 3},
 votes: 0,
 user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users"}
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

var userSchema = mongoose.Schema({
  name :String,
  surveys: [{type: mongoose.Schema.Types.Mixed, ref: "Surveys"}]
})
// var VoteSchema = new mongoose.Schema({
//   vote: Number,
//   _survey: {type: Schema.Types.ObjectId, ref: 'Vote'},
// }, {timestamp: true });


// register the schema as a model
var Survey = mongoose.model('Survey', SurveySchema);
// var Vote = mongoose.model('Vote', VoteSchema);
