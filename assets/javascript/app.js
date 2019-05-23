// define questionBank array that contains questions as objects 
var questionBank = [
    {
        question: "q1",
        answers: ["a1a", "a1b", "a1c", "a3d"],
        correctIndex: 0
    },
    {
        question: "q2",
        answers: ["a2a", "a2b", "a2c", "a3d"],
        correctIndex: 0
    },
    {
        question: "q3",
        answers: ["a3a", "a3b", "a3c","a3d"],
        correctIndex: 0
    },
    {
        question: "q4",
        answers: ["a4a", "a4b", "a4c","a4d"],
        correctIndex: 0
    },
    {
        question: "q5",
        answers: ["a5a", "a5b", "a5c","a5d"],
        correctIndex: 0
    },
    {
        question: "q6",
        answers: ["a6a", "a6b", "a6c","a6d"],
        correctIndex: 0
    },
    {
        question: "q7",
        answers: ["a7a", "a7b", "a7c","a7d"],
        correctIndex: 0
    },
    {
        question: "q8",
        answers: ["a8a", "a8b", "a8c","a8d"],
        correctIndex: 0
    },
    {
        question: "q9",
        answers: ["a9a", "a9b", "a9c","a9d"],
        correctIndex: 0
    },
    {
        question: "q10",
        answers: ["a10a", "a10b", "a10c","a10d"],
        correctIndex: 0
    },
    {
        question: "q11",
        answers: ["a11a", "a11b", "a11c","a11d"],
        correctIndex: 0
    },
    {
        question: "q12",
        answers: ["a12a", "a12b", "a12c","a12d"],
        correctIndex: 0
    },
    {
        question: "q13",
        answers: ["a13a", "a13b", "a13c","a13d"],
        correctIndex: 0
    },
    {
        question: "q14",
        answers: ["a14a", "a14b", "a14c","a14d"],
        correctIndex: 0
    },
    {
        question: "q15",
        answers: ["a15a", "a15b", "a15c","a15d"],
        correctIndex: 0
    },
    {
        question: "q16",
        answers: ["a16a", "a16b", "a16c","a16d"],
        correctIndex: 0
    },
    {
        question: "q17",
        answers: ["a17a", "a17b", "a17c","a17d"],
        correctIndex: 0
    },
    {
        question: "q18",
        answers: ["a18a", "a18b", "a18c","a18d"],
        correctIndex: 0
    },
    {
        question: "q19",
        answers: ["a19a", "a19b", "a19c","a19d"],
        correctIndex: 0
    },
    {
        question: "q20",
        answers: ["a20a", "a20b", "a20c","a20d"],
        correctIndex: 0
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
    
    for (i = 0; i < 4; i++) {
        var questionDiv = $("<h2>");
        questionDiv.text(questionSet[i].question);
        $("#display").append(questionDiv);

        for (j = 0; j < questionSet[i].answers.length; j++) {
            var answerButton = $("<input>");
            answerButton.attr("type", "radio");
            answerButton.attr("id", questionSet[i].question)
            answerButton.attr("name", "question-" + (i + 1));
            answerButton.attr("data-value", questionSet[i].answers[j])
            
            // checks to if correct answer, and then stores that in value attribute
            if (j === questionSet[i].correctIndex) {
                answerButton.attr("value", "correct")
            } else {
                answerButton.attr("value", "incorrect")
            }
            $("#display").append(answerButton);

            var answerLabel = $("<label>");
            answerLabel.append(questionSet[i].answers[j]);
            $("#display").append(answerLabel);
        }
    }
};

// variables for score
var correctAnswers = 0;
var incorrectAnswers = 0;
var blankAnswers = 0;

// function to check if answers are correct
$("form").submit(function(){
    event.preventDefault();
    for (i = 1; i < 5; i++) {
        var answer = [];
        answer[i] = $("input[name='question-" + i + "']:checked").val();
        console.log(answer[i]);
        if (answer[i] === "correct") {
            correctAnswers++
        } else if (answer[i] === "incorrect") {
            incorrectAnswers++
        } else {
            blankAnswers++
        }
    }
});


renderQuestions(getQuestions(questionBank));


