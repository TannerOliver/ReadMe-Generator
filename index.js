// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your file?',
        name: 'fileName',
    },
    {
        type: 'input',
        message: 'What do you want the main header to be?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Type a description for your README file.',
        name:"desc",
    },
    {
        type: 'input',
        message: 'Explain how a someone were to go about installing your project.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Explain and show how to use the application. Please provide screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select a license you are trying to add to this application.',
        choices: ['Apache2.0', 'GNUGeneralPublicv3.0', 'MIT', 'BSD2Clause', 'BSD3Clause', 'BoostSoftware1.0', 'CreativeCommonsZerov1.0Universal', 'EclipsePublic2.0', 'GNUAfferoGeneralPublicv3.0', 'GNUGeneralPublicv2.0', 'GNULesserGeneralPublicv2.1', 'MozillaPublic2.0', 'TheUnlicense', 'none'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'List all people/programs that need credit for being apart of this application.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How could another developer test your application?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, resp) {
    // console.log());
    fs.writeFile('README.md', resp, (err) =>
    err ? console.error(err) : console.log('File has been written succesfully!'))
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(resp => {
        const generatedMarkdown = generateMarkdown(resp);
        console.log(generatedMarkdown);
        fs.writeFile(`${resp.fileName}.md`, generatedMarkdown, (err) =>
    err ? console.error(err) : console.log('File has been written succesfully!'))
    });
}
// Function call to initialize app
init();