import { getDomElements } from "./dom.js";
import {
  getActivePlayer,
  setActivePlayer,
  setCurrentScore,
  resetState,
} from "./state.js";

export const init = () => {
  resetState();

  const {
    player0El,
    player1El,
    score0El,
    score1El,
    current0El,
    current1El,
    diceEl,
  } = getDomElements();

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

export const switchPlayer = () => {
  const { player0El, player1El } = getDomElements();

  const activePlayer = getActivePlayer();
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  setCurrentScore(0);
  const newActive = activePlayer === 0 ? 1 : 0;
  setActivePlayer(newActive);

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
