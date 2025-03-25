/**
 * Search array for duplicates.
 * Compexity: O(N)
 */

export function hasDuplicates(array: number[]): boolean {
  const elements: Record<number, number> = {};

  for (const item of array) {
    if (!elements[item]) {
      elements[item] = 1;
    } else {
      return true;
    }
  }

  return false;
}

//
//

describe('has duplicates', () => {
  test('should return `true`', () => {
    const array = [1, 2, 3, 1, 4, 5];
    const result = hasDuplicates(array);
    expect(result).toBe(true);
  });

  test('should return `false`', () => {
    const array = [1, 2, 3, 4, 5];
    const result = hasDuplicates(array);
    expect(result).toBe(false);
  });
});
