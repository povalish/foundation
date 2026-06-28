/**
 * Number of Arithmetic Triplets
 * https://leetcode.com/problems/number-of-arithmetic-triplets/description/
 */

function arithmeticTriplets(nums: number[], diff: number): number {
  const cache = new Map<number, boolean>();
  for (const num of nums) {
    cache.set(num, true);
  }

  let counter = 0;
  for (const num of nums) {
    if (cache.has(num + diff) && cache.has(num + 2 * diff)) counter += 1;
  }

  return counter;
}

//

describe('Number of Arithmetic Triplets', () => {
  it('should pass basic cases', () => {
    expect(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)).toEqual(2);
    expect(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)).toEqual(2);
  });
});
