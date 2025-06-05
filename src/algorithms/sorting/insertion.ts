/**
 * Insertion Sort
 *
 * Compexity: O(N^2)
 * AVG - O(N^2 / 2)
 * BEST - O(N - 1)
 * WORST - O(N^2)
 *
 * Description:
 * Take elements from 1st index and move element right one by one.
 * Basic operations: take, compare, move, insert.
 *
 * #sort
 */

export function insertionSort(array: number[]): void {
  let activeElement = array[1];

  const sortLeft = (compareIndex: number): void => {
    if (array[compareIndex] > activeElement) {
      array[compareIndex + 1] = array[compareIndex];
      sortLeft(compareIndex - 1);
    } else {
      array[compareIndex + 1] = activeElement;
    }
  };

  for (let i = 1; i < array.length; i++) {
    activeElement = array[i];
    sortLeft(i - 1);
  }
}
