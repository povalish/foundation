/**
 * Find K Closest Elements
 * https://neetcode.io/problems/find-k-closest-elements/question?list=neetcode250
 *
 * Time Complexity: O(n - k)
 * Space Complexity: O(1)
 */

function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    const leftDiff = Math.abs(arr[left] - x);
    const rightDiff = Math.abs(arr[right] - x);

    if (leftDiff > rightDiff) left++;
    else if (leftDiff <= rightDiff) right--;
  }

  return arr.slice(left, right + 1);
}

//

// findClosestElements([2, 4, 5, 8], 2, 6);

describe('Find K Closest Elements', () => {
  it('should pass basic cases', () => {
    expect(findClosestElements([2, 4, 5, 8], 2, 6)).toEqual([4, 5]);
    expect(findClosestElements([2, 3, 4], 3, 1)).toEqual([2, 3, 4]);
  });
});

/**
 * windowLen - 2
 * left - 2
 * right - 8
 *
 *
 *
 * abs(2 - 6) / abs(8 - 6)
 *
 *
 *
 */
