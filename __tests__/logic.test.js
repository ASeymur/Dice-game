/**
 * @jest-environment jsdom
 */

import {
  getActivePlayer,
  getCurrentScore,
  setActivePlayer,
  setCurrentScore,
} from "../js/state.js";

import { init, switchPlayer } from "../js/logic.js";

document.body.innerHTML = `
    <div class="player player--0 player--active"></div>
    <div class="player player--1"></div>
    <div id="score--0">0</div>
    <div id="score--1">0</div>
    <div id="current--0">0</div>
    <div id="current--1">0</div>
    <img class="dice hidden" />
  `;

describe("game logic", () => {
  beforeEach(() => {
    init();
  });

  test("init sets correct initial DOM state", () => {
    expect(document.getElementById("score--0").textContent).toBe("0");
    expect(document.getElementById("score--1").textContent).toBe("0");
    expect(document.getElementById("current--0").textContent).toBe("0");
    expect(document.getElementById("current--1").textContent).toBe("0");

    expect(document.querySelector(".dice").classList.contains("hidden")).toBe(
      true
    );
    expect(
      document.querySelector(".player--0").classList.contains("player--active")
    ).toBe(true);
    expect(
      document.querySelector(".player--1").classList.contains("player--active")
    ).toBe(false);
  });

  test("switchPlayer swaps players and resets current score", () => {
    setCurrentScore(8);
    setActivePlayer(0);
    document.getElementById("current--0").textContent = "8";

    switchPlayer();

    expect(getActivePlayer()).toBe(1);
    expect(getCurrentScore()).toBe(0);
    expect(document.getElementById("current--0").textContent).toBe("0");

    expect(
      document.querySelector(".player--0").classList.contains("player--active")
    ).toBe(false);
    expect(
      document.querySelector(".player--1").classList.contains("player--active")
    ).toBe(true);
  });
});
