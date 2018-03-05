app.controller('newquestionController', ['QuestionService', function(QuestionService) {
    console.log('newquestionController created.');
    let self = this;

    self.questions = QuestionService.questions;
    self.questionSubmitted = QuestionService.questionSubmitted

  }]);