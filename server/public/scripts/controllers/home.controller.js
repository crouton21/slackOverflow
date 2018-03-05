app.controller('HomeController', ['QuestionService', function(QuestionService) {
    console.log('HomeController created.');
    let self = this;

    self.questions = QuestionService.questions;
    self.getTopQuestions = QuestionService.getTopQuestions;
    self.getIndividualQuestion = QuestionService.getIndividualQuestion;

  }]);