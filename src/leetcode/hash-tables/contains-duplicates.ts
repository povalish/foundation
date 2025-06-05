/**
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(log N)
 */

function containsDuplicates(array: number[]): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      return true;
    }
  }

  return false;
}

describe('contains duplicate', () => {
  test('should return `true`', () => {
    let array = [1, 2, 3, 1];
    let result = containsDuplicates(array);
    expect(result).toEqual(true);

    array = [1, 1, 2, 2, 3, 3, 3, 1];
    result = containsDuplicates(array);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const array = [1, 2, 3, 10];
    const result = containsDuplicates(array);
    expect(result).toEqual(false);
  });
});
