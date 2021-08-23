///////////////////////////////
////Minimum Viable Project Goals
///////////////////////////////

// Need to add questions and answers.
// -input box or multiple choice selector for answers to questions - with feedback and score changes depending on whether the answer was right or wrong
// -after a certain amount of questions are wrong the game would be over for the player
// a good UI, for players to have good experiences
// -ability to restart midgame
// -new question adder (or option to pass on a current question being asked)

//source: questions are from this site - https://www.welovequizzes.com/soccer-quiz-questions-and-answers/

//make sure to ask about this^ even though its prob fine

//organize this code to save you time later on

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
};

const container = document.querySelector(".top-container");

const newQuestion = document.createElement("h2");

//not very DRY - for loop????
const newAnswers0 = document.createElement("h3");
const newAnswersButton0 = document.createElement("button");
const newAnswers1 = document.createElement("h3");
const newAnswersButton1 = document.createElement("button");
const newAnswers2 = document.createElement("h3");
const newAnswersButton2 = document.createElement("button");

newAnswersButton0.innerHTML = "click this";
newAnswersButton1.innerHTML = "click this";
newAnswersButton2.innerHTML = "click this";

//not very DRY
const answer1Input0 = questionList.number1.answers[0];
const answer1Input1 = questionList.number1.answers[1];
const answer1Input2 = questionList.number1.answers[2];

const questionGenerator = () => {
  container.append(newQuestion);

  container.append(newAnswers0);
  container.append(newAnswersButton0);
  newAnswers0.setAttribute("class", "class-a");
  newAnswersButton0.setAttribute("class", "class-a");

  newAnswersButton0.setAttribute("id", questionList.number1.answers[0]);

  container.append(newAnswers1);
  container.append(newAnswersButton1);
  newAnswers1.setAttribute("class", "class-b");
  newAnswersButton1.setAttribute("class", "class-b");

  newAnswersButton1.setAttribute("id", questionList.number1.answers[1]);

  container.append(newAnswers2);
  container.append(newAnswersButton2);
  newAnswers2.setAttribute("class", "class-c");
  newAnswersButton2.setAttribute("class", "class-c");

  newAnswersButton2.setAttribute("id", questionList.number1.answers[2]);
};

//input variables

const inputQuestion1 = questionList.number1.question;

newQuestion.innerHTML = inputQuestion1;

const correctInput = questionList.number1.correctAnswer;

//not very DRY - leave a-c????
newAnswers0.innerHTML = "a. " + answer1Input0;
newAnswers1.innerHTML = "b. " + answer1Input1;
newAnswers2.innerHTML = "c. " + answer1Input2;

const testButton = document.querySelector(".test-button");
let answerA = document.querySelector(".class-a");
let answerB = document.querySelector(".class-b");
let answerC = document.querySelector(".class-c");

testButton.addEventListener("click", () => {
  questionGenerator();
});

////////////////////////////////////////////////

newAnswersButton0.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    console.log("correct");

    event.currentTarget.style.color = "green";
  } else {
    console.log("wrong");

    event.currentTarget.style.color = "red";
  }
});
newAnswersButton1.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    console.log("correct");

    event.currentTarget.style.color = "green";
  } else {
    console.log("wrong");

    event.currentTarget.style.color = "red";
  }
});
newAnswersButton2.addEventListener("click", (event) => {
  if (event.currentTarget.id === correctInput) {
    console.log("correct");

    event.currentTarget.style.color = "green";
  } else {
    console.log("wrong");

    event.currentTarget.style.color = "red";
  }
});

const answers = {};
