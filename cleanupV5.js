///////////////////////////////
////Minimum Viable Project Goals
///////////////////////////////

// Need to add questions and answers.
// -input box or multiple choice selector for answers to questions - with feedback and score changes depending on whether the answer was right or wrong
// -after a certain amount of questions are wrong the game would be over for the player
// a good UI, for players to have good experiences
// -ability to restart midgame
// -new question adder (or option to pass on a current question being asked)

const questionList = {
  number1: {
    question: "Who is considered the greatest soccer player?",
    answers: ["Beckham", "Pele", "Maradona"],
    correctAnswer: "Pele",
  },
  number2: {
    question:
      "How many players in total will be on the field in a typical soccer match?",
    answers: ["11", "22", "33"],
    correctAnswer: "22",
  },
  number3: {
    question: "How long does a soccer game last? (in min)",
    answers: ["45", "90", "120"],
    correctAnswer: "90",
  },
  number4: {
    question:
      "Which player scored the “Hand of God” goal in a match of the 1986 World Cup?",
    answers: ["Ronaldo", "Messi", "Maradona"],
    correctAnswer: "Maradona",
  },
  number5: {
    question: "Who can add time in a soccer game?",
    answers: ["Referee", "Coach", "Captain"],
    correctAnswer: "Referee",
  },
  number6: {
    question:
      "What is the limit of stoppage time that can be added at the end of a game",
    answers: ["10min", "5min", "None"],
    correctAnswer: "None",
  },
  number7: {
    question:
      "The minimum number of players that a soccer team needs to be eligible to play is …",
    answers: ["7", "9", "11"],
    correctAnswer: "7",
  },
  number8: {
    question: "Which soccer player is nicknamed Zizou?",
    answers: ["Gerrard", "Zidane", "Messi"],
    correctAnswer: "Zidane",
  },
  number9: {
    question: "Which country won the most FIFA World Cup titles?",
    answers: ["Germany", "England", "Brazil"],
    correctAnswer: "Brazil",
  },
  // number: {
  //   question: "How",
  //   answers: ["45", "90", "120"],
  //   correctAnswer: "90",
  // },
};

//input variables

const container = document.querySelector(".top-container");
const newQuestion = document.createElement("h2");

// //iteration version
// const myNewQuestion = document.createElement("h2");

let score = 0;

//not very DRY - for loop???? - not for this section because its creating HTML elements to append to
const newAnswers0 = document.createElement("h3");
const newAnswersButton0 = document.createElement("button");
const newAnswers1 = document.createElement("h3");
const newAnswersButton1 = document.createElement("button");
const newAnswers2 = document.createElement("h3");
const newAnswersButton2 = document.createElement("button");

//scores
const scoreContainer = document.querySelector(".score-container");
const scoreElement = document.createElement("h4");
scoreElement.innerText = score;
scoreContainer.append(scoreElement);

//button text
newAnswersButton0.innerHTML = "click this";
newAnswersButton1.innerHTML = "click this";
newAnswersButton2.innerHTML = "click this";

//test button
const initialButton = document.querySelector(".test-button");

//for iterating through the variable list
questionArray = [];

//to start and stop questions
let action = null;

///////////////////////////////////////////////

//not very DRY
const answer1Input0 = questionList.number1.answers[0];
const answer1Input1 = questionList.number1.answers[1];
const answer1Input2 = questionList.number1.answers[2];

//more input variables

//question - start here
const inputQuestion1 = questionList.number1.question;
// newQuestion.innerHTML = inputQuestion1;

//correct answer
const correctInput = questionList.number1.correctAnswer;

//not very DRY - leave a-c????
newAnswers0.innerHTML = "a. " + answer1Input0;
newAnswers1.innerHTML = "b. " + answer1Input1;
newAnswers2.innerHTML = "c. " + answer1Input2;

//pretty sure this code does nothing
let answerA = document.querySelector(".class-a");
let answerB = document.querySelector(".class-b");
let answerC = document.querySelector(".class-c");

///////////////////////////////////////////////

//iterating through the variable list
for (let number in questionList) {
  //question

  inputForQuestion = questionList[number].question;
  questionArray.push(inputForQuestion);

  //// console.log(inputForQuestion);
  //// console.log("~~~~~~~~~~~~~");

  // console.log(questionArray);
  // console.log("~~~~~~~~~~~~~");

  //iteration version
  const myNewQuestion = document.createElement("h2");

  // good idea but does nothing
  // myNewQuestion.innerHTML = questionList[number].question;
  // console.log(myNewQuestion);
  // console.log("~~~~~done~~~~~~~~");

  const questionGenerator = (questionNum) => {
    //appends everything
    // container.append(myNewQuestion);

    //iterates 8 times for each number - need to iterate once - can do thing where its like if number == number1

    while (action !== "stop") {
      // for (let i = 0; i < questionArray.length; i++) {

      //move to for loop?
      // newQuestion.innerHTML = questionArray[i];

      // console.log(i);
      console.log(number);
      console.log("~~~~~~~~~~~~~");
      console.log(this.questionNum);
      console.log(this.number);
      console.log(questionNum);
      console.log("~~~~~done~~~~~~~~");

      container.append(newQuestion);

      // container.append(questionArray[i]);

      //all good
      container.append(newAnswers0);
      container.append(newAnswersButton0);

      newAnswers0.setAttribute("class", "class-a");
      newAnswersButton0.setAttribute("class", "class-a");

      newAnswersButton0.setAttribute("id", questionList[number].answers[0]);

      container.append(newAnswers1);
      container.append(newAnswersButton1);
      newAnswers1.setAttribute("class", "class-b");
      newAnswersButton1.setAttribute("class", "class-b");

      newAnswersButton1.setAttribute("id", questionList[number].answers[1]);

      container.append(newAnswers2);
      container.append(newAnswersButton2);
      newAnswers2.setAttribute("class", "class-c");
      newAnswersButton2.setAttribute("class", "class-c");

      newAnswersButton2.setAttribute("id", questionList[number].answers[2]);

      action = "stop";
      // action = "stop";
      // return (action = "stop");

      // just make arrays for everything like the questions
      // }

      //appends questionArray
      // container.append(questionArray);

      //idea -
      //create empty array, push into array, create new element???

      // maybe reference another function?
      // that gets called in a for loop

      //while action = null
      //while action !== stop
    }
  };

  //question generator

  initialButton.addEventListener("click", () => {
    questionGenerator();
    // action = null;
  });

  for (let i = 0; i < questionArray.length; i++) {
    action = null;

    questionGenerator();

    // let currentEnemy = enemyArray[i];
    // promptFunction(currentEnemy);
  }
}

///////////////////////////////////////////////

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
