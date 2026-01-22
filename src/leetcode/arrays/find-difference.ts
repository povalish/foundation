/**
 * Find the Difference of Two Arrays
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const elements1 = new Map<number, boolean>();
  const elements2 = new Map<number, boolean>();

  const length = Math.max(nums1.length, nums2.length);

  for (let i = 0; i < length; i++) {
    if (i < nums1.length) elements1.set(nums1[i], true);
    if (i < nums2.length) elements2.set(nums2[i], true);
  }

  const result: number[][] = [[], []];

  for (const value of elements1.keys()) {
    if (!elements2.has(value)) result[0].push(value);
  }

  for (const value of elements2.keys()) {
    if (!elements1.has(value)) result[1].push(value);
  }

  return result;
}

//
//

describe('Find the Difference of Two Arrays', () => {
  test('simple cases', () => {
    expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
      [1, 3],
      [4, 6],
    ]);
    expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
  });
});
