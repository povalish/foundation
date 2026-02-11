/**
 * Replace Elements in an Array
 * https://leetcode.com/problems/replace-elements-in-an-array/description/
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

// function arrayChange(nums: number[], operations: number[][]): number[] {
//   const map = new Map<number, number>();

//   // Build map
//   operations.forEach((op) => {
//     map.set(op[0], op[1]);
//   });

//   const array: number[] = [...nums];
//   let index = 0;

//   while (map.size !== 0) {
//     const saved = array[index];

//     if (map.has(saved)) {
//       array[index] = map.get(saved)!;
//       map.delete(saved);
//     }

//     if (index === array.length - 1) index = 0;
//     else index += 1;
//   }

//   return array;
// }

function arrayChange(nums: number[], operations: number[][]): number[] {
  const numsCopy = [...nums];
  const map = new Map<number, number>();

  nums.forEach((num, index) => {
    map.set(num, index);
  });

  operations.forEach((operation) => {
    const index = map.get(operation[0]);

    if (index !== undefined) {
      numsCopy[index] = operation[1];
      map.set(operation[1], index);
    }
  });

  return numsCopy;
}

//
//

describe('Replace Elements in an Array', () => {
  test('basic cases', () => {
    let nums = [1, 2, 4, 6];
    let operations = [
      [1, 3],
      [4, 7],
      [6, 1],
    ];
    expect(arrayChange(nums, operations)).toEqual([3, 2, 7, 1]);

    nums = [1, 2];
    operations = [
      [1, 3],
      [2, 1],
      [3, 2],
    ];
    expect(arrayChange(nums, operations)).toEqual([2, 1]);
  });
});
