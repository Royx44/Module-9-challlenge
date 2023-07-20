// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const inquirer = require('inquirer');
const fs = require('fs');

// Rest of the code...


// Rest of the code...

// Function to generate the README file content
function generateReadme(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please feel free to contact me:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
  `;
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:'
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter the license for your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contributing guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Prompt the user with the questions
inquirer.prompt(questions)
  .then(answers => {
    const readmeContent = generateReadme(answers);

    // Write the README file
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README.md file has been generated successfully!');
    });
  })
  .catch(err => {
    console.error(err);
  });
