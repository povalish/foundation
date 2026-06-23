/**
 * Remove Duplicates From Sorted Array
 * https://neetcode.io/problems/remove-duplicates-from-sorted-array/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicates(nums: number[]): number {
  let leftPointer = 1;
  let rightPointer = 1;

  while (rightPointer < nums.length) {
    if (nums[rightPointer] !== nums[rightPointer - 1]) {
      nums[leftPointer] = nums[rightPointer];
      leftPointer++;
    }

    rightPointer++;
  }

  return leftPointer;
}

//

describe('Remove Duplicates From Sorted Array', () => {
  it('should pass basic tests', () => {
    expect(removeDuplicates([1, 1, 2, 3, 4])).toEqual(4);
    expect(removeDuplicates([2, 10, 10, 30, 30, 30])).toEqual(3);
  });
});
