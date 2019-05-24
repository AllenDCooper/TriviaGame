// function to randomly pull 4 questions from the questionBank
function getQuestions(arr) {
    var questionSet = [];
    for (i = 0; i < 4; i++) {
        var randIndex = Math.floor(Math.random() * arr.length);
        questionSet[i] = questionBank[randIndex];
        questionBank.splice(randIndex, 1)
    }
    return questionSet;
}

// function to render trivia questions and answers
function renderQuestions(questionSet) {
    correctAnswers = 0;
    incorrectAnswers = 0;
    blankAnswers = 0;
    time = 60;
    runTimer();
    $("#timer-display").text("Time Remaining: " + 60 + " seconds");
    $("#play-again-button").text("");
    $("#start-button").text("");
    $("#display").text("")
    $("#submit-button").append("<button type=submit>Done</button>");


    // for loop to render questions
    for (i = 0; i < 4; i++) {
        var questionDiv = $("<p>");
        questionDiv.text((i + 1) + ". " + questionSet[i].question);
        $("#display").append(questionDiv);

        // nested for loop to render answers for each question
        for (j = 0; j < questionSet[i].answers.length; j++) {
            var answerButton = $("<input>");
            answerButton.attr("type", "radio");
            answerButton.attr("name", "question-" + (i + 1));
            answerButton.attr("data-value", questionSet[i].answers[j])
            
            // checks to if answer is correct, and then stores that in answer's value attribute
            if (j === questionSet[i].correctIndex) {
                answerButton.attr("value", "correct")
            } else {
                answerButton.attr("value", "incorrect")
            }
            // renders answer button on the document
            $("#display").append(answerButton);

            // renders button label on the document
            var answerLabel = $("<label>");
            answerLabel.append(questionSet[i].answers[j]);
            $("#display").append(answerLabel);
        }
    }
};

// creates variables for keeping score
var correctAnswers = 0;
var incorrectAnswers = 0;
var blankAnswers = 0;

// function to end the round and score user answers
function endRound() {
    for (i = 1; i < 5; i++) {
        var answer = [];
        answer[i] = $("input[name='question-" + i + "']:checked").val();
        if (answer[i] === "correct") {
            correctAnswers++
        } else if (answer[i] === "incorrect") {
            incorrectAnswers++
        } else {
            blankAnswers++
        }
    }
    // render scores on the page
    $("#display").text("")
    clearInterval(intervalId);
    $("#timer-display").text("")
    $("button").remove();
    $("#display").append("<h2>All Done!<h2>")
    $("#display").append("<h3>Correct Answers: " + correctAnswers + "</h3>")
    $("#display").append("<h3>Incorrect Answers: " + incorrectAnswers + "</h3>")
    $("#display").append("<h3>Unanswered: " + blankAnswers + "</h3>")
    $("#play-again-button").append("<button id=reset>Play Again</button>")
};

// function to score user answers when user submits
$("form").submit(function() {
    event.preventDefault();
    endRound();
});

// function to run timer and end round when time elapses
var intervalId;
var time = 60;
function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

// count function
function decrement() {
    time--;
    $("#timer-display").text("Time Remaining: " + time + " seconds");
    if (time === 0) {
        clearInterval(intervalId);
        endRound();
    };
}

// starts new round when user clicks play again button
$("#play-again-button").on("click", function(event) {
    event.preventDefault();
    renderQuestions(getQuestions(questionBank));
});

// render start button upon page load
$(document).ready(function() {
    $("#start-button").append("<button id=start>Start</button>")
})

// render questions when start button is clicked
$("#start-button").on("click", function(){
    renderQuestions(getQuestions(questionBank));
});