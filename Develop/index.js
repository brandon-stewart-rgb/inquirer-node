const util = require ('util')
const fs = require('fs')
const inquirer = require('inquirer');
const { userInfo } = require('os');
const axios = require('axios').default;

// other modules
// const produceSimpleSyntax = require('./modules/produceSimpleSyntax.js');
// const api = require('./modules/gitUserAPI.js');

//  array of questions for user input
const questions = [
        {
          type: 'input',
          message: "What is your GitHub username? (No @ needed)",
          name: 'username',
          validate: function (answer) {
              if (answer.length < 1) {
                  return console.log("A valid GitHub username is required.");
              }
              return true;
          }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please write installation instructions for your project'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please write a proper usage of your project'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please add any information on how developers can contribute to your project'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please include a proper way to test your project'
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }

];

// write to Readme
function produceFile(filename, data) {

  fs.writeFile(filename, data, err => {
    if (err) {
      return console.log(err);
    }

  });
}

const writeFileAsync = util.promisify(produceFile);




function produceSimpleSyntax(userInput, userInfo) {
  var outcome = (`
  #${userInput.title} \n
  #Description \n
  ${userInput.description}

  #Table of Contents \n
  \n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [License](#license)
  \n- [Contributing](#contributing)
  \n- [Tests](#tests)
  \n- [Questions](#questions)


  #Installation \n
  ${userInput.installation}

  #Usage  \n
  ${userInput.usage}

  #License \n
  ${userInput.license}

  #Contributing \n
  ${userInput.contributing}

  #Tests \n
  ${userInput.tests}
  #Questions \n
  ${userInput.username}
  Have any questions about this project? </br>
  <a href="${userInput.email}">Email Me</a>  

  
  `)
  return outcome; 
}



// function to initialize app
async function init() {
  try{
      const userInput = await inquirer.prompt(questions);
      console.log(userInput);

     

      const userInfo = await api.getUser(userInput);
      console.log("GitHub user info: ", userInfo);
      console.log("doing things...");


      const SimpleSyntax = produceSimpleSyntax(userInput);
      console.log(SimpleSyntax)

      await writeFileAsync('README.md', SimpleSyntax);

  } catch (err) {
    console.log(err)
  }

}


// Calls Github to get the input user info using axios
const api = {

      async getUser(userInfo) {
          console.log(userInfo)
          try { let response = await axios
              
              .get(`https://api.github.com/users/${userInfo.username}`);
              return response.data;
      
          } catch (err) {
              console.log(err);
          }
      }
};
  
  // module.exports = api;

// // Function call to initialize app
init();







// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions



// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section
// of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README