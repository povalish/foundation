/**
 * Asteroid Collision
 * https://neetcode.io/problems/asteroid-collision/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    if (stack.length === 0) {
      stack.push(asteroid);
      continue;
    }

    const lastAsteroid = stack.pop()!;
    const isSameDirection = lastAsteroid * asteroid > 0;

    if (isSameDirection) {
      stack.push(lastAsteroid);
      stack.push(asteroid);
    } else {
      if (Math.abs(lastAsteroid) === Math.abs(asteroid)) continue;
      const survivor = Math.max(Math.abs(lastAsteroid), Math.abs(asteroid));
      stack.push(survivor);
    }
  }

  return stack;
}

//

// asteroidCollision([7, -3, 9]);

describe('Asteroid Collision', () => {
  it('should pass basic cases', () => {
    expect(asteroidCollision([2, 4, -4, -1])).toEqual([2]);
    expect(asteroidCollision([5, 5])).toEqual([5, 5]);
    expect(asteroidCollision([7, -3, 9])).toEqual([7, 9]);
  });
});

/**
 * 2
 * 4
 *
 *
 */
