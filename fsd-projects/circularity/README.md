# Circularity

A motion poem built with animated circles, random velocities, and color that drift across the screen like a living abstract scene. Circles wrap around the canvas after fully leaving its edges.

## Overview

This project uses JavaScript and canvas-style drawing to generate a field of circles that move around the page. The result is a colorful visual experience that changes every time the project runs.

## Features

- Randomly generated circles
- Motion and wraparound behavior
- Colorful visual patterns and movement
- Reusable drawing logic for creating many circle objects
- Optional single-player and local multiplayer modes with circle absorption

## How to Run

1. Open the project folder in VS Code.
2. Open `fsd-projects/circularity/index.html` in a browser or with Live Server.
3. Refresh the page to watch the composition animate. Once the game controls appear, choose a mode; player 1 uses WASD and player 2 uses the arrow keys.

## Visual Notes

- Each circle is created with motion and color variation.
- Circles re-enter from the opposite edge after fully leaving the canvas, and growing players remain within its bounds.

## Project Files

- `index.html` — page entry for the animation
- `js/init.js` — main animation setup and logic
- `js/*.js` — supporting game and drawing modules
- `README.md` — project overview and notes
