/**
 * Summary Ranges
 * https://leetcode.com/problems/summary-ranges/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [String(nums[0])];

  const result: string[] = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === end) {
      end = nums[i];
    } else {
      if (start === end) result.push(`${start}`);
      else result.push(`${start}->${end}`);

      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) result.push(`${start}`);
  else result.push(`${start}->${end}`);

  return result;
}

//
//

describe('Summary Ranges', () => {
  test('simple cases', () => {
    expect(summaryRanges([0, 1, 2, 4, 6, 7, 8])).toEqual(['0->2', '4', '6->8']);
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9']);
  });
});
