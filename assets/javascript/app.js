$(document).ready(function () {

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
        if (oceanTriviaTimer.time > 0) {
            $ ("#timer").html("<h3>" + ceanTriviaTimer.timne + " seconds remain</h3>");
        }
        }

    };
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

});