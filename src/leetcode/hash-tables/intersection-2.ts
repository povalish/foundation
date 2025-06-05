/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both
 * arrays and you may return the result in any order.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(log N)
 */
function intersect(nums1: number[], nums2: number[]): number[] {
  const largeArray = nums1.length > nums2.length ? nums1 : nums2;
  const smallArray = nums1.length > nums2.length ? nums2 : nums1;
  const mapNumberToCount = new Map<number, number>();
  const intersections = new Map<number, number>();

  for (let i = 0; i < largeArray.length; i++) {
    if (!mapNumberToCount.has(largeArray[i])) {
      mapNumberToCount.set(largeArray[i], 1);
    } else {
      const count = mapNumberToCount.get(largeArray[i])!;
      mapNumberToCount.set(largeArray[i], count + 1);
    }
  }

  for (let i = 0; i < smallArray.length; i++) {
    if (mapNumberToCount.has(smallArray[i])) {
      if (!intersections.has(smallArray[i])) {
        intersections.set(smallArray[i], 1);
      } else {
        const countSmallArray = intersections.get(smallArray[i])! + 1;
        const countLargeArray = mapNumberToCount.get(smallArray[i])!;
        const smallest = countSmallArray < countLargeArray ? countSmallArray : countLargeArray;

        intersections.set(smallArray[i], smallest);
      }
    }
  }

  const result: number[] = [];
  for (const entry of intersections) {
    for (let i = 0; i < entry[1]; i++) {
      result.push(entry[0]);
    }
  }

  return result;
}

//
//

describe('intersection of two arrays II', () => {
  test('should return `[2, 2]`', () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    const result = intersect(nums1, nums2);
    expect(result).toEqual([2, 2]);
  });

  test('should return `[9,4]`', () => {
    const nums1 = [4, 9, 5];
    const nums2 = [9, 4, 9, 8, 4];
    const result = intersect(nums1, nums2);
    expect(result).toEqual([4, 9]);
  });

  test('should return `[9,4]`', () => {
    const nums1 = [3, 1, 2];
    const nums2 = [1, 1];
    const result = intersect(nums1, nums2);
    expect(result).toEqual([1]);
  });
});
