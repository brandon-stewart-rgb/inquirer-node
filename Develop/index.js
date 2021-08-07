'use strict';
const fs = require('fs')
const inquirer = require('inquirer');


//  array of questions for user input
const questions = [
{
  type: 'input',
  name: 'project_name',
  message: 'What is the name of your project?',
},
{
  type: 'input',
  name: 'project_description',
  message: 'Please write your project description'
},

];

const answers [];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);

 


   
});

// example: https://github.com/MatWilmot/pizza-order-builder/blob/master/inquirer.js
// https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
//https://www.youtube.com/watch?v=0xjfkl9nODQ


//write to file
// fs.writeFile('README.md', JSON.stringify(answers), err => {
//   if (err) {
//     console.error(err)
//     return
//   } 
// });


// // TODO: Create a function to initialize app
// function init() {
// }

// // Function call to initialize app
// init();




// get answers into readme

// format answers into readme

// add links to repo and screenshot