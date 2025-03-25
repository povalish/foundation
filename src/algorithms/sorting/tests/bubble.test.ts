import { bubbleSort } from '../bubble';

describe('binary search', () => {
  const unSortedArray = [4, 2, 7, 1, 3];
  const sortedArray = [1, 2, 3, 4, 7];

  test('should sort array', () => {
    const result = bubbleSort(unSortedArray);
    expect(result).toEqual(sortedArray);
  });
});
