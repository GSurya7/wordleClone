import React, {Component} from 'react'
import './App.css'

const WORDS = ['REACT', 'ANGULAR', 'VUEJS', 'NEXTJS', 'NODEJS'] // Example words
const WORD_TO_GUESS = WORDS[Math.floor(Math.random() * WORDS.length)]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guesses: Array(6).fill(''), // Stores all guesses
      currentGuess: '', // Current input value
      attempts: 0, // Number of attempts made
      gameStatus: 'playing', // 'playing', 'won', 'lost'
    }
  }

  handleInputChange = e => {
    this.setState({currentGuess: e.target.value.toUpperCase()})
  }

  handleSubmit = e => {
    e.preventDefault()
    const {currentGuess, attempts, guesses} = this.state

    if (currentGuess.length === 5 && WORDS.includes(currentGuess)) {
      const newGuesses = [...guesses]
      newGuesses[attempts] = currentGuess

      this.setState({
        guesses: newGuesses,
        attempts: attempts + 1,
        currentGuess: '',
      })

      // Check if the game is won or lost
      if (currentGuess === WORD_TO_GUESS) {
        this.setState({gameStatus: 'won'})
      } else if (attempts + 1 >= 6) {
        this.setState({gameStatus: 'lost'})
      }
    }
  }

  getFeedback = (guess, index) => {
    if (!guess) return 'gray'
    const letter = guess[index]
    if (WORD_TO_GUESS[index] === letter) return 'green'
    if (WORD_TO_GUESS.includes(letter)) return 'yellow'
    return 'gray'
  }

  restartGame = () => {
    this.setState({
      guesses: Array(6).fill(''),
      currentGuess: '',
      attempts: 0,
      gameStatus: 'playing',
    })
  }

  render() {
    const {guesses, currentGuess, attempts, gameStatus} = this.state

    return (
      <div className="app">
        <h1>Wordle Clone</h1>
        <div className="grid">
          {guesses.map((guess, i) => (
            <div key={i} className="row">
              {Array.from({length: 5}).map((_, j) => (
                <div
                  key={j}
                  className={`cell ${
                    i < attempts ? this.getFeedback(guess, j) : ''
                  }`}
                >
                  {guess[j] || ''}
                </div>
              ))}
            </div>
          ))}
        </div>
        {gameStatus === 'playing' ? (
          <form onSubmit={this.handleSubmit} className="form">
            <input
              type="text"
              value={currentGuess}
              onChange={this.handleInputChange}
              maxLength={5}
              className="input"
            />
            <button type="submit" className="button">
              Submit Guess
            </button>
          </form>
        ) : (
          <div className="result">
            <p className="message">
              {gameStatus === 'won'
                ? 'Congratulations! You won!'
                : 'Sorry, you lost!'}
            </p>
            <button type="button" onClick={this.restartGame} className="button">
              New Game
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default App
