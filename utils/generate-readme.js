const fs = require('fs');
// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('../dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          // ok: true,
          message: 'Your README.md file has been successfully created!!'
         
        });
      });
    });
  };
  
 
  module.exports = { writeFile };