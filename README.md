Wordle Clone - React Class Component
This is a simple Wordle-like game built using React (class components) and CSS. The game allows users to guess a 5-letter word within 6 attempts. After each guess, the user receives feedback on their guess using color-coded tiles:

Green: Correct letter in the correct position.

Yellow: Correct letter in the wrong position.

Gray: Incorrect letter.

The game also includes a "New Game" button to restart the game after a win or loss.

Features
Game Logic:

Users have 6 attempts to guess a 5-letter word.

Feedback is provided after each guess using color-coded tiles.

Invalid words (not in the predefined list) are not accepted.

UI/UX:

A grid displays previous guesses with color-coded feedback.

A message is shown when the user wins or loses.

A "New Game" button allows users to restart the game.

State Management:

The game state (guesses, attempts, and game status) is managed using React's class component state.

Styling:

Custom CSS is used for styling the grid, cells, input, buttons, and messages.

Tech Stack
React: JavaScript library for building the user interface.

CSS: Custom styles for the game layout and components.

No Backend: Words are hardcoded in the frontend.
