// js/state.js
// Внутренние переменные (не экспортируем напрямую)
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Геттеры
export const getScores = () => scores;
export const getCurrentScore = () => currentScore;
export const getActivePlayer = () => activePlayer;
export const isPlaying = () => playing;

// Сеттеры
export const setScores = (newScores) => {
  scores = newScores;
};

export const setCurrentScore = (newScore) => {
  currentScore = newScore;
};

export const setActivePlayer = (playerIndex) => {
  activePlayer = playerIndex;
};

export const setPlaying = (status) => {
  playing = status;
};

// Сброс состояния
export const resetState = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
