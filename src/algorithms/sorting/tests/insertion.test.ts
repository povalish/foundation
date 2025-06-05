import { insertionSort } from '../insertion';

describe('insertion sort', () => {
  test('should sort', () => {
    const unSortedArray = [3, 5, 2, 6, 1, 4];
    const sortedArray = [1, 2, 3, 4, 5, 6];

    insertionSort(unSortedArray);
    expect(unSortedArray).toEqual(sortedArray);
  });
});
