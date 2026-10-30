// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

const scenery = {
  stars: {
    imageUrl: "images/backgrounds/stars.svg",
    loopWidth: 4200,
    instances: [
      { x: 0, y: 350, width: 1400, height: 350, speedX: 1.9 },
      { x: 1400, y: 350, width: 1400, height: 350, speedX: 1.9 },
      { x: 2800, y: 350, width: 1400, height: 350, speedX: 1.9 },
    ],
  },
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  distantMoon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 2800,
    instances: [
      { x: 700, y: 220, width: 90, height: 90, speedX: 1.8, speedY: 0.1, minY: 150, maxY: 240 },
      { x: 2100, y: 165, width: 120, height: 120, speedX: 1.8, speedY: -0.08, minY: 140, maxY: 230 },
    ],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 2800,
    instances: [
      { x: 350, width: 180, height: 240, speedX: 1.4 },
      { x: 1050, width: 260, height: 300, speedX: 1.4 },
      { x: 1900, width: 220, height: 210, speedX: 1.4 },
      { x: 2550, width: 160, height: 275, speedX: 1.4 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 2800,
    instances: [
      { x: 450, width: 50, height: 150, speedX: 0 },
      { x: 1150, width: 50, height: 175, speedX: 0 },
      { x: 1850, width: 50, height: 135, speedX: 0 },
      { x: 2550, width: 50, height: 160, speedX: 0 },
    ],
  },
  underground: {
    imageUrl: "images/backgrounds/underground.svg",
    loopWidth: 1400,
    instances: [
      { x: 0, y: 750, width: 1400, height: 350, speedX: 0.2 },
    ],
  },
};
