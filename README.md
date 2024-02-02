### day1: 01/02/2024

create-react-app
github repo

- react icons

# Rock Paper Scissors in React

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

## <a name="deployment-link"></a> 2. Deployment link

https://rockpaperscissors.katieloesch.co.uk/

## <a name="installation"></a> 3. Installation

- package manager used: npm - v9.5.0
  - https://www.npmjs.com/package/npm
- to install dependencies, run:
  ```zsh
   npm install
  ```
- to start application, run:
  ```zsh
   npm start
  ```

## <a name="technologies"></a> 4. Technologies Used

- This application is based in ReactJS (v18.2.0), JavaScript, JSX and SCSS.

  - it was created using the 'create-react-app' command
  - https://create-react-app.dev/

    ```zsh
    npx create-react-app .
    ```

### UI

- fonts:

- icons: react icons
  - https://react-icons.github.io/react-icons/
  - https://www.npmjs.com/package/react-icons

### Additional tools used:

- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX and JavaScript
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/
- Hostinger: provider used to host the game online
  - https://www.hostinger.co.uk
- Excalidraw
  - used for building the wireframe
  - https://excalidraw.com/

### Resources and tutorials:

- youtube: [Build React Rock Paper Scissors with React](https://www.youtube.com/watch?v=llrk6Jcq4m4) by [Telmo Sampaio](https://www.youtube.com/@Telmosampaio)

## <a name="deliverables"></a> 5. Deliverables

### MVP

- a working game hosted online
- a git repository hosted on Github, including:

  - a link to the hosted game
  - frequent commits dating back to the very beginning of the project
  - code that is well-formatted and well-commented
  - semantic markup for HTML and CSS while adhering to best practices
  - adherence to KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles

- a rock, paper, scissors game with the following features:

  - visually display the computer hand and player hand
  - player gets to pick from 3 differrent options: rock, paper or scissors
  - generate random hand for computer
  - compare hands and determine winner
  - notify player if he's won, lost or if there's a draw

- the website should also:
  - include contact information -> email, GitHub, LinkedIn and other relevant links
  - have a mobile-responsive design

### Potential Extra Features

- score board to keeping track of wins and losses
- use localStorage to persist data locally
- include audio + mute mode
- inventive styling (e.g. hover effects, animations)
- multiple players

### User Stories

- As a user, I should be able to start a new game.
- As a user, I should be able to play the game again without refreshing the page.

## <a name="planning"></a>6. Planning / Build Process

This was a solo project I built over the course of 3 days.

### Day 1 - 01/02/2024

I started this project by setting up a react app using the 'create-react-app' command.

```zsh
npx create-react-app .
```

- After removing unnecessary files from the newly created project, I made a 'components' folder to store all the different react components needed for the game.

- I created repository on GitHub and connected it to the local project.
- started building JSX compnents + styling
- started game logic

- I also created a wireframe on Excalidraw to get an idea of the basic layout of the website.

<img src="./src/assets/images/wireframe.jpg" alt="wireframe" width="450">

### Day 2 - 02/02/2024

- start readme file

## 7. <a name="challenges"></a> Challenges

## 8. <a name="wins"></a> Wins

- game logic

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

- although I enjoyed building this project with React.js I don't think this version of the project is a huge improvement on the vanilla Javascript version as the game features are very similar.

## <a name="future-improvements"></a> 10. Future Improvements

- option for multiple players
- sound effects + animations
