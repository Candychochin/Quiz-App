let progressNum = document.getElementById("progressNum");
let question = document.getElementById("question");

let answerOptionOne = document.getElementById("answerOne");
let answerOptionTwo = document.getElementById("answerTwo");
let answerOptionThree = document.getElementById("answerThree");

let resultCongrats = document.getElementById("result-congrats");
let resultScore = document.getElementById("result-score");
let resultAdvice = document.getElementById("result-advice");

let progressBar = document.getElementById("progress-bar");


let currentQuestionIndex = 0;
let scores = 0;

let shuffledQuestions = [];

const quiz = {

  render: () => {


    let current = shuffledQuestions[currentQuestionIndex];

    let shuffledAnswers = [...current.answers]; // shuffled questions' answers
   
    // console.log(shuffledAnswers)
    // console.log(JSON.stringify(shuffledAnswers));

    shuffle(shuffledAnswers);

    quiz.currentAnswers = shuffledAnswers;

    question.textContent = current.question;

    answerOptionOne.querySelector("span").textContent = shuffledAnswers[0].text;
    answerOptionTwo.querySelector("span").textContent = shuffledAnswers[1].text;
    answerOptionThree.querySelector("span").textContent = shuffledAnswers[2].text;

    progressNum.textContent = `${currentQuestionIndex + 1} / ${Questions.length}`;

    document.querySelectorAll('input[name="answer"]').forEach((input) => {
      input.checked = false;
    });
    updateProgress();
  },

  renderResult: (endText) => {
    resultCongrats.textContent = `${endText}`;
    resultScore.textContent = `Your Score Is ${scores}!`;


    if (scores <= Questions.length * (40 / 100)) {
         resultAdvice.textContent = "Better Luck Next Time!";
    } else if ( scores <= Questions.length * (60 / 100) ) {
        resultAdvice.textContent = "Not Bad!";
    } else if ( scores <= Questions.length * (80 / 100) ) {
        resultAdvice.textContent = "Great Job!";
    } else if ( scores <= Questions.length * (100 / 100) ) {
        resultAdvice.textContent = "Excellent!";
    } 

    


  },
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateProgress() {
  let total = Questions.length;
  let progress = currentQuestionIndex + 1;

  let percentage = (progress / total) * 100;

  progressBar.style.width = percentage + "%";

}