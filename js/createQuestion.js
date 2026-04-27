document.addEventListener("DOMContentLoaded", () => {
  const createQuestionInput = document.getElementById("create-question");
  const createAnswerInputOne = document.getElementById("create-answer1");
  const createAnswerInputTwo = document.getElementById("create-answer2");
  const createAnswerInputThree = document.getElementById("create-answer3");

  const createSubmitBtn = document.getElementById("submit-btn");

  const createCorrectRadioOne = document.getElementById("create-correct1");
  const createCorrectRadioTwo = document.getElementById("create-correct2");
  const createCorrectRadioThree = document.getElementById("create-correct3");

  createSubmitBtn.addEventListener("click", () => {
    if (!createQuestionInput.value) {
      notifyAdded("Please fill in the question field!");
      return;
    }
    if (
      !createAnswerInputOne.value ||
      !createAnswerInputTwo.value ||
      !createAnswerInputThree.value
    ) {
      notifyAdded("Please fill in all answer fields!");
      return;
    }

    if (
      !createCorrectRadioOne.checked &&
      !createCorrectRadioTwo.checked &&
      !createCorrectRadioThree.checked
    ) {
      notifyAdded("Please select the correct answer!");
      return;
    }

    const newQuestion = {
      question: createQuestionInput.value,
      answers: [
        {
          text: createAnswerInputOne.value,
          correct: createCorrectRadioOne.checked,
        },
        {
          text: createAnswerInputTwo.value,
          correct: createCorrectRadioTwo.checked,
        },
        {
          text: createAnswerInputThree.value,
          correct: createCorrectRadioThree.checked,
        },
      ],
    };

    Questions.push(newQuestion);

    createQuestionInput.value = "";
    createAnswerInputOne.value = "";
    createAnswerInputTwo.value = "";
    createAnswerInputThree.value = "";

    createCorrectRadioOne.checked = false;
    createCorrectRadioTwo.checked = false;
    createCorrectRadioThree.checked = false;

    saveQuestions();

    renderQuestionList();

    notifyAdded("Question created successfully!");
  });
});
