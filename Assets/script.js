// Quiz game

var questionCount = 0;
var score = 0;
var time = 120;
// change time var to 10 for quicker testing

var questionArray = [
  {
    title: "Commonly used Data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ______:",
    choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    answer: "Parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ______:",
    choices: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    title:
      "String values must be enclosed within _____ when being assigned to variables",
    choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    answer: "Quotes",
  },
];

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
      endGame();
      //endGame();
    }
  }, 1000);
  // 1000 Milliseconds = 1 second

  //hide the start scrren
  document.querySelector("#start-screen").classList.add("hide");
  //show the questions container
  document.querySelector("#question-screen").classList.remove("hide");

  //document.querySelector("question-screen1").classList.remove("hide");

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

// document
//   .querySelector("#quesion-screen1")
//   .addEventListener("click", function (event) {
//     if (event.target.className.indexOf("answer-choice") > -1) {
//       answerHandling(event);
//     }
//   });

var answerHandling = function (event) {
  // After question is answered correctly, display correct and go to next question
  if (event.target.textContent === questionArray[questionCount].answer) {
    score++;
  } else {
    time -= 10;
  }

  //increase qCount here
  questionCount++;

  //check if questrionCount === questionArray.length to see if you should generateQ or endgame()
  if (questionCount === questionArray.length) {
    endGame();
  } else {
    generateQuest();
  }
};

var endGame = function () {
  //stop timer
  clearInterval(timer);
  //show end screen
  document.querySelector("#end-screen").classList.remove("hide");
  //display score
  document.querySelector(".score").textContent = score;
  //hide questions
  document.querySelector("#question-screen").classList.add("hide");
};

// store in local storage - understand shape and design of data

// data = {
//   name: "Tom",
//   score: 2
// }

// add event listener to submit btn to handle local store data
// looking for an element with the id of submit, adding event listener "click" once clicked, the function runs.
document.querySelector("#submit").addEventListener("click", function () {
  //save information

  //get the old information if there is any, json is not JS readable, so parse turns in into JS readable, getting the item of the input of high score. OR if it is false (no previous score), then it will take input.
  var oldInfo = JSON.parse(localStorage.getItem("highscores")) || [];
  //get initials - looking for an element with the id of input, value is what user types in.
  var initials = document.querySelector("#input").value;
  //build obj - data - what user inputs
  var data = {
    name: initials,
    score: score,
  };
  //add the obj into the old info array - if there is no previous input or old input matches, then new data (what user types in) gets pushed to old info (updated info at this point)
  oldInfo.push(data);
  //save it - this is going to local storage, settign the input from high scores and stringify turns JSON object (parse) to regulas JSON
  localStorage.setItem("highscores", JSON.stringify(oldInfo));
});
