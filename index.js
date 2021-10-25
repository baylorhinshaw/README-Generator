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
        message: 'Provide github username.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Provide your email address.',
        name: 'email',
    },
    
];

// TODO: Create a function to write README file
inquirer.prompt(questions)
.then(({title, description, installation, usage, contribution, tests, username, email}) =>
fs.writeFileSync('README.md', 
`# ${title}

### Description: \n${description}
 
 
### Installation Instructions: \n${installation}
 
 
### Usage: \n${usage}
 
 
### Contributions: \n${contribution}
 
 
### Tests: \n${tests}
 
 
## Github username: ${username}
 
 
## Email: ${email}`, err => err ? console.error(err) : console.log('Success!'))
)