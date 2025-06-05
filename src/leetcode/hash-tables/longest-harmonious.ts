/**
 * We define a harmonious array as an array where the difference between
 * its maximum value and its minimum value is exactly 1.
 *
 * Given an integer array nums, return the length of its longest harmonious
 * subsequence among all its possible subsequences.
 *
 * Time Compexity: O(N)
 * Space Complexity: O(N)
 *
 * #hash-tables #arrays #numbers
 */

function findLHS(nums: number[]): number {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }

  let maxFreqPair = 0;

  for (const freqNum of freq.keys()) {
    if (freq.has(freqNum + 1)) {
      const freqPair = freq.get(freqNum)! + freq.get(freqNum + 1)!;
      if (freqPair > maxFreqPair) {
        maxFreqPair = freqPair;
      }
    }
  }

  return maxFreqPair;
}

describe('the longest harmonious subsequence', () => {
  // test('should return `5`', () => {
  //   const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  //   const result = findLHS(nums);
  //   expect(result).toEqual(5);
  // });

  // test('should return `2`', () => {
  //   const nums = [1, 2, 3, 4];
  //   const result = findLHS(nums);
  //   expect(result).toEqual(2);
  // });

  // test('should return `0`', () => {
  //   const nums = [1, 1, 1, 1];
  //   const result = findLHS(nums);
  //   expect(result).toEqual(0);
  // });

  test('should return `0`', () => {
    const nums = [1, 2, 2, 1];
    const result = findLHS(nums);
    expect(result).toEqual(4);
  });
});
