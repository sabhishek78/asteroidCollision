function asteroidCollision(asteroids) {
  let i = 0;
  while (i < asteroids.length - 1) {
    if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
      if (Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
        asteroids.splice(i, 2, asteroids[i]);
      } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])) {
        asteroids.splice(i, 2, asteroids[i + 1]);
      } else if (Math.abs(asteroids[i]) === Math.abs(asteroids[i + 1])) {
        asteroids.splice(i, 2);
      }
      i < 2 ? (i = 0) : (i = i - 2);
    } else {
      i++;
    }
  }
  return asteroids;
}

console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([-8,8]));
console.log(asteroidCollision([-2, -1, 1, 2]));
console.log(asteroidCollision([-2, -2, -2, -2]));
console.log(asteroidCollision([-1, 1, 1, -2]));
console.log(asteroidCollision([1, 2, -1, -1]));
console.log(asteroidCollision([2, 5, -5, -2]));
console.log(asteroidCollision([-2, 5, -5, 2]));