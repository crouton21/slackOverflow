app.controller('UserController', ['QuestionService', function(QuestionService) {
    console.log('UserController created.');
    let self = this;

    self.questions = QuestionService.questions;
    
  }]);