// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return`![license](https://img.shields.io/badge/license-${license}-red)`;
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (license !== none)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return`## License
    This project is under the ${license} license.`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(resp) {
  // console.log(resp);
return`# ${resp.title}

${renderLicenseBadge(resp.license)}

## Description
${resp.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Installation
${resp.install}

## Usage
${resp.usage}

${renderLicenseSection(resp.license)}

## Contribution
${resp.contribution}

## Test
${resp.test}
  
## Questions
My GitHub is: [${resp.questions}](https://github.com/${resp.questions})
You can reach me at Email: ${resp.email}`
}

module.exports = generateMarkdown;
