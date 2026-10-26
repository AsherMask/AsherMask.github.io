$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(150, 610, 240, 25, "#3ecf8e");
    createPlatform(430, 540, 220, 25, "#3ecf8e");
    createPlatform(700, 455, 240, 25, "#3ecf8e");
    createPlatform(990, 375, 260, 25, "#3ecf8e");
    createPlatform(560, 290, 180, 25, "#ffb703");
    createPlatform(980, 600, 180, 25, "#8d99ae", 850, 1200, 2);

    // TODO 3 - Create Collectables
    createCollectable("database", 215, 575, 0.3, 1.1);
    createCollectable("diamond", 520, 500, 0.25, 1);
    createCollectable("grace", 1050, 340, 0.3, 1);

    // TODO 4 - Create Cannons
    createCannon("top", 260, 1400);
    createCannon("right", 330, 1800, 22, 22, 200, 550, 1);
    createCannon("left", 540, 1600, 22, 22, 120, 650, 1);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
