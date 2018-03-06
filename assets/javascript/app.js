$(document).ready(function () {


    // Create an object for the questions

    var correct = 0;

    var incorrect = 0;

    var question1 = {
        question: 'What is the color of the ocean?',
        ans: ['a.red', 'b. blue', 'c. yellow'],
        flag: [false, true, false],
        answers: 'b. blue'
    };
    var question2 = {
        question: 'Name the largest fish in the ocean?',
        ans: ['a. whale shark', 'b. red snapper', 'c. star fish'],
        flag: [true, false, false],
        answers: 'a. whale shark'
    };
    var question3 = {
        question: 'What is the slowest fish?',
        ans: ['a. mud fish', 'b. cod fish', 'c. dwarf seahorse'],
        flag: [false, false, true],
        answers: 'c. dwarf seahorse'
    };
    var question4 = {
        question: 'Which ocean has the most marine life?',
        ans: ['a.atlantic ocean', 'b. pacific ocean', 'c. artic ocean'],
        flag: [false, true, false],
        answers: 'b. pacific ocean'
    };
    var question5 = {
        question: 'Which is the warmest ocean?',
        ans: ['a. pacific ocean', 'b. artic ocean', 'c. indian ocean'],
        flag: [false, false, true],
        answers: 'c. indian ocean'
    };

    var triviaQuestions = ["question1", "question2", "question3", "question4", "question5"]
    // Create a timer Object:

    var index = 0;
    var oceanTriviaTimer = {
        time: 25,
        start: function () {
            timeCounter = setInterval(oceanTriviaTimer.count, 1000);
        },

        stop: function () {
            clearInterval(timeCounter)
        },

        reset: function () {
            this.time = 25;
            $("#timer").html("<h3>" + this.time + " seconds remaining </h3>");
        },

        count: function () {
            OceanTriviaTimer.time;
    
            if (oceanTriviaTimer.time > 0) {
                $("#timer").html("<h3>" + ceanTriviaTimer.timne + " seconds remain</h3>");
            }
            else {
                index++;
                incorrectAns();
                OceanTriviaTimer.reset();
            }

            if (index < triviaQuestions.length) {
                showQuestion(index);
            }
            else {
                $(".options").hide();
            }
        }

    };

    function showQuestion(choices) {

        oceanTriviaTimer.reset();
        $("#question").html("<h3>" + triviaQuestions[choices].question + "</h3>");
        $("#buttona").text(triviaQuestions[choices].ans[0, 1, 2]).show();
        $("#buttonb").text(triviaQuestions[choices].ans[0, 1, 2]).show();
        $("#buttonc").text(triviaQuestions[choices].and[0, 1, 2]).show();

    }
    function questionSetUp() {
        index = 0;
        $("#question").append("<button id='start'>Start</button>");
        $('#start')on('click', function(){
            start();
        })
        });


    function getAnswer() {

        $('.options').on('click', function() {
            index++;
            $(".question").text('');
            $("#buttona").text('');
            $("#buttonb").text('');
            $("#buttonc").text('');
            showQuestion();
        })
    }
    
    function ansCorrect() {
        correct++;
        alert("correct!");
  
    }
    
    function ansIncorrect() {
        incorrect++;
        alert("incorrect!");
 
    }
    
    function showResult() {
        $("#question").empty();
        $("#question").append("<h3><p>" + correct + " correct1</p></h3>");
        $("#question").append("<h3><p>" + incorrect + " incorrect1</p></h3>");
        oceanTriviaTimer.stop();
        $("#timer").empty();
    
    }
    
    setup();
    $('.options').on('click', function() {
     console.log($(this));
     if(this.id == 'buttona') {
         var multipleChoice = 'a';
     } else if(this.id == 'buttonb') {
         multipleChoice = 'b';
     } else if (this.id == 'buttonc') {
         multipleChoice = 'c';
    
     } 
     if ((multipleChoice === 'a') && (triviaQuestions[index].flags[0] == true)) {
         ansCorrect();
     } else if (multipleChoice === 'a') {
         ansIncorrect();
     }
     if ((multipleChoice === 'b') && (triviaQuestions[index].flags[1] == true)) {
         ansCorrect();
     } else if (multipleChoice === 'b') {
         ansIncorrect();
     }
    if ((multipleChoice === 'c') && (triviaQuestions[index].flags[2] == true)) {
         ansCorrect();
     } else if (multipleChoice === 'c') {
         ansIncorrect();
     }
   
    
     $("#question").text('');
     $("#buttona").text('');
     $("#buttonb").text('');
     $("#buttonc").text('');
     
     index++;
     if (index < triviaQuestions.length) {
         showQuestion(index);
     } else {
         $(".options").hide();
         showResult();
     }
    });
    

});