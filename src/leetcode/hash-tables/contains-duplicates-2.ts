/**
 * Given an integer array nums and an integer k, return true
 * if there are two distinct indices i and j in the array
 * such that nums[i] == nums[j] and `abs(i - j) <= k`.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(log N)
 *
 * #hash-tables
 */

function containsDuplicates(array: number[], k: number): boolean {
  const map = new Map<number, number>();
  let result = false;

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      if (Math.abs(map.get(array[i])! - i) <= k) {
        result = true;
      }
    }

    map.set(array[i], i);
  }

  return result;
}

describe('contains duplicate', () => {
  test('should return `true`', () => {
    let array = [1, 2, 3, 1];
    let k = 3;
    let result = containsDuplicates(array, k);
    expect(result).toEqual(true);

    array = [1, 0, 1, 1];
    k = 1;
    result = containsDuplicates(array, k);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const array = [1, 2, 3, 1, 2, 3];
    const k = 2;
    const result = containsDuplicates(array, k);
    expect(result).toEqual(false);
  });
});
