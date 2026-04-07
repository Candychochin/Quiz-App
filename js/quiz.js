let progressNum = document.getElementById('progressNum');
let question = document.getElementById('question');

let answerOptionOne = document.getElementById('answerOne');
let answerOptionTwo = document.getElementById('answerTwo');
let answerOptionThree = document.getElementById('answerThree');

let resultCongrats = document.getElementById('result-congrats');
let resultScore = document.getElementById('result-score');
let resultAdvice = document.getElementById('result-advice');

let progressBar = document.querySelector('.progress-bar');


let currentQuestionIndex = 0;
let scores = 0;

let shuffledQuestions = [];


const quiz = {

    render: () => {

        




        let current = shuffledQuestions[currentQuestionIndex];

        let shuffledAnswers = [...current.answers];
        shuffle(shuffledAnswers);

        quiz.currentAnswers = shuffledAnswers;

        question.textContent = current.question;

        answerOptionOne.querySelector('span').textContent = shuffledAnswers[0].text;
        answerOptionTwo.querySelector('span').textContent = shuffledAnswers[1].text;
        answerOptionThree.querySelector('span').textContent = shuffledAnswers[2].text;

        progressNum.textContent = `${currentQuestionIndex + 1} / ${Questions.length}`

        



        document.querySelectorAll('input[name="answer"]').forEach(input => {
            input.checked = false;
        })

    } ,

    renderResult: () => {


        resultCongrats.textContent = 'Quiz Finished!';
        resultScore.textContent = `Your Score Is ${scores}!`;
        resultAdvice.textContent = 'Good Job'


    }


}


function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1 ) );

        [array[i], array[j]] = [array[j], array[i]];




    };

};













