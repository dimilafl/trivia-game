///////////////////////////////
////Minimum Viable Project Goals
///////////////////////////////

// Need to add questions and answers.
// -input box or multiple choice selector for answers to questions - with feedback and score changes depending on whether the answer was right or wrong
// -after a certain amount of questions are wrong the game would be over for the player
// a good UI, for players to have good experiences
// -ability to restart midgame
// -new question adder (or option to pass on a current question being asked)

const questionList = [
  {
    question: "Who is considered the greatest soccer player?",
    answers: ["Beckham", "Pele", "Maradona"],
    correctAnswer: "Pele",
  },
  {
    question:
      "How many players in total will be on the field in a typical soccer match?",
    answers: ["11", "22", "33"],
    correctAnswer: "22",
  },
  {
    question: "How long does a soccer game last? (in min)",
    answers: ["45", "90", "120"],
    correctAnswer: "90",
  },
  {
    question:
      "Which player scored the “Hand of God” goal in a match of the 1986 World Cup?",
    answers: ["Ronaldo", "Messi", "Maradona"],
    correctAnswer: "Maradona",
  },
  {
    question: "Who can add time in a soccer game?",
    answers: ["Referee", "Coach", "Captain"],
    correctAnswer: "Referee",
  },
  {
    question:
      "What is the limit of stoppage time that can be added at the end of a game",
    answers: ["10min", "5min", "None"],
    correctAnswer: "None",
  },
  {
    question:
      "The minimum number of players that a soccer team needs to be eligible to play is …",
    answers: ["7", "9", "11"],
    correctAnswer: "7",
  },
  {
    question: "Which soccer player is nicknamed Zizou?",
    answers: ["Gerrard", "Zidane", "Messi"],
    correctAnswer: "Zidane",
  },
  {
    question: "Which country won the most FIFA World Cup titles?",
    answers: ["Germany", "England", "Brazil"],
    correctAnswer: "Brazil",
  },
  // number: {
  //   question: "How",
  //   answers: ["45", "90", "120"],
  //   correctAnswer: "90",
  // },
];

//input variables
let score = 0;

const container = document.querySelector(".top-container");
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//input variables
//input variables

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//more input variables
const questionContainer = document.querySelector(".my-question");

const answerContainer = document.querySelector(".answer-container");

const answerAcontainer = document.querySelector(".answer-a");
const answerBcontainer = document.querySelector(".answer-b");
const answerCcontainer = document.querySelector(".answer-c");

const buttonAcontainer = document.querySelector(".button-a");

const buttonBcontainer = document.querySelector(".button-b");

const buttonCcontainer = document.querySelector(".button-c");

// need to make this html
//newQuestion

///////////////////////////////////////////////
//scores
const scoreContainer = document.querySelector(".score-container");

//hard code in html
const scoreElement = document.createElement("h4");
scoreElement.innerText = score;
scoreContainer.append(scoreElement);

//start button
const initialButton = document.querySelector(".start-button");
//start button
const nextButton = document.querySelector(".next-button");

//add ? button
const addButton = document.querySelector(".add-button");

//for iterating through the variable list
let questionArray = [];

//to start and stop questions
let action = null;

let index, correctInput;

///////////////////////////////////////////////

//more input variables

///////////////////////////////////////////////

for (let number in questionList) {
  //question

  inputForQuestion = questionList[number].question;
  questionArray.push(inputForQuestion);
}
///////////////////////////////////////////////

// const questionFunction = () => {
//   console.log(questionArray);
// };
// questionFunction();

///////////////////////////////////////////////

function clearScreen() {
  questionContainer.innerHTML = "";
}

function gameInitializer() {
  console.log("game started");

  index = 0;

  questionIterator();

  // index++;

  // console.log("~~~~~~done~~~~~~~");
}

function questionIterator() {
  clearScreen();

  // console.log(questionList);
  // console.log(index);
  // console.log("~~~~~~~~~~~~~");

  questionDisplay(questionList[index]);
}

function questionDisplay(questionInput) {
  questionContainer.innerHTML = questionInput.question;

  answerAcontainer.innerHTML = questionInput.answers[0];
  answerBcontainer.innerHTML = questionInput.answers[1];
  answerCcontainer.innerHTML = questionInput.answers[2];

  buttonAcontainer.innerHTML = questionInput.answers[0];

  buttonBcontainer.innerHTML = questionInput.answers[1];

  buttonCcontainer.innerHTML = questionInput.answers[2];

  correctInput = questionInput.correctAnswer;

  return correctInput;
}

function clearScreen() {
  questionContainer.innerHTML = "";

  answerAcontainer.innerHTML = "";
  answerBcontainer.innerHTML = "";
  answerCcontainer.innerHTML = "";

  buttonAcontainer.innerHTML = "Button";

  buttonBcontainer.innerHTML = "Button";

  buttonCcontainer.innerHTML = "Button";

  buttonAcontainer.style.color = "white";

  buttonBcontainer.style.color = "white";

  buttonCcontainer.style.color = "white";

  // console.log("~~~~~~done~~~~~~~");
}

// gameInitializer();

initialButton.addEventListener("click", gameInitializer);

nextButton.addEventListener("click", clearScreen);

addButton.addEventListener("click", () => {
  index++;

  questionIterator();
});

///////////////////////////////////////////////

function answerChecker(event) {
  if (event.currentTarget.innerText === correctInput) {
    console.log("correct");

    // console.log(index);
    // console.log("~~~~~~~~~~~");
    // console.log(correctInput);

    event.currentTarget.style.color = "green";

    score++;

    scoreElement.innerText = score;

    alert("now press clear question, and press add question after!");
  } else {
    console.log("wrong");

    // console.log(event.currentTarget.innerText);
    // console.log(index);
    // console.log("~~~~~~~~~~~");
    // console.log(correctInput);

    event.currentTarget.style.color = "red";

    score--;

    scoreElement.innerText = score;

    alert("now press clear question, and press add question after!");
  }
}

// change button text to names

///////////////////////////////////////////////

//answers - click function

buttonAcontainer.addEventListener("click", answerChecker);

buttonBcontainer.addEventListener("click", answerChecker);

buttonCcontainer.addEventListener("click", answerChecker);

// console.log(correctInput);

//now add winning conditions

//check rubric

//look in pseudocode for more ideas

//add questions

//git PAGES!!!!!!!!!!
//git PAGES!!!!!!!!!!
//git PAGES!!!!!!!!!!

//check for bugs
