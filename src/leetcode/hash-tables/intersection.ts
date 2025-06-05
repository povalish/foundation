/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(log N)
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, boolean>();
  const unique: number[] = [];

  const moreNumbers = nums1.length >= nums2.length ? nums1 : nums2;
  const lessNumbers = nums1.length >= nums2.length ? nums2 : nums1;

  for (let i = 0; i < moreNumbers.length; i++) {
    if (!map.has(moreNumbers[i])) {
      map.set(moreNumbers[i], false);
    }
  }

  for (let i = 0; i < lessNumbers.length; i++) {
    if (map.has(lessNumbers[i])) {
      map.set(lessNumbers[i], true);
    }
  }

  for (const [num, isMatched] of map.entries()) {
    if (isMatched) {
      unique.push(num);
    }
  }

  return unique;
}

//
//

describe('intersection of two arrays', () => {
  test('should return `[2]`', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const result = intersection(nums1, nums2);
    expect(result).toEqual([2]);
  });

  test('should return `[4,9]`', () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const result = intersection(nums1, nums2);
    expect(result).toEqual([9, 4]);
  });
});
