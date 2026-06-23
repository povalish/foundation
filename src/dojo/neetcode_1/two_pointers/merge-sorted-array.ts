/**
 * Merge Sorted Array
 * https://neetcode.io/problems/merge-sorted-array/question?list=neetcode250
 *
 * Time Complexity: O(n+m)
 * Space Complexity: O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): number[] | void {
  let n1Idx = m - 1;
  let n2Idx = n - 1;
  let lastIdx = m + n - 1;

  while (n2Idx >= 0) {
    if (n1Idx >= 0 && nums1[n1Idx] > nums2[n2Idx]) {
      nums1[lastIdx] = nums1[n1Idx];
      lastIdx--;
      n1Idx--;
    } else {
      nums1[lastIdx] = nums2[n2Idx];
      lastIdx--;
      n2Idx--;
    }
  }

  return nums1;
}

// merge([10, 20, 20, 40, 0, 0], 4, [1, 2], 2);

//

describe('Merge Sorted Array', () => {
  it('should pass basic cases', () => {
    expect(merge([10, 20, 20, 40, 0, 0], 4, [1, 2], 2)).toEqual([1, 2, 10, 20, 20, 40]);
    expect(merge([0, 0], 0, [1, 2], 2)).toEqual([1, 2]);
  });
});
