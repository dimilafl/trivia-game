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

//delete
const newQuestion = document.createElement("h2");

// //iteration version
// const myNewQuestion = document.createElement("h2");

//not very DRY - for loop???? - not for this section because its creating HTML elements to append to

// delete
const newAnswers0 = document.createElement("h3");
const newAnswersButton0 = document.createElement("button");
const newAnswers1 = document.createElement("h3");
const newAnswersButton1 = document.createElement("button");
const newAnswers2 = document.createElement("h3");
const newAnswersButton2 = document.createElement("button");

const nextButton = document.querySelector(".next-button");

const addButton = document.querySelector(".add-button");

//button text
newAnswersButton0.innerHTML = "click this";
newAnswersButton1.innerHTML = "click this";
newAnswersButton2.innerHTML = "click this";

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

//more input variables
const questionContainer = document.querySelector(".my-question");

// need to make this html
//newQuestion

//scores
const scoreContainer = document.querySelector(".score-container");

//hard code in html
const scoreElement = document.createElement("h4");
scoreElement.innerText = score;
scoreContainer.append(scoreElement);

//start button
const initialButton = document.querySelector(".start-button");

//for iterating through the variable list
let questionArray = [];

//to start and stop questions
let action = null;

///////////////////////////////////////////////

//more input variables

///////////////////////////////////////////////

for (let number in questionList) {
  //question

  inputForQuestion = questionList[number].question;
  questionArray.push(inputForQuestion);
}
////////

const questionFunction = (currentQuestion) => {
  while (action != "stop") {
    for (let number in questionList) {
      //maybe move this part over to another function?
      currentQuestion = questionList[number].question;

      console.log(currentQuestion);

      newQuestion.innerHTML = currentQuestion;
      // newQuestion.innerHTML = questionList[number].question;

      console.log("~~~~~~~~~~~~~");

      // //shouldn't append until on click
      // container.append(newQuestion);

      action = "stop";

      //can do .question and so on for other variables i think
      // for (let newVar in questionList[number].question) {
    }
  }
};

questionFunction();

// for (let i = 0; i < questionArray.length; i++)

////////

// for going to next question - add new button?
// that clears the innerHTML and adds new question

// const displayFunction = () => {
// console.log("hi");

for (let i = 0; i < questionArray.length; i++) {
  // action = null;

  let currentQuestion = questionArray[i];
}

//   // console.log(i);
//   // console.log("~~~~~~~~~~~~~");
// }
// };

// turn on
// displayFunction();

////////
const clearScreen = () => {
  newQuestion.innerHTML = "";

  action = null;

  // questionFunction();
  // questionFunction(currentQuestion);
  console.log("~~~~~~done~~~~~~~");

  // action = stop;
};
////////
const addNewScreenQuestion = () => {
  newQuestion.innerHTML = "";
  // action = null;
  // questionFunction();
  // questionFunction(currentQuestion);
  // console.log("~~~~~~done~~~~~~~");
  // action = stop;
};
//next button

nextButton.addEventListener("click", clearScreen);

//add button
addButton.addEventListener("click", addNewScreenQuestion);
////////

const appendFunction = () => {
  //shouldn't append until on click
  container.append(newQuestion);
  // action = null;
};

initialButton.addEventListener("click", appendFunction);

////////

//answers - click function

newAnswersButton0.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    action = null;
    console.log("correct");

    event.currentTarget.style.color = "green";

    score++;

    scoreElement.innerText = score;
  } else {
    action = null;
    console.log("wrong");

    event.currentTarget.style.color = "red";

    score--;

    scoreElement.innerText = score;
  }
});

newAnswersButton1.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    action = null;
    console.log("correct");

    event.currentTarget.style.color = "green";

    score++;

    scoreElement.innerText = score;
  } else {
    action = null;
    console.log("wrong");

    event.currentTarget.style.color = "red";

    score--;

    scoreElement.innerText = score;
  }
});

newAnswersButton2.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    action = null;
    console.log("correct");

    event.currentTarget.style.color = "green";

    score++;

    scoreElement.innerText = score;
  } else {
    action = null;
    console.log("wrong");

    event.currentTarget.style.color = "red";

    score--;

    scoreElement.innerText = score;
  }
});

///????? whats this?
// const answers = {};

// ///////////////////////////////////////////////

// //iterating through the variable list
// for (let number in questionList) {
//   //question

//   inputForQuestion = questionList[number].question;
//   questionArray.push(inputForQuestion);

//   //// console.log(inputForQuestion);
//   //// console.log("~~~~~~~~~~~~~");

//   // console.log(questionArray);
//   // console.log("~~~~~~~~~~~~~");

//   //iteration version
//   const myNewQuestion = document.createElement("h2");

//   // good idea but does nothing
//   // myNewQuestion.innerHTML = questionList[number].question;
//   // console.log(myNewQuestion);
//   // console.log("~~~~~done~~~~~~~~");

//   const questionGenerator = (questionNum) => {
//     //appends everything
//     // container.append(myNewQuestion);

//     //iterates 8 times for each number - need to iterate once - can do thing where its like if number == number1

//     while (action !== "stop") {
//       // for (let i = 0; i < questionArray.length; i++) {

//       //move to for loop?
//       // newQuestion.innerHTML = questionArray[i];

//       // console.log(i);
//       console.log(number);
//       console.log("~~~~~~~~~~~~~");
//       console.log(this.questionNum);
//       console.log(this.number);
//       console.log(questionNum);
//       console.log("~~~~~done~~~~~~~~");

//       container.append(newQuestion);

//       // container.append(questionArray[i]);

//       //all good
//       container.append(newAnswers0);
//       container.append(newAnswersButton0);

//       newAnswers0.setAttribute("class", "class-a");
//       newAnswersButton0.setAttribute("class", "class-a");

//       newAnswersButton0.setAttribute("id", questionList[number].answers[0]);

//       container.append(newAnswers1);
//       container.append(newAnswersButton1);
//       newAnswers1.setAttribute("class", "class-b");
//       newAnswersButton1.setAttribute("class", "class-b");

//       newAnswersButton1.setAttribute("id", questionList[number].answers[1]);

//       container.append(newAnswers2);
//       container.append(newAnswersButton2);
//       newAnswers2.setAttribute("class", "class-c");
//       newAnswersButton2.setAttribute("class", "class-c");

//       newAnswersButton2.setAttribute("id", questionList[number].answers[2]);

//       action = "stop";
//       // action = "stop";
//       // return (action = "stop");

//       // just make arrays for everything like the questions
//       // }

//       //appends questionArray
//       // container.append(questionArray);

//       //idea -
//       //create empty array, push into array, create new element???

//       // maybe reference another function?
//       // that gets called in a for loop

//       //while action = null
//       //while action !== stop
//     }
//   };

//   //question generator

//   initialButton.addEventListener("click", () => {
//     questionGenerator();
//     // action = null;
//   });

//   for (let i = 0; i < questionArray.length; i++) {
//     action = null;

//     questionGenerator();

//     // let currentEnemy = enemyArray[i];
//     // promptFunction(currentEnemy);
//   }
// }

// ///////////////////////////////////////////////
