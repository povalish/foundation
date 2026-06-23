/**
 * Rotate Array
 * https://neetcode.io/problems/rotate-array/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function rotate(nums: number[], k: number): number[] {
  if (k === 0 || k === nums.length) return nums;

  const requiredSteps = k > nums.length ? k % nums.length : k;
  const lastElements = nums.splice(nums.length - requiredSteps);
  nums.splice(0, 0, ...lastElements);

  return nums;
}

//

// rotate([1, 2, 3, 4, 5, 6, 7, 8], 4);

describe('Rotate Array', () => {
  it('should pass basic cases', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([5, 6, 7, 8, 1, 2, 3, 4]);
    expect(rotate([1000, 2, 4, -3], 2)).toEqual([4, -3, 1000, 2]);
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});

/**
 * [1, 2, 3, 4, 5, 6, 7]
 *
 * [1, 2, 3, 4, 5, 6, 7]
 * []
 */
