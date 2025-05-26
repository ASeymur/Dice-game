import { getDomElements } from "./dom.js";

const { btnRoll, btnHold, btnNew, diceEl } = getDomElements();

import {
  getCurrentScore,
  setCurrentScore,
  getActivePlayer,
  getScores,
  setScores,
  isPlaying,
  setPlaying,
} from "./state.js";

import { init, switchPlayer } from "./logic.js";

// Roll the dice
btnRoll.addEventListener("click", () => {
  if (isPlaying()) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Show the dice
    diceEl.classList.remove("hidden");
    diceEl.src = `image/dice-${dice}.png`;

    if (dice !== 1) {
      const current = getCurrentScore() + dice;
      setCurrentScore(current);
      document.getElementById(`current--${getActivePlayer()}`).textContent =
        current;
    } else {
      switchPlayer();
    }
  }
});

// Hold the score
btnHold.addEventListener("click", () => {
  if (isPlaying()) {
    const activePlayer = getActivePlayer();
    const scores = [...getScores()];
    scores[activePlayer] += getCurrentScore();
    setScores(scores);

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      setPlaying(false);
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// New game
btnNew.addEventListener("click", init);
