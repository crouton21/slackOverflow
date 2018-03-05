const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const questionSchema = new mongoose.Schema(
    {
        question_title: {type: String, required:true},
        question_description: {type: String, required:true},
        question_author: {type: String, required:true},
        num_of_views: {type: Number, default: 0},
        array_of_tags: {type: Array},
        question_posted_date: {type: Date, default: Date.now},
        //image??
        array_of_answers: [{
            answer: {type: String, required:true},
            answer_author: {type: String, required: true},
            upvotes: {type: Number, default: 0},
            answer_posted_date: {type: Date, default: Date.now}
            //image??
        }]
    }
)

const question = mongoose.model('question', questionSchema, 'questions');

router.post('/', function(request, response){
    let newQuestion = new question(request.body);
    console.log('Question to save is:', request.body);
    newQuestion.save(function(error, savedQuestion){
        if (error){
            console.log('error on saving question:', error);
            response.sendStatus(500);
        }
        else{
            response.sendStatus(200);
        }
    })
});

router.get('/', function(request, response){
    question.find({}, function(error, topQuestions){ //limit to top 10, sort by most viewed!
        if(error){
            console.log('error on getting top questions', error);
            response.sendStatus(500);
        }
        else{
            response.send(topQuestions);
        }
    })
})

router.get('/:id', function(request, response){
    let id = request.params.id;
    question.findById(
        {"_id": id},
        function (error, questionToGet) {
          if (error){
            console.log('error on getting individual question:', error);
            response.sendStatus(500);
          } else {
            response.send(questionToGet);
          }
        }
      )
})


module.exports = router;