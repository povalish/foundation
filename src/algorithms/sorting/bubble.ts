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
  let operations = 0;

  for (let i = 0; i <= lastSortedIndex; i++) {
    for (let j = 0; j < lastSortedIndex - 1; j++) {
      if (array[j] > array[j + 1]) {
        operations += 1;
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }

    lastSortedIndex -= 1;
  }

  console.log(`Operations - ${operations}`);

  return array;
}

export function bubbleSortV2(array: number[]): number[] {
  let lastSortedIndex = array.length - 1;
  let isArraySorted = false;
  let operations = 0;

  while (!isArraySorted) {
    isArraySorted = true;

    for (let i = 0; i <= lastSortedIndex; i++) {
      if (array[i] > array[i + 1]) {
        isArraySorted = false;
        operations += 1;

        // swap
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
      }
    }

    lastSortedIndex -= 1;
  }

  console.log(`Operations - ${operations}`);

  return array;
}
