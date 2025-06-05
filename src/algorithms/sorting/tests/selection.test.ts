import { selectionSort } from '../selection';

describe('selection sort', () => {
  test('should sort', () => {
    const unSortedArray = [3, 5, 2, 6, 1, 4];
    const sortedArray = [1, 2, 3, 4, 5, 6];

    selectionSort(unSortedArray);
    expect(unSortedArray).toEqual(sortedArray);
  });
});
