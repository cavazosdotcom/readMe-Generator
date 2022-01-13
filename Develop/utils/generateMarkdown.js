// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  
  - ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  
  \`\`\`bash
  ${data.dependencies}
  \`\`\`
  
  ## Usage
  
  \`\`\`md
   ${data.using}
  \`\`\`
  
  ## License

  ## Contributing
  
  \`\`\`md
   ${data.contribute}
  \`\`\`
  
  ## Tests
  
  \`\`\`bash
   ${data.tests}
   \`\`\`
   
  ## Questions
  If you have any questions feel free to contact me at either [Github](${data.github}), or [email](${data.email})  

`;
    // return `${data.title}\n${data.github}\n${data.email}\n${data.project}\n\n`
}

module.exports = generateMarkdown;
