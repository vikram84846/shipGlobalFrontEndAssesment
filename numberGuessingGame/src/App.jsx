import React, { useState } from 'react';
import '../src/App.css'

function NumberGuessingGame() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuessChange(e) {
    setGuess(e.target.value);
  }

  function handleCheckClick() {
    setAttempts(attempts + 1);
    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber)) {
      setMessage('Please enter a valid number.');
    } else if (guessNumber < randomNumber) {
      setMessage('Your number is too low!');
    } else if (guessNumber > randomNumber) {
      setMessage('Your number is too high!');
    } else {
      setMessage(
       ` Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`
      );
    }
  }

  function handleRestartClick() {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setAttempts(0);
    setMessage('');
  }

  return (
    <div className="container">
      <h1>Guess a number from 1 to 100</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleCheckClick}>Check</button>
      <p>You have {5 - attempts} Chances</p>
      <button onClick={handleRestartClick}>Restart</button>
    </div>
  );
}

export default NumberGuessingGame;