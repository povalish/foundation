/**
 * Alice has n candies, where the ith candy is of type candyType[i].
 * Alice noticed that she started to gain weight, so she visited a doctor.
 *
 * The doctor advised Alice to only eat n / 2 of the candies she has (n is always even).
 * Alice likes her candies very much, and she wants to eat the maximum number of different
 * types of candies while still following the doctor's advice.
 *
 * Given the integer array candyType of length n, return the maximum number of different
 * types of candies she can eat if she only eats n / 2 of them.
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function distributeCandies(candyType: number[]): number {
  const types = new Map<number, boolean>();

  candyType.forEach((type) => {
    types.set(type, true);
  });

  const canEat = candyType.length / 2;
  const canChoose = types.size;

  return Math.min(canChoose, canEat);
}

describe('distribute candies', () => {
  test('should return `3`', () => {
    const candyType = [1, 1, 2, 2, 3, 3];
    const result = distributeCandies(candyType);
    expect(result).toEqual(3);
  });

  test('should return `2', () => {
    const candyType = [1, 1, 2, 3];
    const result = distributeCandies(candyType);
    expect(result).toEqual(2);
  });

  test('should return `1', () => {
    const candyType = [6, 6, 6, 6];
    const result = distributeCandies(candyType);
    expect(result).toEqual(1);
  });
});
