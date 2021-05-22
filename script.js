var startButton = document.getElementById("start-btn");

var explainQuiz = document.getElementById("explainquiz");

var questionHolder = document.getElementById("question-container");

var questionText = document.getElementById("question");

var score = document.getElementById("score");

var quizTimer = document.getElementById("timer");

var scorePage = document.getElementById("score-page");
var playerScore = document.getElementById("player-score");
var highScoreDisplay = document.getElementById("high-scores");
var playerInitials = document.getElementById("player-initials");
var initials = document.getElementById("initials");
var scoreButton = document.getElementById("submit")

var answerA = document.getElementById("answerA")
var answerB = document.getElementById("answerB")
var answerC = document.getElementById("answerC")
var answerD = document.getElementById("answerD")

var timeLeft = 20;



var questions = [
    {
        question: "The three types of JavaScript data types are numbers, strings, and ________.",
        answerA: "prompts",
        answerB: "elements",
        answerC: "booleans",
        answerD: "decimals",
        correctAnswer: "booleans"
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        answerA: "prompt('Hello World')",
        answerB: "alertmsg('Hello World')",
        answerC: "alert('Hello World');",
        answerD: "box('Hello World');",
        correctAnswer: "alert('Hello World');"
    },
    {
        question: "Which of the following is the correct way to start a for loop?",
        answerA: "for (i = 0; i++)",
        answerB: "while (i < 5)",
        answerC: "for (i = 5; i < 0)",
        answerD: "for (i = 0;i <= 5;i++)",
        correctAnswer: "for (i = 0;i <= 5;i++)"
    },
    {   
        question: "Which of the following is the correct way to declare a variable in JavaScript?",
        answerA: "v = myVariable",
        answerB: "var myVariable",
        answerC: "variable myVariable",
        answerD: "v delcare myVariable",
        correctAnswer: "var myVariable"
    }
]



startButton.addEventListener("click", startQuiz)



var score = 0;

var currentQuestionIndex = 0;

var finalQuestionIndex = questions.length;

function generateQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    answerA.innerHTML = currentQuestion.answerA
    answerB.innerHTML = currentQuestion.answerB
    answerC.innerHTML = currentQuestion.answerC
    answerD.innerHTML = currentQuestion.answerD
}

var timerInterval;

function startQuiz() {
    console.log("start the game");
    startButton.classList.add("hide");
    explainQuiz.classList.add("hide");
    questionHolder.classList.remove("hide");
    quizTimer.classList.remove("hide");
    generateQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.innerHTML = "Time: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            displayScorePage();
        }
    }, 1000);
}

function displayScorePage() {
    questionHolder.classList.add("hide");
    scorePage.classList.remove("hide");
    highScoreDisplay.classList.remove("hide");
    playerInitials.classList.remove("hide");
    clearInterval(timerInterval);
    showQuizScore()

}

function showQuizScore() {
    playerScore.innerHTML = "Your score: " + score;
}

scoreButton.addEventListener("click", submitHighScore)


var userAndScore = {};

function submitHighScore() {
    userAndScore = {
        score: score,
        user: initials.value,
    };
    localStorage.setItem("score", JSON.stringify(userAndScore));
    console.log(userAndScore);
    console.log(score);
    showScoresOnPage();
}

function showScoresOnPage() {
    localStorage.getItem("score", JSON.stringify(userAndScore));
    var scoresList = document.getElementById("scores");
    var li = document.createElement("li");
    li.textContent = userAndScore.user + "  -  " + userAndScore.score;

    scoresList.appendChild(li);
}

answerA.addEventListener("click", checkAnswerA)
answerB.addEventListener("click", checkAnswerB)
answerC.addEventListener("click", checkAnswerC)
answerD.addEventListener("click", checkAnswerD)

function checkAnswerA() {
    correct = questions[currentQuestionIndex].correctAnswer;
    answer = questions[currentQuestionIndex].answerA;
    if (answer === correct) {
        alert("Correct!");
        score++;
        currentQuestionIndex++;
        generateQuestion();
    } else {
        alert("Incorrect");
        currentQuestionIndex++;
        generateQuestion();
    }
}

function checkAnswerB() {
    correct = questions[currentQuestionIndex].correctAnswer;
    answer = questions[currentQuestionIndex].answerB;
    if (answer === correct) {
        alert("Correct!");
        score++;
        currentQuestionIndex++;
        generateQuestion();
    } else {
        alert("Incorrect");
        currentQuestionIndex++;
        generateQuestion();
    }  
}

function checkAnswerC() {
    correct = questions[currentQuestionIndex].correctAnswer;
    answer = questions[currentQuestionIndex].answerC;
    if (answer === correct) {
        alert("Correct!");
        score++;
        currentQuestionIndex++;
        generateQuestion();
    } else {
        alert("Incorrect");
        currentQuestionIndex++;
        generateQuestion();
    }
}

function checkAnswerD() {
    correct = questions[currentQuestionIndex].correctAnswer;
    answer = questions[currentQuestionIndex].answerD;
    if (answer === correct) {
        alert("Correct!");
        score++;
        currentQuestionIndex++;
        generateQuestion();
    } else {
        alert("Incorrect");
        currentQuestionIndex++;
        generateQuestion();
    }
}