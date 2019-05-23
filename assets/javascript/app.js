// creates variable questionBank that contains an array of questions as objects 
var questionBank = [
    {
        question: "Which institution had the highest enrollment in the US in fall 2015, with 165,743 students? (nces.ed.gov)",
        answers: ["Ivy Tech CC", "Houston CC", "University of Phoenix", "Liberty University"],
        correctIndex: 2
    },
    {
        question: "Which institution had the 4th highest enrollment in the US in fall 2015 with 70,724 students? (nces.ed.gov)",
        answers: ["Ivy Tech CC", "Lone Star College", "Liberty University", "Miami Dade College"],
        correctIndex: 1
    },
    {
        question: "What percentage of first-time, full-time undergraduate students who began seeking a bachelor's degree at a 4-year degree-granting institution in fall 2010 had graduated by 2016? (nces.ed.gov)",
        answers: ["80%", "70%", "60%","50%"],
        correctIndex: 2
    },
    {
        question: "What percentage of first-time, full-time students who began seeking a bachelor's degree at an OPEN-ENROLLMENT 4-year degree-granting institution in fall 2010 had graduated by 2016? (nces.ed.gov)",
        answers: ["61%", "49%", "39%","32%"],
        correctIndex: 3
    },
    {
        question: "The 6-year graduation rate for first-time, full-time students who began seeking a bachelor's degree in 2010 was _____ at PUBLIC institutions. (nces.ed.gov)",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 1
    },
    {
        question: "The 6-year graduation rate for first-time, full-time students who began seeking a bachelor's degree in 2010 was _____ at PRIVATE NON-PROFIT institutions. (nces.ed.gov)",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 0
    },
    {
        question: "The 6-year graduation rate for first-time, full-time students who began seeking a bachelor's degree in 2010 was _____ at FOR-PROFIT institutions. (nces.ed.gov)",
        answers: ["66%", "59%", "39%","26%"],
        correctIndex: 3
    },
    {
        question: "What percentage of WHITE 25-29 year olds in 2017 had received a Bachelor's Degree or higher? (nces.ed.gov)",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 1
    },
    {
        question: "What percentage of BLACK 25-29 year olds in 2017 had received a Bachelor's Degree or higher? (nces.ed.gov)",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 2
    },
    {
        question: "What percentage of HISPANIC 25-29 year olds in 2017 had received a Bachelor's Degree or higher? (nces.ed.gov)",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 3
    },
    {
        question: "What percentage of ASIAN 25-29 year olds in 2017 had received a Bachelor's Degree or higher? (nces.ed.gov)",
        answers: ["62.7%", "42.1%", "22.8%","18.5%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students had enrolled exclusively in distance learning course in 2015? (nces.ed.gov)",
        answers: ["14.4%", "12.1%", "10.5%","9.2%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students had not taken a distance learning course in 2015? (nces.ed.gov)",
        answers: ["70%", "60%", "50%","40%"],
        correctIndex: 0
    },
    {
        question: "What percentage of undergraduate students reported having a disability in 2011? (nces.ed.gov)",
        answers: ["3%", "5%", "8%","11%"],
        correctIndex: 3
    },
    {
        question: "What is the average conversion rate from intern to full-time hire? (NACE)",
        answers: ["60%", "45%", "30%","15%"],
        correctIndex: 1
    },
    {
        question: "On average, how many months in advance of start date do employers begin recruting interns? (NACE)",
        answers: ["3 months", "4 months", "5 months","8 months"],
        correctIndex: 3
    },
    {
        question: "What is the average annual salary of the class of 2018 graduates? (NACE)",
        answers: ["$30,000", "$40,000", "$50,000","$60,000"],
        correctIndex: 2
    },
    {
        question: "What percentage of college seniors have internship experience?",
        answers: ["30%", "38%", "45%","55%"],
        correctIndex: 3
    },
    {
        question: "What percentage of employers deem critical thinking/problem solving as very extremely essential in new hires? (NACE, Job Outlook 2019)",
        answers: ["70%", "80%", "90%","100%"],
        correctIndex: 0
    },
    {
        question: "What percentage of career centers offer for-credit classes? (NACE 17-18 Career Services Benchmarking Survey)",
        answers: ["50%", "42%", "30%","22%"],
        correctIndex: 1
    },
    {
        question: "What percentage of career centers are housed in student affairs? (NACE 17-18 Career Services Benchmarking Survey)",
        answers: ["49%", "39%", "29%","19%"],
        correctIndex: 0
    },
    {
        question: "What is the median number of professional career services staff at an institution? (NACE 17-18 Career Services Benchmarking Survey)",
        answers: ["24", "17", "9","3"],
        correctIndex: 3
    },
];

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
        questionDiv.text(questionSet[i].question);
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