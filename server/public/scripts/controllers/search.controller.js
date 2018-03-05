app.controller('searchController', ['QuestionService', function(QuestionService) {
    console.log('searchController created.');
    let self = this;

    self.questions = QuestionService.questions;
    self.getAllQuestions = QuestionService.getAllQuestions;
    
    self.getAllQuestions();



  }]);