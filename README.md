# Rock, Paper, Scissors in React

 <img src="./src/assets/images/rock_paper_scissors_literal.png" alt="literal rock, paper and scissors" width="300">
 
 <sub>image source: [RemptonGames](https://remptongames.com/2018/02/17/cut-crush-and-cover-the-strategies-of-rock-paper-scissors/)</sub>

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

<img src="./src/assets/images/screenshots/rps_1.png" alt="project screenshot" width="350">&nbsp;<img src="./src/assets/images/screenshots/player_wins_2.png" alt="project screenshot" width="350">&nbsp;<img src="./src/assets/images/screenshots/draw_1.png" alt="project screenshot" width="350">&nbsp;<img src="./src/assets/images/screenshots/computer_wins_2.png" alt="project screenshot" width="350">

This is a single-player adaptation of the classic hand game Rock-Paper-Scissors. The original version of this game was one of the first programs I developed when I began learning to code using Vanilla JavaScript. To deepen my understanding of JavaScript frameworks and libraries, I decided to enhance the original by incorporating a graphical user interface.

Rock-Paper-Scissors is traditionally a two-player game. The objective is to select a gesture that outperforms your opponent's gesture according to the game's rules. Each player simultaneously chooses one of three hand shapes:

1. **Rock** &nbsp; :fist: &nbsp;&#8594;&nbsp; a clenched fist
2. **Paper** &nbsp; :hand: &nbsp;&#8594;&nbsp; an open hand
3. **Scissors** &nbsp; :v: &nbsp;&#8594;&nbsp; a V-shape formed by extending the index and middle fingers

The outcome is determined by these simple rules:

- **Rock crushes Scissors** i.e. Rock beats Scissors
- **Scissors cuts Paper** i.e. Scissors beat Paper
- **Paper covers Rock** i.e. Paper beats Rock
- If both players choose the same shape, it results in a tie, and the game is typically replayed.

<br>

<img src="./src/assets/images/rock_paper_scissors_rules.png" alt="game rules" width="350">

<sub>image source: [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors#/media/File:Rock-paper-scissors.svg)</sub>

<img src="./src/assets/images/the_rock_vs_paper.jpg" alt="Dwayne 'the Rock' Johnson vs scissors vs paper meme" width="240">

<sub>image source: [Know Your Meme](https://knowyourmeme.com/photos/1363025-dwayne-the-rock-johnson)</sub>

The game is quick and straightforward, making it popular for resolving minor disputes or as a tool for impartial decision-making.

In this version, the game is played between a human player and a 'computer' that randomly selects one of the three possible hand gestures. The objective and rules remain the same as when playing against another person: the player must choose a gesture that defeats the computer's choice according to the game's rules.

However, there is one key difference when playing against the computer: the computer's choice is entirely random. It has no memory of previous games or patterns, and each of the three options—Rock, Paper, or Scissors—has an equal probability of being selected.

### How to Play

1. The human player selects one of the three buttons representing the available hand gestures (Rock, Paper, or Scissors).

<img src="./src/assets/images/screenshots/sequence/sequence_0.png" alt="" width="350">&nbsp;<img src="./src/assets/images/screenshots/sequence/sequence_1.png" alt="" width="350">

<br>

2. After making their choice, they click the play button, initiating a countdown.

<img src="./src/assets/images/screenshots/sequence/sequence_2.png" alt="" width="350">&nbsp;<img src="./src/assets/images/screenshots/sequence/sequence_3.png" alt="" width="350">

<br>

3. At the end of the countdown, the computer's randomly selected hand is revealed, and the winner is determined according to the game's rules, unless there is a tie.

<img src="./src/assets/images/screenshots/sequence/sequence_5.png" alt="" width="350">&nbsp;<img src="./src/assets/images/screenshots/sequence/sequence_6.png" alt="" width="350">

## <a name="deployment-link"></a> 2. Deployment Link

## <a name="installation"></a> 3. Installation

#### Package Manager: npm (v9.5.0)

- <sub>homepage: https://www.npmjs.com/</sub>
- <sub>GitHub repo: https://github.com/npm</sub>

#### Getting Started

- Ensure [Git](https://git-scm.com/) is installed on your machine.
- Clone the repository by running this command in your terminal:

```zsh
git clone git@github.com:katieloesch/rock-paper-scissors-react.git
```

- Navigate to the project directory to install dependencies:

```zsh
cd rock-paper-scissors-react
```

### Running the Application Locally in a local development environment:

**1. Install Dependencies**

- Run the following command in the project’s root directory to install all necessary dependencies:

```zsh
npm install
```

**2. Start the Development Server**

- After installing the dependencies, start the development server with:

```zsh
npm start
```

**3. Access the Application**

- The development server will start at `http://localhost:3000`.
- By default, your web browser should automatically open and navigate to this address.
- If it doesn’t, you can manually access the application by entering `http://localhost:3000` in any web browser.

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

- **ReactJS** (v18.2.0)

  - <sub>primary framework used to build the application</sub>
  - <sub>created using the create-react-app tool</sub>
  - <sub>React docs: https://reactjs.org/</sub>
  - <sub>Create React App docs: https://create-react-app.dev/</sub>

<br>

```zsh
npx create-react-app .
```

- **SCSS**
  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>docs: https://sass-lang.com/guide</sub>

### Key Dependencies

- **Sass** (v1.77.8)

  - <sub>CSS preprocessor used for styling the application</sub>
  - <sub>npm: https://www.npmjs.com/package/sass</sub>
  - <sub>GitHub repo: https://github.com/sass/dart-sass</sub>

- **React Icons** (v5.2.1)
  - <sub>free and open-source project providing icons for use in React projects</sub>
  - <sub>npm: https://www.npmjs.com/package/react-icons</sub>
  - <sub>GitHub repo: https://github.com/react-icons/react-icons</sub>
  - <sub>homepage: https://react-icons.github.io/react-icons/</sub>

### UI and Design

- **Fonts**

  - main font: \'Handlee\', designed by Joe Prince
    - <sub>Cufon Fonts: https://www.cufonfonts.com/font/handlee</sub>
    - <sub>Google Fonts: https://fonts.google.com/specimen/Handlee</sub>
  - timer font: \'Cute Font\', designed by TypoDesign Lab. Inc.
    - <sub>Google Fonts: https://fonts.google.com/specimen/Cute+Font</sub>

- **Icons**

  - **Iconify**
    - <sub>free and open-source framework providing access to a vast number of icons designed to be used across different platforms and environments, including React</sub>
    - <sub>homepage: https://icon-sets.iconify.design/</sub>
    - <sub>GitHub Repo: https://github.com/iconify/iconify/tree/main</sub>
    - <sub>license: https://github.com/iconify/iconify/blob/main/license.txt</sub>
  - **Font Awesome**
    - <sub>icon library providing a large set of icons that are easy to use, scalable and customizable, including a free version that is open source</sub>
    - <sub>homepage: https://fontawesome.com/</sub>
    - <sub>GitHub repo: https://github.com/FortAwesome/Font-Awesome</sub>
    - <sub>license: https://fontawesome.com/license/free</sub>
  - **React Icons**
    - <sub>free and open-source project providing icons for use in React projects</sub>
    - <sub>npm: https://www.npmjs.com/package/react-icons</sub>
    - <sub>GitHub repo: https://github.com/react-icons/react-icons</sub>
    - <sub>homepage: https://react-icons.github.io/react-icons/</sub>

### Development Tools

- **Git / GitHub**

  - <sub>used for version control and collaboration</sub>
  - <sub>Git: https://git-scm.com/</sub>
  - <sub>GitHub: https://github.com/</sub>

- **Visual Studio Code (VSCode)**

  - <sub>code editor used for development</sub>
  - <sub>homepage: https://code.visualstudio.com/</sub>
  - <sub>GitHub repo: https://github.com/microsoft/vscode</sub>

- **Google Chrome & Chrome DevTools**

  - <sub>used for testing, debugging, and developing in the browser</sub>
  - <sub>Google Chrome: https://www.google.com/chrome/</sub>
  - <sub>Chrome DevTools: https://developer.chrome.com/docs/devtools</sub>

- **Excalidraw**

  - <sub>tool used to create wireframes for the application</sub>
  - <sub>homepage: https://excalidraw.com/</sub>
  - <sub>GitHub repo: https://github.com/excalidraw/excalidraw</sub>

- **ChatGPT4o**:

  - <sub>generative AI tool used for debugging and development support</sub>
  - <sub>homepage: https://chat.openai.com/</sub>
  - <sub>GitHub repo: https://github.com/openai</sub>

- **Hostinger**:
  - <sub>web hosting provider used to deploy the application</sub>
  - <sub>UK homepage: https://www.hostinger.co.uk</sub>

### Resources & Tutorials

- **Blogs**
  - <sub>[Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/) by [Eduardo Bouças](https://css-tricks.com/author/eduardoboucas/)</sub>
- **YouTube**
  - <sub>[Build React Rock Paper Scissors with React](https://www.youtube.com/watch?v=llrk6Jcq4m4) by [Telmo Sampaio](https://www.youtube.com/@Telmosampaio)</sub>

## <a name="deliverables"></a> 5. Deliverables

### MVP (Minimum Viable Product)

- A fully functional game hosted online.
- A Git repository on GitHub, including:
  - A link to the hosted game.
  - Regular commits tracking the project’s progress from the beginning.
  - Clean, well-formatted, and well-commented code.
  - Semantic HTML and CSS markup, following best practices.
  - Adherence to KISS (Keep It Simple, Stupid) and DRY (Don’t Repeat Yourself) principles.
- A Rock-Paper-Scissors game featuring:
  - Visual representation of both the computer's and the player's hand.
  - Player choice between three options: Rock, Paper or Scissors.
  - Random generation of the computer’s hand.
  - Comparison of hands to determine the winner.
  - Player notifications indicating a win, loss, or draw.
- The website should also:
  - Include contact information such as email, GitHub, LinkedIn, and other relevant links.
  - Feature a mobile-responsive design.

### Potential Extra Features

- A scoreboard to track wins and losses.
- Audio integration with a mute option.
- Creative styling elements (e.g., hover effects, animations).

### User Stories

- As a user, I should be able to select a hand.
- As a user, I should be able to start a new game.
- As a user, I should be able to see whether I’ve won, lost, or if it’s a draw.
- As a user, I should be able to play the game again without refreshing the page.

## <a name="planning"></a>6. Planning / Build Process

This was a solo project that I completed over the course of four non-consecutive days.

#### Day 1 - 01/02/2024

I began by setting up a React app using the `create-react-app` command and organising a `components` folder to store all the necessary React components for the game.

```zsh
npx create-react-app .
```

Next, I created a repository on GitHub and linked it to the local project. I focused on developing the core game logic and created a wireframe to visualize the basic layout of the website. Additionally, I built the first few JSX components and applied some basic styling.

<br>

<img src="./src/assets/images/wireframe.jpg" alt="wireframe" width="600">

#### Day 2 - 02/02/2024

On the second day, I completed the game logic and added scoreboards to track the player’s and computer’s wins. I also wanted the hand icons for the player and computer to "face each other," so I mirrored the scissors and rock icons depending on whether they were chosen by the computer or player. Additionally, I integrated custom fonts and started drafting the README file for the project.

#### Day 3 - Day 23/07/2024

On the third day, I finalized the styling and added contact icons to the bottom of the page.

#### Day 4 - Day 24/07/2024

On the final day, I focused on implementing media queries to ensure the app was mobile-responsive and completed the README.

## 7. <a name="challenges"></a> Challenges

Mirroring the icons so they would "face each other" proved a bit tricky at first. However, I found useful information on [Stack Overflow](https://stackoverflow.com/questions/23899718/scale-and-mirror-svg-object) and ultimately decided to directly alter the SVG code, using two separate icons per hand rather than relying solely on SCSS.

## 8. <a name="wins"></a> Wins

I aimed to complete this project within a 5-7 day window and successfully adhered to that timeline.

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

While I enjoyed building this project with React.js, I feel that this version doesn’t significantly improve upon the original vanilla JavaScript version, as the game’s features remain quite similar.

## <a name="future-improvements"></a> 10. Future Improvements

- Option for multiplayer mode
- Sound effects and animations
