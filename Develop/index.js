// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
{
    type: 'input',
    message: "What is your project's name?",
    name: 'project',
},
{
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'description',
},
{
    type: 'checkbox',
    message: 'What kind of liscense should your project have?',
    name: 'languages',
    choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None'],
},
{
    type: 'input',
    message: 'What command should you run to install dependencies?',
    name: 'dependencies',
    default: 'npm i',
},
{
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'tests',
    default: 'nmp test',
},
{
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'using',
},
{
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contribute',
},
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer
.prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    
    fs.appendFile(
      'log.txt', 
      `${answers.github}\n${answers.email}\n${answers.project}\n\n`, 
      (err) =>

      err ? console.error(err) : console.log('Success!')

);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
