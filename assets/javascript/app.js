$(document).ready(function () {


    // Create an object for the questions

    
    function correctAnswers(answer) { 
        var correctAnswers = {
            a: 0,
            b: 0,
            c: 0,
        };
    }

    var questions = [
        {
            question1: "What is the color of the ocean?",
            answers: {
                a: "red",
                b: "blue",
                c: "yellow"
            },
            correctAnswer: "b"
        },
        {
            question2: "Name the largest fish in the ocean?",
            answers: {
                a: "whale shark",
                b: "red snapper",
                c: "star fish"
            },
            correctAnswer: "a"
        },
        {
            question3: "What is the slowest fish?",
            answers: {
                a: "mud fish",
                b: "cod fish",
                c: "dwarf seahorse",

            },
            correctAnswer: "c"
        },
        {
            question4: "Which is the warmest ocean??",
            answers: {
                a: "artic ocean",
                b: "pacific ocean",
                c: "indian ocean",

            },
            correctAnswer: "c"
        }
        {
            question5: "Which ocean has the most marine life?",
            answers: {
                a: "pacific ocean",
                b: "artic ocean",
                c: "atlantic ocean",

            },
            correctAnswer: "a"
        }
    ];

    var triviaQuestions = ["question1", "question2", "question3", "question4", "question5"];
    
    $( "#start" ).click(function() {
        $( "#questions" ).click();
      });
      
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

    

});