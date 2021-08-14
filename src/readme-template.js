function generateReadMe  (userResponses, userInfo)  {
      var openSourceUrl = produceOpenSourceUrl(userResponses.license)
      var shields = produceShields(userResponses.license)
      var outcome = ( `

            <h1 align="center">${userResponses.title}</h1>

            # Description \n
            ${userResponses.description}

            ![License Badge](${shields})
            <br />

            # Table of Contents \n
            - [Installation](#installation)
            - [Usage](#usage)
            - [License](#license)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [Questions](#questions)

            # Installation \n
            ${userResponses.installation}

            # Usage  \n
            ${userResponses.usage}

            # License
            > Project is licensed under the **${userResponses.license}** - see the [License URL](${openSourceUrl}) page for specific info for this license.

            # Contributing \n
            ${userResponses.contributing}

            # Tests \n
            ${userResponses.tests}

            # Questions \n
            ${userInfo.name}

            [My Github account](${userInfo.html_url})
            Have any questions about this project? </br>
            <a href="${userResponses.email}">Email Me</a>  
                
   `);
   return outcome;
};
// object literals as opposed to switch or if statements
function produceOpenSourceUrl(license) {
    var inputMap = {
      'GNU AGPLv3': 'agpl-3.0',
      'GNU GPLv3': 'gpl-3.0',
      'GNU LGPLv3':  'lgpl-3.0',  
      'Mozilla Public License 2.0':  'mpl-2.0',
      'Apache License 2.0':  'apache-2.0',
      'MIT License':  'mit',
      'Boost Software License 1.0':  'bsl-1.0',
      'The Unlicense':  'unlicense'
    };
    return `https://choosealicense.com/licenses/${inputMap[license]}`;
};
// object literals as opposed to switch or if statements
function  produceShields(license) {
    var shieldMap = {
      'GNU AGPLv3': 'GNU+AGPLv3',
      'GNU GPLv3' :'GNU+GPLv3',
      'GNU LGPLv3' : 'GNU+LGPLv3',
      'Mozilla Public License 2.0': 'Mozilla+Public+License+2.0',
      'Apache License 2.0':  'Apache+License+2.0',
      'MIT License': 'MIT+License',
      'Boost Software License 1.0': 'Boost+Software+License+1.0',
      'The Unlicense': 'The+Unlicense'
    };
    return `https://img.shields.io/static/v1?label=license&message=${shieldMap[license]}&color=brightgreen&style=for-the-badge`;
}

module.exports = generateReadMe;
  