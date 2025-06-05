/**
 * Find average of even numbers.
 * Compexity: O(N)
 *
 * #loops #sums
 */

function averageOfEvenNumbers(array: number[]): number {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      count += 1;
    }
  }

  return sum / count;
}

//
//

describe('find average of even numbers', () => {
  test('sgould return 5', () => {
    const array = [1, 12, 8, 9, 13, 90, 55, 88];
    const result = averageOfEvenNumbers(array);

    expect(result).toStrictEqual(49.5);
  });
});
