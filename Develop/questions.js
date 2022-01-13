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
    name: 'title',
},
{
    type: 'input',
    message: 'Please write a short description of your project.',
    name: 'description',
},
{
    type: 'list',
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


module.exports = questions;