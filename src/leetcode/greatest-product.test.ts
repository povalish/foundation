/**
 * Find greatest product between each pair.
 * Compexity: O(N^2)
 */

function greatestProduct(array: number[]): [number, number] {
  let greatest = 0;
  let result: [number, number] = [array[0], array[0]];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] * array[j] > greatest) {
        greatest = array[i] * array[j];
        result = [array[i], array[j]];
      }
    }
  }

  return result;
}

//
//

describe('find greatest product', () => {
  test('sgould return [10, 10]', () => {
    const array = [1, 2, 3, 4, 10];
    const result = greatestProduct(array);

    expect(result).toStrictEqual([10, 10]);
  });
});
