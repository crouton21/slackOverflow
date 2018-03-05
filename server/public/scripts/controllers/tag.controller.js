app.controller('TagController', ['QuestionService', function(QuestionService) {
    console.log('TagController created.');
    let self = this;

    self.questions = QuestionService.questions;
    
  }]);