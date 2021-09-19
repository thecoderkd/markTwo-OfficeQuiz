var readlineSync = require('readline-sync')
const chalk = require('chalk');

console.log("==============================");
console.log(chalk.black.bgYellow.bold("Welcome! This is a quiz about the TV Show The Office "));
console.log("==============================")

var username = readlineSync.question("What is your name? ");
var score = 0

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Correct!");
    score = score + 1;

  }
  else {
    console.log("Incorrect!")
    score = score - 1;
  }
  console.log("Current score: " + score);
  console.log("-----------------------")


}
//array of objects
var questions = [
  questionOne = {
    question: "What is the first name of the Boss?",
    answer: "Michael",
  }, questionTwo = {
    question: "Who owns the Beet farm? (first name)",
    answer: "Dwight",
  },
  questionThree = {
    question: "How many seasons are there in the show?",
    answer: "9",
  },
  questionFour = {
    question: "What is the name of the award show the Michael organises?",
    answer: "Dundies",
  },
  questionFive = {
    question: "Dunder Mifflin is a company in ____ business?",
    answer: "Paper",
  },
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

if (score < 1) {
  console.log(chalk.red("You lost! You scored " + score + " points. Maybe you dont know this TV that well. :)"));
}
else {
  console.log(chalk.green("Congrats! You scored " + score + " points!"));
}

