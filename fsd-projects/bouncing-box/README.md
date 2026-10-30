# Bouncing Box

A keyboard-accessible browser game: click the moving box to score, then avoid
mis-clicking ten times. The box bounces around the play area, changes color and
gets faster as your score grows.

## Run the game

Open `index.html` in a browser or use Live Server from VS Code. No build step or
package installation is required.

## How to play

- Click the box (or focus it and press Enter/Space) to score and move it to a
  random position.
- Every click changes the box color. The speed increase grows every three
  successful clicks.
- Click the background to record a miss. Ten misses end the round.
- Choose **Play again** to reset the score, speed, and miss count.
- The box bounces off all four play-area edges and remains in bounds when the
  window is resized.

## Project files

- `index.html` — game markup, styles, and gameplay
- `jquery.min.js` — local jQuery dependency
- `BONUS_CHALLENGES.md` — completed challenge list
