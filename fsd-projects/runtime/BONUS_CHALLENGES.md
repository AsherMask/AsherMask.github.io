# Runtime Neo Bonus Challenges

The five bonus challenges are implemented in the game.

## 1. Add additional kinds for object types

- `movingSpikes` adds a new obstacle kind with its own SVG sprite.
- `fuelCell` adds a collectible fuel power-up with its own SVG sprite.
- Both kinds are defined in `DEFAULT_VALUES` and appear in the level data.

## 2. Make the game endless

Completing the last level returns to Level 1. Each completed loop increases
level speed and fuel consumption, and the level HUD shows the loop number.

## 3. Add vertically moving objects

Objects can use `speedY`, `minY`, and `maxY` in `levels.js`. Their vertical
movement reverses at the configured bounds. Moving hazards in the levels
demonstrate the behavior.

## 4. Create more complex backgrounds

The game uses a custom star-field SVG, drifting moons, parallax buildings and
lamps, and a separate underground layer. Background elements loop and selected
layers also move vertically.

## 5. Turn health into a fuel gauge

The HUD displays fuel. Fuel drains over time, faster on later levels and loops.
Health-up and fuel-cell pickups replenish it; running out of fuel starts the
normal death sequence.

## Check the challenges

- Collect a fuel pickup and confirm the fuel gauge increases.
- Watch moving objects reverse direction at their `minY` and `maxY` bounds.
- Reach the final goal to verify the game loops and grows more difficult.
- Confirm the background layers continue to scroll without gaps.
