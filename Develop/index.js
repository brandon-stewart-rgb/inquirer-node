// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Solved',
        message: 'What did you project solve?'
    },
    {
        type: 'list',
        name: 'Contributors',
        choices: ['first', 'second'],
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });