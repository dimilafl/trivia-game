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

const questionList = {
  number1: {
    question: "Who is the greatest soccer player?",
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

const questionGenerator = () => {
  //   console.log("hi");
  container.append(newQuestion);
};

const inputQuestion1 = questionList.number1.question;

newQuestion.innerHTML = inputQuestion1;

// container.append(newQuestion);
// questionGenerator();

const testButton = document.querySelector(".test-button");

document.addEventListener("click", () => {
  questionGenerator();
});

const answerInput = questionList.number1.answers;
const correctInput = questionList.number1.correctAnswer;

// const sampleQuestion = inputQuestion1;
// const testInput = questionList.number1.correctAnswer;

console.log(inputQuestion1);
console.log(answerInput);
console.log(answerInput[0]);
console.log(correctInput);
console.log(correctInput);

const answers = {};
