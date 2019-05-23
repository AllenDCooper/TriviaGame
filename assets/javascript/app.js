// define questionBank array that contains questions as objects 
var questionBank = [
    {
        question: "q1",
        answers: {
            a: "a1a",
            b: "a1b",
            c: "a1c",
            d: "a1d",
        },
        correctAnswer: "a"
    },
    {
        question: "q2",
        answers: {
            a: "a2a",
            b: "a2b",
            c: "a2c",
            d: "a2d",
        },
        correctAnswer: "a"
    },
    {
        question: "q3",
        answers: {
            a: "a3a",
            b: "a3b",
            c: "a3c",
            d: "a3d",
        },
        correctAnswer: "a"
    },
    {
        question: "q4",
        answers: {
            a: "a4a",
            b: "a4b",
            c: "a4c",
            d: "a4d",
        },
        correctAnswer: "a"
    },
    {
        question: "q5",
        answers: {
            a: "a5a",
            b: "a5b",
            c: "a5c",
            d: "a5d",
        },
        correctAnswer: "a"
    },
    {
        question: "q6",
        answers: {
            a: "a6a",
            b: "a6b",
            c: "a6c",
            d: "a6d",
        },
        correctAnswer: "a"
    },
    {
        question: "q7",
        answers: {
            a: "a7a",
            b: "a7b",
            c: "a7c",
            d: "a7d",
        },
        correctAnswer: "a"
    },
    {
        question: "q8",
        answers: {
            a: "a8a",
            b: "a8b",
            c: "a8c",
            d: "a8d",
        },
        correctAnswer: "a"
    },
    {
        question: "q9",
        answers: {
            a: "a9a",
            b: "a9b",
            c: "a9c",
            d: "a9d",
        },
        correctAnswer: "a"
    },
    {
        question: "q10",
        answers: {
            a: "a10a",
            b: "a10b",
            c: "a10c",
            d: "a10d",
        },
        correctAnswer: "a"
    },
    {
        question: "q11",
        answers: {
            a: "a11a",
            b: "a11b",
            c: "a11c",
            d: "a11d",
        },
        correctAnswer: "a"
    },
    {
        question: "q12",
        answers: {
            a: "a12a",
            b: "a12b",
            c: "a12c",
            d: "a12d",
        },
        correctAnswer: "a"
    },
    {
        question: "q13",
        answers: {
            a: "a13a",
            b: "a13b",
            c: "a13c",
            d: "a13d",
        },
        correctAnswer: "a"
    },
    {
        question: "q14",
        answers: {
            a: "a14a",
            b: "a14b",
            c: "a14c",
            d: "a14d",
        },
        correctAnswer: "a"
    },
    {
        question: "q15",
        answers: {
            a: "a15a",
            b: "a15b",
            c: "a15c",
            d: "a15d",
        },
        correctAnswer: "a"
    },
    {
        question: "q16",
        answers: {
            a: "a16a",
            b: "a16b",
            c: "a16c",
            d: "a16d",
        },
        correctAnswer: "a"
    },
    {
        question: "q17",
        answers: {
            a: "a17a",
            b: "a17b",
            c: "a17c",
            d: "a17d",
        },
        correctAnswer: "a"
    },
    {
        question: "q18",
        answers: {
            a: "a18a",
            b: "a18b",
            c: "a18c",
            d: "a18d",
        },
        correctAnswer: "a"
    },
    {
        question: "q19",
        answers: {
            a: "a19a",
            b: "a19b",
            c: "a19c",
            d: "a19d",
        },
        correctAnswer: "a"
    },
    {
        question: "q20",
        answers: {
            a: "a20a",
            b: "a20b",
            c: "a20c",
            d: "a20d",
        },
        correctAnswer: "a"
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

// function to render trivia questions
function renderQuestions(object) {
$("#display").append(JSON.stringify(getQuestions(object)));
};


