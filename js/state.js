// Internal variables (do not export directly)
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Getters
export const getScores = () => scores;
export const getCurrentScore = () => currentScore;
export const getActivePlayer = () => activePlayer;
export const isPlaying = () => playing;

// Setters
export const setScores = (newScores) => {
  scores = newScores;
};

export const setCurrentScore = (newScore) => {
  if (typeof newScore === "number" && !isNaN(newScore)) {
    currentScore = newScore;
  } else {
    console.warn("Invalid currentScore value:", newScore);
  }
};

export const setActivePlayer = (playerIndex) => {
  if (
    typeof playerIndex === "number" &&
    (playerIndex === 0 || playerIndex === 1)
  ) {
    activePlayer = playerIndex;
  } else {
    console.warn("Invalid active player index:", playerIndex);
  }
};

export const setPlaying = (status) => {
  playing = status;
};

// Reset game state
export const resetState = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
