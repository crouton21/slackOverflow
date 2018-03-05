app.controller('individualquestionController', ['QuestionService', function(QuestionService) {
    console.log('individualquestionController created.');
    let self = this;

    self.questions = QuestionService.questions;


  }]);