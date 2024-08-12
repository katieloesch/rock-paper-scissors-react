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

<img src="./src/assets/images/screenshots/computer_wins_2.png" alt="project screenshot" width="300"><img src="./src/assets/images/screenshots/player_wins_2.png" alt="project screenshot" width="300"><img src="./src/assets/images/screenshots/draw_1.png" alt="project screenshot" width="300">

A one-player version of the classic hand game Rock-Paper-Scissors. The Vanilla JavaScript version of this game was one of the first programs I wrote when I learned how to code. In order to familiarize myself with JavaScript frameworks and libraries I thought it would be a fun idea to add a graphical user interface to the Vanilla JavaScript version.

The game is traditionally played between two players. The goal is to select a gesture that defeats the opponent's gesture according to the game rules. Each player simultaneously forms one of three shapes with an outstretched hand. The possible shapes are:

1. **Rock** &nbsp; :fist: &nbsp;&#8594; a fist
2. **Paper** &nbsp; :hand: &nbsp;&#8594; open hand
3. **Scissors** &nbsp; :v: &nbsp;&#8594; a fist with the index and middle fingers extended, forming a V-shape

The winner is determined by the following rules:

- **Rock crushes Scissors** i.e. Rock beats Scissors
- **Scissors cuts Paper** i.e. Scissors beat Paper
- **Paper covers Rock** i.e. Paper beats Rock
- If both players choose the same shape, it's a tie and the game is usually repeated.

<br>

<img src="./src/assets/images/rock_paper_scissors_rules.png" alt="game rules" width="375">

<sub>image source: [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#/media/File:Rock-paper-scissors.svg)</sub>

<!-- <img src="./src/assets/images/rock_paper_scissors_literal.png" alt="literal rock, paper and scissors" width="300">

<sub>image source: [RemptonGames](https://remptongames.com/2018/02/17/cut-crush-and-cover-the-strategies-of-rock-paper-scissors/)</sub>

<img src="./src/assets/images/the_rock_vs_paper.jpg" alt="Dwayne 'the Rock' Johnson vs scissors vs paper meme" width="250">

<sub>image source: [Know Your Meme](https://knowyourmeme.com/photos/1363025-dwayne-the-rock-johnson)</sub> -->

The game is quick and straightforward, making it popular for settling small disputes or as a decision-making tool where an impartial result is needed. <br> This version of the game is played between a human player and a \'computer\' that randomly picks one of the three possible hands. The objective and rules are essentially the same as playing against another human. The player aims to select a gesture that defeats the computer's gesture according to the game rules.

There is however one aspect that is different when playing against a computer: in this case, the computer's choice is completely random, meaning it has no memory of previous games or patterns. This means that each of the three choices (Rock, Paper or Scissors) has an equal probability (1/3) of being selected.

### How to Play

- The human player selects of of the 3 buttons representing the 3 available hands (Rock, Paper, or Scissors).
- After making their choice they can hit the play button and a countdown will start.
- At the end of the countdown, the computer's randomly selected hand is revealed and the winner is determined according to the rules above unless there's a tie.

<img src="./src/assets/images/screenshots/sequence/sequence_0.png" alt="" width="400"><img src="./src/assets/images/screenshots/sequence/sequence_1.png" alt="" width="400">

<img src="./src/assets/images/screenshots/sequence/sequence_2.png" alt="" width="400"><img src="./src/assets/images/screenshots/sequence/sequence_3.png" alt="" width="400">

<img src="./src/assets/images/screenshots/sequence/sequence_5.png" alt="" width="400"><img src="./src/assets/images/screenshots/sequence/sequence_6.png" alt="" width="400">

## <a name="deployment-link"></a> 2. Deployment Link

## <a name="installation"></a> 3. Installation

#### Package Manager: npm (v9.5.0)

- <sub>homepage: https://www.npmjs.com/</sub>
- <sub>GitHub repo: https://github.com/npm</sub>

#### Getting Started

- In order to clone the repository, you need to have [Git](https://git-scm.com/) installed on your local machine.
- To clone the repository to your local machine, run the following command in your terminal:

```zsh
git clone https://github.com/username/repository-name.git
```

- you'll be ready to install the dependencies once you navigate into the project directory:

```zsh
cd rock-paper-scissors-react
```

#### Running the Application Locally in a local development environment:

**1. Install Dependencies**

Before running the application, ensure that all necessary dependencies are installed by executing the following terminal command in the root of the project directory:

```zsh
npm install
```

**2. Start the Development Server**

Once the dependencies are installed, start the development server with the following command:

```zsh
npm start
```

**3. Access the Application**:

- The development server will start on `http://localhost:3000`.
- By default, your default web browser should automatically open and navigate to this address.
- If the browser window does not open automatically, you can manually access the application by navigating to `http://localhost:3000` in any web browser.

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

- **ReactJS** (v18.2.0):

  - <sub>primary framework used to build the application</sub>
  - <sub>created using the create-react-app tool</sub>
  - <sub>React docs: https://reactjs.org/</sub>
  - <sub>Create React App docs: https://create-react-app.dev/</sub>

  ```zsh
  npx create-react-app .
  ```

- **SCSS**:
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>docs: https://sass-lang.com/guide</sub>

### Key Dependencies

- **Sass** (v1.77.8):

  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>used for styling the application</sub>
  - <sub>npm: https://www.npmjs.com/package/sass</sub>
  - <sub>GitHub repo: https://github.com/sass/dart-sass</sub>

- **React Icons** (v5.2.1):
  - <sub>free and open-source project providing icons for use in React projects</sub>
  - <sub>npm: https://www.npmjs.com/package/react-icons</sub>
  - <sub>GitHub repo: https://github.com/react-icons/react-icons</sub>
  - <sub>homepage: https://react-icons.github.io/react-icons/</sub>

### UI and Design

- **Fonts**:

  - main font: \'Handlee\', designed by Joe Prince.
    - <sub>Cufon Fonts: https://www.cufonfonts.com/font/handlee</sub>
    - <sub>Google Fonts: https://fonts.google.com/specimen/Handlee</sub>
  - timer font: \'Cute Font\', designed by TypoDesign Lab. Inc.
    - <sub>Google Fonts: https://fonts.google.com/specimen/Cute+Font</sub>

- **Icons**:
  - Iconify: free and open-source framework providing access to a vast number of icons designed to be used across different platforms and environments, including React
    - <sub>homepage: https://icon-sets.iconify.design/</sub>
    - <sub>GitHub Repo: https://github.com/iconify/iconify/tree/main</sub>
    - <sub>license: https://github.com/iconify/iconify/blob/main/license.txt</sub>
  - Font Awesome: icon library providing a large set of icons that are easy to use, scalable and customizable, including a free version that is open source
    - <sub>homepage: https://fontawesome.com/</sub>
    - <sub>GitHub repo: https://github.com/FortAwesome/Font-Awesome</sub>
    - <sub>license: https://fontawesome.com/license/free</sub>

### Development Tools

- **Git / GitHub**: used for version control and collaboration

  - <sub>Git: https://git-scm.com/</sub>
  - <sub>GitHub: https://github.com/</sub>

- **Visual Studio Code (VSCode)**: code editor used for development

  - <sub>homepage: https://code.visualstudio.com/</sub>
  - <sub>GitHub repo: https://github.com/microsoft/vscode</sub>

- **Google Chrome & Chrome DevTools**: used for testing, debugging, and developing in the browser.

  - <sub>Google Chrome: https://www.google.com/chrome/</sub>
  - <sub>Chrome DevTools: https://developer.chrome.com/docs/devtools</sub>

- **Excalidraw**: tool used to create wireframes for the application

  - <sub>homepage: https://excalidraw.com/</sub>
  - <sub>GitHub repo: https://github.com/excalidraw/excalidraw</sub>

- **ChatGPT4o**: generative AI tool used for debugging and development support

  - <sub>homepage: https://chat.openai.com/</sub>
  - <sub>GitHub repo: https://github.com/openai</sub>

- **Hostinger**: web hosting provider used to deploy the application
  - <sub>UK homepage: https://www.hostinger.co.uk</sub>

### Resources & Tutorials

- **Blogs**:
  - [Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/) by [Eduardo Bouças](https://css-tricks.com/author/eduardoboucas/)
- **YouTube**:
  - [Build React Rock Paper Scissors with React](https://www.youtube.com/watch?v=llrk6Jcq4m4) by [Telmo Sampaio](https://www.youtube.com/@Telmosampaio)

---

<!--

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

<img src="./src/assets/images/wireframe.jpg" alt="wireframe" width="600">

### Day 2 - 02/02/2024

- start readme file
- finish game logic
- add score board
- mirror icon images so they 'face each other'

### Day 24/07/2024

- media queries

## 7. <a name="challenges"></a> Challenges

- mirror icon images so they 'face each other'

## 8. <a name="wins"></a> Wins

- game logic
- timeframe

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

- although I enjoyed building this project with React.js I don't think this version of the project is a huge improvement on the vanilla Javascript version as the game features are very similar.

## <a name="future-improvements"></a> 10. Future Improvements

- option for multiple players
- sound effects + animations -->
