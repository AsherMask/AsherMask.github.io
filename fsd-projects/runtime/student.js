function moveScenery() {
  const loopDifficulty = completedLoops * LEVELS.length;
  health = Math.max(
    0,
    health - 0.01 * (currentLevelIndex + 1 + loopDifficulty)
  );

  if (health === 0 && currentAnimationType !== animationTypes.frontDeath) {
    currentAnimationType = animationTypes.frontDeath;
    frameIndex = 0;
  }

  for (const sceneryType of Object.values(scenery)) {
    for (const instance of sceneryType.instances) {
      if (instance.speedX !== undefined) {
        instance.x += instance.speedX - currentLevel.speed;
      }

      if (instance.speedY !== undefined) {
        instance.y = (instance.y || 0) + instance.speedY;
        if (instance.minY !== undefined && instance.y <= instance.minY) {
          instance.y = instance.minY;
          instance.speedY = Math.abs(instance.speedY);
        } else if (instance.maxY !== undefined && instance.y >= instance.maxY) {
          instance.y = instance.maxY;
          instance.speedY = -Math.abs(instance.speedY);
        }
      }

      while (sceneryType.loopWidth > 0 && instance.x + instance.width < 0) {
        instance.x += sceneryType.loopWidth;
      }
    }
  }
}

function generateLevel() {
  for (const currentObject of currentLevel.gameObjects) {
    create(currentObject);
  }
}

function create(obj) {
  const makeFunctions = {
    obstacle: makeObstacle,
    enemy: makeEnemy,
    powerup: makePowerup,
    goal: makeGoal,
    platform: makePlatform,
  };
  const makeObject = makeFunctions[obj.type];
  if (!makeObject) {
    throw new Error(`Unknown game object type: ${obj.type}`);
  }
  makeObject(obj);
}

function filterObjects(type) {
  return gameObjects.filter((gameObject) => gameObject.type === type);
}

function moveGameObjects(objectList) {
  for (const gameObject of objectList) {
    gameObject.x += gameObject.speedX - currentLevel.speed;
    if (gameObject.speedY) {
      gameObject.y += gameObject.speedY;
      if (gameObject.y <= gameObject.minY) {
        gameObject.y = gameObject.minY;
        gameObject.speedY = Math.abs(gameObject.speedY);
      } else if (gameObject.y >= gameObject.maxY) {
        gameObject.y = gameObject.maxY;
        gameObject.speedY = -Math.abs(gameObject.speedY);
      }
    }
  }

}

function handleProjectileCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];
    for (let j = 0; j < projectiles.length; j++) {
      const currentProjectile = projectiles[j];
      if (currentObject.toRemove || currentProjectile.toRemove) {
        continue;
      }
      if (isCollidingWithProjectile(currentProjectile, currentObject)) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];
    if (
      currentObject.type !== "platform" &&
      isGenericCollision(currentObject)
    ) {
      handleHallebotGenericCollision(i);
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex++;
  if (currentLevelIndex >= LEVELS.length) {
    currentLevelIndex = 0;
    completedLoops++;
  }

  const level = LEVELS[currentLevelIndex];
  currentLevel = {
    ...level,
    speed: level.speed + completedLoops * 0.5,
    name: completedLoops
      ? `${level.name} (Loop ${completedLoops + 1})`
      : level.name,
  };
  gameObjects = [];
  projectiles = [];
  generateLevel();
}
