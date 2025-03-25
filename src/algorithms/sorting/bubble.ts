/**
 * Bubble Sort.
 * Complexity: O(N^2)
 *
 * Description
 * The task is pushing the largest element to the end of the list.
 * - compare the elements with each other and swap them.
 * - along the way, saving the index of the last sorted part.
 */

export function bubbleSort(array: number[]): number[] {
  let lastSortedIndex = array.length;

  for (let i = 0; i <= lastSortedIndex; i++) {
    for (let j = 0; j < lastSortedIndex - 1; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }

    lastSortedIndex -= 1;
  }

  return array;
}
