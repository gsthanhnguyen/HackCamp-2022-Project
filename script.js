
// data structure for storing questions: array and storing each question: dictionary
// const questions = [
//   {
//     question:
//       "question ...",
//     a: "...",
//     b: "...",
//     c: "...",
//     d: "...",
//   },
//   {
//     question:
//       "question ...",
//     a: "...",
//     b: "...",
//     c: "...",
//     d: "...",
//   },
//   {
//     question:
//       "question ...",
//     a: "...",
//     b: "...",
//     c: "...",
//     d: "...",
//   } 
// ];

// assign variables to pages
const startPage = document.querySelector('#start-page')
const personalPage = document.querySelector('#personal-info-page')
const concernsPage = document.querySelector('#concerns-page')
const resultsPage = document.querySelector('#results-page')

// get values from questions
const question = document.getElementById("");


// hide all pages
function hidePages() {
  startPage.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

function submit() {
  alert("START")
}

// load questions
let questionCount;

loadQuestions();

