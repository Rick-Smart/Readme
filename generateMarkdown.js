// function to generate markdown for README
function generateMarkdown(answers) {
  const {
    title,
    description,
    installation,
    contributors,
    test,
    license,
    licenseUrl,
    githubUsername,
    email,
  } = answers;

  return `# Title: **${title}**

  &nbsp;
  &nbsp;
  ## Description:

  **${description}**

  &nbsp;
  &nbsp;
  ## Installation: 

  *${installation}*


  &nbsp;
  &nbsp;
  ## Contributors: 
  
  **${contributors}**


  &nbsp;
  &nbsp;
  ## Test: 
  
  **${test}**


  &nbsp;
  &nbsp;
  ## License: 
  
  ${license}


  &nbsp;
  &nbsp;
  ## License URL: 
  ${licenseUrl}


  &nbsp;
  &nbsp;
  ## GitHub UserName:
  
  @${githubUsername}


  &nbsp;
  &nbsp;
  ## Email: 
  
  **${email}**

  &nbsp;
  &nbsp;
  # Screen Shots
  &nbsp;
  &nbsp;
  ![Screenshot (21)](https://user-images.githubusercontent.com/65750703/100529588-ca625300-319d-11eb-9fce-4f9a84c65b80.png)
  &nbsp;
  &nbsp;
  ![Screenshot (22)](https://user-images.githubusercontent.com/65750703/100529586-c6cecc00-319d-11eb-813e-bed20cd09226.png)
  &nbsp;
  &nbsp;
  # Video Clip
  &nbsp;
  &nbsp;
  ![](readme.gif)
  &nbsp;
  &nbsp;
  ![](readmepreview.gif)
`;
}

module.exports = generateMarkdown;
