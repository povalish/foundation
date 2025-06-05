/**
 * Selection Sort
 *
 * Complexity: O(N^2)
 * AVG - O(N^2 / 2)
 * BEST - O(N^2 / 2)
 * WORST - O(N^2 / 2)
 *
 * Description:
 * Look for the lowest element and swap at the start of the array.
 *
 * #sort
 */

export function selectionSort(array: number[]): void {
  let sortIndex = 0;

  while (sortIndex !== array.length - 1) {
    let minElementIndex = sortIndex;

    for (let i = sortIndex; i < array.length; i++) {
      if (array[i] < array[minElementIndex]) {
        minElementIndex = i;
      }
    }

    const saved = array[sortIndex];
    array[sortIndex] = array[minElementIndex];
    array[minElementIndex] = saved;

    sortIndex += 1;
  }
}
