/**
 * Maximum Number of Pairs in Array
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/description/
 */

function numberOfPairs(nums: number[]): number[] {
  const numFreq = new Map<number, boolean>();
  let pairs = 0;

  for (const num of nums) {
    if (!numFreq.has(num)) numFreq.set(num, true);
    else {
      pairs++;
      numFreq.delete(num);
    }
  }

  return [pairs, numFreq.size];
}

//

describe('Maximum Number of Pairs in Array', () => {
  it('should pass basic cases', () => {
    expect(numberOfPairs([1, 3, 2, 1, 3, 2, 2])).toEqual([3, 1]);
    expect(numberOfPairs([1, 1])).toEqual([1, 0]);
    expect(numberOfPairs([0])).toEqual([0, 1]);
  });
});
