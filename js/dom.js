export function getDomElements() {
  return {
    player0El: document.querySelector(".player--0"),
    player1El: document.querySelector(".player--1"),
    score0El: document.getElementById("score--0"),
    score1El: document.getElementById("score--1"),
    current0El: document.getElementById("current--0"),
    current1El: document.getElementById("current--1"),
    diceEl: document.querySelector(".dice"),
    btnNew: document.querySelector(".btn--new"),
    btnRoll: document.querySelector(".btn--roll"),
    btnHold: document.querySelector(".btn--hold"),
  };
}
