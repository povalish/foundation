/**
 * The next greater element of some element x in an array is the first
 * greater element that is to the right of x in the same array.
 *
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where
 * nums1 is a subset of nums2.
 *
 * For each 0 <= i < nums1.length, find the index j such that
 * nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
 * If there is no next greater element, then the answer for this query is -1.
 *
 * Return an array ans of length nums1.length such that ans[i] is the next
 * greater element as described above.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(N)
 *
 * #hash-tables
 */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const containsNextGreaterNum = new Map<number, number>();

  for (let i = 0; i < nums2.length - 1; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[i] < nums2[j]) {
        containsNextGreaterNum.set(nums2[i], nums2[j]);
        break;
      }
    }
  }

  for (let i = 0; i < nums1.length; i++) {
    result.push(containsNextGreaterNum.get(nums1[i]) || -1);
  }

  return result;
}

//
//

describe('next greater element', () => {
  test('should return `[-1,3,-1]`', () => {
    const nums1 = [4, 1, 2];
    const nums2 = [1, 3, 4, 2];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([-1, 3, -1]);
  });

  test('should return `[3,-1]`', () => {
    const nums1 = [2, 4];
    const nums2 = [1, 2, 3, 4];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([3, -1]);
  });

  test('should return `[7,7,7,7,7]`', () => {
    const nums1 = [1, 3, 5, 2, 4];
    const nums2 = [6, 5, 4, 3, 2, 1, 7];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([7, 7, 7, 7, 7]);
  });
});
