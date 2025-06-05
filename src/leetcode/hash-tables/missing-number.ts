/**
 * Given an array nums containing n distinct numbers
 * in the range [0, n], return the only number in the range that is missing from the array.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #hash-tables #numbers
 */

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, boolean>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }

  for (let i = 0; i <= n; i++) {
    if (!map.has(i)) {
      return i;
    }
  }

  return -1;
}

// Space Complexity: O(1)
//
// function missingNumberV2(nums: number[]): number {
//   let accumulator = 0;

//   for (let i = 0; i <= nums.length; i++) {
//     accumulator ^= i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     accumulator = accumulator ^ nums[i];
//   }

//   return accumulator;
// }

describe('missing number', () => {
  test('should return `2`', () => {
    const nums = [3, 0, 1];
    const result = missingNumber(nums);
    expect(result).toEqual(2);
  });
});
