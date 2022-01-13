// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = questionsArray;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName, 
        generateMarkdown( data ), 
        (err) =>

        err ? console.error(err) : console.log('Success!')
    )};


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log( answers );
            // generateMarkdown( answers );
            

            writeToFile(`README.md`, answers);
            // fs.writeFile(
            // 'log.txt', 
            // `${answers.github}\n${answers.email}\n${answers.project}\n\n`, 
            // (err) =>

            // err ? console.error(err) : console.log('Success!')



  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});
}

// Function call to initialize app
init();
