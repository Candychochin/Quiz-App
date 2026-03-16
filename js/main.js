const startContainer = document.querySelector(".start-container");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const createContainer = document.querySelector('.create-container');
const editContainer = document.querySelector('.question-look-container');

// under is btn and upper is container

const startBtn = document.getElementById("start-btn");
const selectBtn = document.getElementById('select-btn');
const restartBtn = document.getElementById('restart-btn');
const createBtn = document.getElementById('create-btn');
const submitBtn = document.getElementById('submit-btn');

const navStartBtn = document.getElementById('nav-start-btn');
const navCreateBtn = document.getElementById('nav-create-btn');
const navCheckBtn = document.getElementById('nav-check-btn')


const button = {

  startBtn: function startBtn() {
    startContainer.classList.remove("active");
    startContainer.classList.add("hidden");

    resultContainer.classList.remove("active");
    resultContainer.classList.add("hidden");  

    createContainer.classList.remove('active');
    createContainer.classList.add('hidden');
    
    editContainer.classList.remove('active');
    editContainer.classList.add('hidden');

    quizContainer.classList.remove("hidden");
    quizContainer.classList.add("active");

  },
  createBtn: function createBtn() {
    startContainer.classList.remove("active");
    startContainer.classList.add("hidden");

    resultContainer.classList.remove("active");
    resultContainer.classList.add("hidden");

    quizContainer.classList.remove('active');
    quizContainer.classList.add('hidden');
    
    editContainer.classList.remove('active');
    editContainer.classList.add('hidden');

    createContainer.classList.remove('hidden');
    createContainer.classList.add('active');
  } ,
  editBtn: function createBtn() {
    startContainer.classList.remove("active");
    startContainer.classList.add("hidden");

    resultContainer.classList.remove("active");
    resultContainer.classList.add("hidden");

    quizContainer.classList.remove('active');
    quizContainer.classList.add('hidden');
    
    createContainer.classList.remove('active');
    createContainer.classList.add('hidden');

    editContainer.classList.remove('hidden');
    editContainer.classList.add('active');
  }





};

startBtn.addEventListener("click", button.startBtn);

createBtn.addEventListener('click' , button.createBtn);

navStartBtn.addEventListener('click' , button.startBtn);

navCreateBtn.addEventListener('click' , button.createBtn);

navCheckBtn.addEventListener('click' , button.editBtn);










//   ------ test ------

// Elements for create functionality
// const createQuestionInput = document.getElementById('create-question');
// const answerInputs = [
//     document.getElementById('answer1'),
//     document.getElementById('answer2'),
//     document.getElementById('answer3'),
//     document.getElementById('answer4')
// ];
// const correctCheckboxes = [
//     document.getElementById('correct1'),
//     document.getElementById('correct2'),
//     document.getElementById('correct3'),
//     document.getElementById('correct4')
// ];

// Ensure only one checkbox is checked at a time (radio-like behavior)

// correctCheckboxes.forEach((checkbox, index) => {
//     checkbox.addEventListener('change', () => {
//         if (checkbox.checked) {
//             // Uncheck all others
//             correctCheckboxes.forEach((otherCheckbox, otherIndex) => {
//                 if (otherIndex !== index) otherCheckbox.checked = false;
//             });
//         }
//     });
// });

// Example: Function to save the question (call this on a submit button click)
// function saveQuestion() {
//     const question = createQuestionInput.value;
//     const answers = answerInputs.map(input => input.value);
//     const correctIndex = correctCheckboxes.findIndex(checkbox => checkbox.checked);

//     if (!question || answers.some(answer => !answer) || correctIndex === -1) {
//         alert('Please fill in all fields and select the correct answer.');
//         return;
//     }

//     // Store the question data (e.g., push to an array or send to a server)
//     const questionData = {
//         question,
//         answers,
//         correctAnswer: correctIndex  // Index of the correct answer
//     };
//     console.log('Saved question:', questionData);  // Replace with actual storage logic

//     // Clear fields after saving
//     createQuestionInput.value = '';
//     answerInputs.forEach(input => input.value = '');
//     correctCheckboxes.forEach(checkbox => checkbox.checked = false);
// }

// Add a submit button to the HTML and attach the event
// Example: <button id="submit-question">Save Question</button>
// Then: document.getElementById('submit-question').addEventListener('click', saveQuestion);