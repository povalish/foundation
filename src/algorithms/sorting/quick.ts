/**
 * Quick Sort
 *
 * Complexity: O(N * logN)
 * Best: O(n)
 * Worst: O(N^2)
 *
 */

export function quick(array: number[]): number[] {
  if (array.length === 0) return [];
  if (array.length === 1) return array;
  if (array.length === 2) return [Math.min(...array), Math.max(...array)];

  const lower: number[] = [];
  const higher: number[] = [];

  const pivotIndex = Math.round(Math.random() * (array.length - 1));
  const pivot = array[pivotIndex];

  array.forEach((element) => {
    if (element < pivot) lower.push(element);
    else higher.push(element);
  });

  return [...quick(lower), ...quick(higher)];
}
