/**
 * Returns the intersection of two arrays
 *
 * Complexity: O(N)
 *
 * #hash-tables
 */

function setOfTwo(array1: number[], array2: number[]): number[] {
  const set = array1.length > array2.length ? new Set(array1) : new Set(array2);
  const array = array1.length > array2.length ? array2 : array1;
  const result: number[] = [];

  array.forEach((item) => {
    if (set.has(item)) {
      result.push(item);
    }
  });

  return result;
}

describe('Intersection of two arrays', () => {
  test('should return [2, 4]', () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [0, 2, 4, 6, 8];
    const result = setOfTwo(array1, array2);
    expect(result).toEqual([2, 4]);
  });
});
