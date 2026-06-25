/**
 * Remove Duplicates From Sorted Array
 * https://neetcode.io/problems/remove-duplicates-from-sorted-array/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicates(nums: number[]): number {
  let pointerFill = 0;
  let pointerSearch = 0;

  while (pointerSearch < nums.length) {
    if (nums[pointerFill] !== nums[pointerSearch]) {
      pointerFill++;
      nums[pointerFill] = nums[pointerSearch];
    }

    pointerSearch++;
  }

  return pointerFill + 1;
}

//

// removeDuplicates([2, 10, 10, 30, 30, 30]);

describe('Remove Duplicates From Sorted Array', () => {
  it('should pass basic tests', () => {
    expect(removeDuplicates([1, 1, 2, 3, 4])).toEqual(4);
    expect(removeDuplicates([2, 10, 10, 30, 30, 30])).toEqual(3);
  });
});

/**
 * p1 - 1
 * p2 - 2
 *
 * 1 - 2 - 3 - 4* - 4*
 */
