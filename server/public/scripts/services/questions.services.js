app.service('QuestionService', ['$http', function($http) {
    console.log('Question service created');
    let self = this;

    self.questions = {topQuestions:[], newQuestion:{}, individualQuestion:{}, allQuestions:[], search:''};

    self.getTopQuestions = function(){
        console.log('In getTopQuestions function');
        $http({
            method: 'GET',
            url: '/question/top'
        }).then(function(response){
            console.log('Got top questions:', response.data);
            self.questions.topQuestions = response.data; //top 10 questions by most viewed
            console.log('topQuestions array:', self.questions.topQuestions);
        }).catch(function(error){
            console.error('Error getting top questions', error)
        })
    }

    self.getAllQuestions = function(){
        console.log('In getAllQuestions function');
        $http({
            method: 'GET',
            url: '/question'
        }).then(function(response){
            console.log('Got all questions:', response.data);
            self.questions.allQuestions = response.data; 
            console.log('allQuestions array:', self.questions.allQuestions);
        }).catch(function(error){
            console.error('Error getting top questions', error)
        })
    }

    self.questionSubmitted = function(newQuestion){
        console.log('In questionSubmitted function', newQuestion);
        $http({
            method: 'POST',
            url: 'question',
            data: {
                question_author: newQuestion.question_author,
                question_title: newQuestion.question_title,
                question_description: newQuestion.question_description
            }
          }).then(function(response) {
            console.log('Sent new question');
            self.getTopQuestions();
            self.questions.newQuestion = {};
          })
          .catch(function(error){
            console.log(error);
          })
    }

    self.getIndividualQuestion = function(id){
        console.log('in getIndividualQuetion function', id)
        $http({
            method: 'GET',
            url: `/question/${id}`
        }).then(function(response){
            console.log('Got individual queston:', response.data);
            self.questions.individualQuestion = response.data; 
            console.log('individual question object:', self.questions.individualQuestion);
        }).catch(function(error){
            console.error('Error getting individual question', error)
        })
    }

    self.searchFor = function(search){
        console.log('in searchFor function', search);
        self.questions.search = search;
    }

    self.getTopQuestions();

  }]);