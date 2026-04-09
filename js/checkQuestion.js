//  <div class="look-question-container">
//               <h1 id="look-question">What Is DNA?</h1>

//               <div class="look-answer-container">
//                 <div class="answers">
//                   <label for="look-answer1">
//                     <input type="radio" name="look-answer1" id="look-answer1-r" />

//                     <span id="look-answer1-t">Answer Option One</span>
//                   </label>
//                 </div>

//                 <div class="answers">
//                   <label for="look-answer2">
//                     <input type="radio" name="look-answer" id="look-answer2-r" />

//                     <span id="look-answer2-t">Answer Option Two</span>
//                   </label>
//                 </div>

//                 <div class="answers">
//                   <label for="look-answer3">
//                     <input type="radio" name="look-answer" id="look-answer3-r" />

//                     <span id="look-answer3-t">Answer Option Three</span>
//                   </label>
//                 </div>

//               </div>

//               <div class="question-actions-container">
//                 <button class="edit-btn">Edit</button>
//                 <button class="delete-btn">Delete</button>
//               </div>
// </div>

const questionList = document.getElementById("question-list");

function renderQuestionList() {
  questionList.innerHTML = "";

  Questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("look-question-container");

   

    div.innerHTML = `
            <h2>${index + 1}.   ${q.question}</h2>

            <div class="look-answer-container">
            
            ${q.answers
              .map(
                (a) =>
                  `
                <div class='answers'>
                    <span>${a.text} </span>
                    <span>${a.correct}</span>

                </div>

            `,
              ).join(" ")}

            </div>
             
            <div class="question-actions-container">
            
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index=${index}>Delete</button>
            
            </div>
        
        
        
        
        `;

    questionList.appendChild(div);
  });
}
