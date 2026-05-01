const editQuestionInput = document.getElementById("editQuestion");
const editAnswerInputOne = document.getElementById("editAnswer1");
const editAnswerInputTwo = document.getElementById("editAnswer2");
const editAnswerInputThree = document.getElementById("editAnswer3");

const editAnswerRadioOne = document.getElementById("editCorrect1");
const editAnswerRadioTwo = document.getElementById("editCorrect2");
const editAnswerRadioThree = document.getElementById("editCorrect3");

const editConfirmBtn = document.getElementById("edit-confirm-btn");

// ===== Edit Inputs =====

const confirmDelBtn = document.getElementById("deleteYes");
const confirmNoBtn = document.getElementById("deleteNo");
const confirmNotiBtn = document.querySelector(".notiConfirm");



//  ===== Buttons =====

let notificationContainer = document.querySelector(".notification-container");
let notificationText = document.getElementById("notifyH2");

let deleteIndex = null;
let editIndex = null;

function notifyAdded(message) {
  notificationText.textContent = `${message}`;

  notificationContainer.classList.remove("hidden");
  notificationContainer.classList.add("active");
}

function notiConfirm() {
  notificationContainer.classList.add("hidden");
  notificationContainer.classList.remove("active");

  notificationText.textContent = "";
}

questionList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = Number(e.target.dataset.index);

    confirmPopup.classList.remove("hidden");
    confirmPopup.classList.add("active");

    deleteIndex = index;
  }
  if (e.target.classList.contains("edit-btn")) {
    const index = Number(e.target.dataset.index);
    editIndex = index;

    editQuestionInput.value = Questions[index].question;

    editAnswerInputOne.value = Questions[index].answers[0].text;
    editAnswerInputTwo.value = Questions[index].answers[1].text;
    editAnswerInputThree.value = Questions[index].answers[2].text;

    document
      .querySelectorAll('input[name="editCorrect"]')
      .forEach((input, i) => {
        if (Questions[index].answers[i].correct) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });

    hideContainers();

    editContainer.classList.remove("hidden");
    editContainer.classList.add("active");
  }
});

editContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-confirm")) {
    if (!editQuestionInput.value) {
      notifyAdded("Please fill the question field!");
      return;
    }
    if (
      !editAnswerInputOne.value ||
      !editAnswerInputTwo.value ||
      !editAnswerInputThree.value
    ) {
      notifyAdded("Please fill all answer fields!");
      return;
    }

    if (
      !editAnswerRadioOne.checked &&
      !editAnswerRadioTwo.checked &&
      !editAnswerRadioThree.checked
    ) {
      notifyAdded("Please select the correct answer!");
      return;
    }

    const newEditedQuestion = {
      question: editQuestionInput.value,
      answers: [
        {
          text: editAnswerInputOne.value,
          correct: editAnswerRadioOne.checked,
        },
        {
          text: editAnswerInputTwo.value,
          correct: editAnswerRadioTwo.checked,
        },
        {
          text: editAnswerInputThree.value,
          correct: editAnswerRadioThree.checked,
        },
      ],
    };

    Questions[editIndex] = newEditedQuestion;
    saveQuestions();

    editQuestionInput.value = "";
    editAnswerInputOne.value = "";
    editAnswerInputTwo.value = "";
    editAnswerInputThree.value = "";

    editAnswerRadioOne.checked = false;
    editAnswerRadioTwo.checked = false;
    editAnswerRadioThree.checked = false;

    hideContainers();

    questionCheck.classList.remove("hidden");
    questionCheck.classList.add("active");

    renderQuestionList();

    notifyAdded("Question Edited!");
  }
});

confirmDelBtn.addEventListener("click", () => {
  Questions.splice(deleteIndex, 1);

  saveQuestions();
  renderQuestionList();

  confirmPopup.classList.remove("active");
  confirmPopup.classList.add("hidden");
});

confirmNoBtn.addEventListener("click", () => {
  confirmPopup.classList.remove("active");
  confirmPopup.classList.add("hidden");
});

confirmNotiBtn.addEventListener("click", notiConfirm);
