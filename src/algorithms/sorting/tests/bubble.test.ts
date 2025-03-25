import { bubbleSort, bubbleSortV2 } from '../bubble';

describe('binary search', () => {
  test('should sort array with v1', () => {
    const unSortedArray = [8, 3, 5, 2, 6, 1, 7, 4];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = bubbleSort(unSortedArray);
    expect(result).toEqual(sortedArray);
  });

  test('should sort array with v2', () => {
    const unSortedArray = [8, 3, 5, 2, 6, 1, 7, 4];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = bubbleSortV2(unSortedArray);
    expect(result).toEqual(sortedArray);
  });
});
