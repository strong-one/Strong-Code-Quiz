//Test
console.log("******we are connected");

// Quiz game

var questionCount = 0;
var score = 0;
var time = 120;
// change time var to 10 for quicker testing

//create questions
var questionArray = [
  {
    title: "Commonly used Data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    title: "Commonly used Data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Booleans",
  },
  {
    title: "Commonly used Data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Strings",
  },
  {
    title: "Commonly used Data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Numbers",
  },
];

// Create timer
var timer;

// keep track of scores and log them

// when question is answered, "correct" || "wrong" is displayed below question choices

// Have "start quiz" button to begin game and go to first question
document.querySelector("#start-btn").addEventListener("click", function () {
  //start the timer
  timer = setInterval(function () {
    //decrease time
    time--;
    //show the decreased time
    document.querySelector(".time").textContent = time;
    //timer >= 1000 - check if we should end the game
    if (time <= 0) {
      clearInterval(timer);
      endGame();
      //endGame();
    }
  }, 1000);
  // 1000 Milliseconds = 1 second

  //hide the start scrren
  document.querySelector("#start-screen").classList.add("hide");
  //show the questions container
  document.querySelector("#question-screen").classList.remove("hide");
  //generate the question
  generateQuest();
});

var generateQuest = function () {
  var currentQ = questionArray[questionCount];
  //create a tempalte
  var template = `
    <div class="question-title">
        <h2>${currentQ.title}</h2>
    </div>

    <div class="question-choices">
        <ol>
        <li><button class="answer-choice">1: ${currentQ.choices[0]}</button></li>
        <li><button class="answer-choice">2: ${currentQ.choices[1]}</button></li>
        <li><button class="answer-choice">3: ${currentQ.choices[2]}</button></li>
        <li><button class="answer-choice">4: ${currentQ.choices[3]}</button></li>
        </ol>
    </div>
    </section>
    `;
  `
  <div class="question-choices">
          <h2${currentQ.title}></h2>
        </div>

        <div class="answers2">
          <ol>
            <li><button class="answer-choice>1: ${currentQ.choices[0]} </button></li>
            <li><button class="answer-choice>2: ${currentQ.choices[1]}brackets</button></li>
            <li><button class="answer-choice>3: ${currentQ.choices[2]}</button></li>
            <li><button class="answer-choice>4: ${currentQ.choices[3]}</button></li>
          </ol>
        </div>
      </section>
  
  `;

  //add the tempalte to the page and convert it into an html
  document.querySelector("#question-screen").innerHTML = template;
};

document
  .querySelector("#question-screen")
  .addEventListener("click", function (event) {
    if (event.target.className.indexOf("answer-choice") > -1) {
      answerHandling(event);
    }
  });

var answerHandling = function (event) {
  // After question is answered correctly, display correct and go to next question
  if (event.target.textContent === questionArray[questionCount].answer) {
    score++;
  } else {
    time -= 10;
  }

  //increase qCount here

  //check if questrionCount === questionArray.length to see if you should generateQ or endgame()
};

// If question is answered wrong same question and answers stay until answered correctly - then moves to next

//if question is answered incorrectly time is docked

// once all questions are answered, score is logged initials are entered and put into a high score box

// high scores are stored in box from high to low and box is able to be cleared out.
