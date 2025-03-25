import { bubbleSort } from '../bubble';

describe('binary search', () => {
  const unSortedArray = [8, 3, 5, 2, 6, 1, 7, 4];
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

  test('should sort array', () => {
    const result = bubbleSort(unSortedArray);
    expect(result).toEqual(sortedArray);
  });
});
