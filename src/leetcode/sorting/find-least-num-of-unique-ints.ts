/**
 * https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/
 *
 * Time Complexity: O(n*logn)
 * Space Complexity: O(n)
 */

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  if (arr.length === k) return 0;

  const unsortedMap: Record<number, number> = {};

  // Build map
  arr.forEach((item) => {
    unsortedMap[item] = (unsortedMap[item] || 0) + 1;
  });

  if (k === 0) return Object.keys(unsortedMap).length;

  // Sort map
  const sortedEntries = Object.entries(unsortedMap).toSorted((a, b) => a[1] - b[1]);

  // Counting
  let count = k;
  while (count > 0) {
    count -= sortedEntries[0][1];
    if (count >= 0) sortedEntries.shift();
  }

  return sortedEntries.length;
}

//
//

describe(' Least Number of Unique Integers after K Removals', () => {
  test('basic cases', () => {
    let arr = [5, 5, 4];
    let k = 1;
    expect(findLeastNumOfUniqueInts(arr, k)).toEqual(1);

    arr = [4, 3, 1, 1, 3, 3, 2];
    k = 3;
    expect(findLeastNumOfUniqueInts(arr, k)).toEqual(2);
  });
});
