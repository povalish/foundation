/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Merge Sorted Array
 * https://neetcode.io/problems/merge-sorted-array/question?list=neetcode250
 *
 * Time Complexity: O(n+m)
 * Space Complexity: O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): number[] | void {
  let nums1Pointer = 0;
  let nums2Pointer = 0;

  while (nums1Pointer < nums1.length) {
    if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
      [nums1[nums1Pointer], nums2[nums2Pointer]] = [nums2[nums2Pointer], nums1[nums1Pointer]];
    } else {
      [nums2[nums2Pointer], nums1[nums1Pointer]] = [nums1[nums1Pointer], nums2[nums2Pointer]];
    }

    nums1Pointer++;
    nums2Pointer = (nums2Pointer + 1) % nums2.length;
  }

  return nums1;
}

// merge([10, 20, 20, 40, 0, 0, 0], 4, [1, 2, 3], 3);

//

describe('Merge Sorted Array', () => {
  it('should pass basic cases', () => {
    expect(merge([10, 20, 20, 40, 0, 0], 4, [1, 2], 2)).toEqual([1, 2, 10, 20, 20, 40]);
    expect(merge([0, 0], 0, [1, 2], 2)).toEqual([1, 2]);
  });
});

/**
 *
 * [1, 2, 3] - [10, 20, 20]
 */
