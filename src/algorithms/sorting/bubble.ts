/**
 * Bubble Sort
 *
 * Complexity: O(N^2)
 * AVG - O(N^2)
 * BEST -O(N)
 * WORST - O(N^2)
 *
 * Description
 * The task is pushing the largest element to the end of the list.
 * - compare the elements with each other and swap them.
 * - along the way, saving the index of the last sorted part.
 *
 * #sort
 */

export function bubbleSort(array: number[]): number[] {
  let lastSortedIndex = array.length - 1;
  let isSorted = false;

  for (let i = 0; i < array.length; i++) {
    isSorted = true;

    for (let j = 0; j < lastSortedIndex; j++) {
      if (array[j] > array[j + 1]) {
        isSorted = false;
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }

    if (isSorted) {
      return array;
    }

    lastSortedIndex -= 1;
  }

  return array;
}

export function bubbleSortV2(array: number[]): number[] {
  let lastSortedIndex = array.length - 1;
  let isArraySorted = false;

  while (!isArraySorted) {
    isArraySorted = true;

    for (let i = 0; i <= lastSortedIndex; i++) {
      if (array[i] > array[i + 1]) {
        isArraySorted = false;

        // swap
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }

    lastSortedIndex -= 1;
  }

  return array;
}
