// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide any tests instructions.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'usage',
    },
    
];

// TODO: Create a function to write README file
inquirer.prompt(questions)
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

generateMarkdown()
// Function call to initialize app
init();
