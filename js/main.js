const startContainer = document.querySelector(".start-container");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const createContainer = document.querySelector(".create-container");
const questionCheck = document.querySelector(".question-look-container");
const confirmPopup = document.querySelector(".delete-popup-container");
const editContainer = document.querySelector(".edit-container");

// under is btn and upper is container

const startBtn = document.getElementById("start-btn");
const selectBtn = document.getElementById("select-btn");
const restartBtn = document.getElementById("restart-btn");
const createBtn = document.getElementById("create-btn");
const submitBtn = document.getElementById("submit-btn");

const navStartBtn = document.getElementById("nav-start-btn");
const navCreateBtn = document.getElementById("nav-create-btn");
const navCheckBtn = document.getElementById("nav-check-btn");

const editDeleteBtn = document.querySelectorAll(".delete-btn");
const editBtn = document.querySelectorAll(".edit-btn");
const confirmDelBtn = document.querySelectorAll(".confirmDel");
const confirmNoBtn = document.querySelectorAll(".confirmNo");

const containers = [
  startContainer,
  quizContainer,
  resultContainer,
  createContainer,
  questionCheck,
  editContainer,
];

function hideContainers() {
  containers.forEach((container) => {
    container.classList.remove("active");
    container.classList.add("hidden");
  });
}

const button = {
  startBtn: () => {
    hideContainers();

    quizContainer.classList.remove("hidden");
    quizContainer.classList.add("active");

    shuffledQuestions = [...Questions];
    shuffle(shuffledQuestions);

    currentQuestionIndex = 0;
    scores = 0;

    quiz.render();
  },

  createBtn: () => {
    hideContainers();

    createContainer.classList.remove("hidden");
    createContainer.classList.add("active");
  },

  editQuestionBtn: () => {
    hideContainers();

    renderQuestionList();

    questionCheck.classList.remove("hidden");
    questionCheck.classList.add("active");

    
    
  },

  editDeleteBtn: () => {
    confirmPopup.classList.remove("hidden");
    confirmPopup.classList.add("active");
  },

  confirmNoBtn: () => {
    confirmPopup.classList.add("hidden");
    confirmPopup.classList.remove("active");
  },

  editBtn: () => {
    hideContainers();

    editContainer.classList.remove("hidden");
    editContainer.classList.add("active");
  },

  selectBtn: () => {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) return;

    const selectedIndex = [
      ...document.querySelectorAll('input[name="answer"]'),
    ].indexOf(selected);

    let currentQuestion = Questions[currentQuestionIndex];

    if (quiz.currentAnswers[selectedIndex].correct) {
      scores++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < Questions.length) {
      quiz.render();
    } else {
      hideContainers();
      resultContainer.classList.remove("hidden");
      resultContainer.classList.add("active");

      quiz.renderResult();
    }
  },

  restartBtn: () => {
    score = 0;
    currentQuestionIndex = 0;

    hideContainers();
    quizContainer.classList.remove("hidden");
    quizContainer.classList.add("active");

    quiz.render();
  },
};

startBtn.addEventListener("click", button.startBtn);

createBtn.addEventListener("click", button.createBtn);

navStartBtn.addEventListener("click", button.startBtn);

navCreateBtn.addEventListener("click", button.createBtn);

navCheckBtn.addEventListener("click", button.editQuestionBtn);

selectBtn.addEventListener("click", button.selectBtn);

restartBtn.addEventListener("click", button.restartBtn);

editDeleteBtn.forEach((btn) => {
  btn.addEventListener("click", button.editDeleteBtn);
});

confirmNoBtn.forEach((btn) => {
  btn.addEventListener("click", button.confirmNoBtn);
});

editBtn.forEach((btn) => {
  btn.addEventListener("click", button.editBtn);
});
