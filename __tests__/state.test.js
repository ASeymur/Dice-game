import {
  getScores,
  getCurrentScore,
  getActivePlayer,
  isPlaying,
  setScores,
  setCurrentScore,
  setActivePlayer,
  setPlaying,
  resetState,
} from "../js/state.js";

describe("state management", () => {
  beforeEach(() => {
    resetState();
  });

  test("initial state is correct", () => {
    expect(getScores()).toEqual([0, 0]);
    expect(getCurrentScore()).toBe(0);
    expect(getActivePlayer()).toBe(0);
    expect(isPlaying()).toBe(true);
  });

  test("setters correctly update state", () => {
    setScores([10, 20]);
    setCurrentScore(5);
    setActivePlayer(1);
    setPlaying(false);

    expect(getScores()).toEqual([10, 20]);
    expect(getCurrentScore()).toBe(5);
    expect(getActivePlayer()).toBe(1);
    expect(isPlaying()).toBe(false);
  });

  test("resetState resets all values", () => {
    setScores([15, 30]);
    setCurrentScore(6);
    setActivePlayer(1);
    setPlaying(false);

    resetState();

    expect(getScores()).toEqual([0, 0]);
    expect(getCurrentScore()).toBe(0);
    expect(getActivePlayer()).toBe(0);
    expect(isPlaying()).toBe(true);
  });
});
