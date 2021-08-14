const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('../src/readme-template');
const api = require('../utils/axios');
const util = require('util');

const questions = [
      {
        type: 'input',
        message: "What is your projects title?",
        name: 'title',
      },
      {
        type: 'input',
        message: "What is your GitHub username? (exclude the @ sign)",
        name: 'username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please write installation instructions for your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please write a proper usage of your project:'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please add any information on contribution guidelines:'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please include a proper way to test your project:'
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
      } 
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
          return console.log(err);
      }
      console.log('Your new README.md file has been created!')
  });
};
// The util module supports the needs of Node.js internal APIs. Many of the utilities are useful for application and module developers as well. To access it:
const writeFileAsync = util.promisify(writeToFile);

//  function to initialize using async 
async function init() {
    try {
            const userResponses = await inquirer.prompt(questions);
            // axios api
            const userInfo = await api.getUser(userResponses);
            console.log("Your GitHub user info: ", userInfo);
            // Pass inquirer data and api data to syntax
            console.log("Generating your README.md file...")
            const syntax = generateReadMe(userResponses, userInfo);
            console.log(syntax);
            // Write the file
            await writeFileAsync('../dist/YourNewREADME.md', syntax);
    } catch (error) {
        console.log(error);
    }
};

init();