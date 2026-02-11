/**
 * Longest Consecutive Sequence
 * https://neetcode.io/problems/longest-consecutive-sequence/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  const sequence = new Map<number, number | null>();
  let resultSeq = 0;

  nums.forEach((num) => {
    if (sequence.has(num - 1)) sequence.set(num - 1, num);
    if (sequence.has(num + 1)) sequence.set(num, num + 1);
    if (!sequence.has(num)) sequence.set(num, null);
  });

  for (const num of nums) {
    if (!sequence.has(num - 1)) {
      let maxSeq = 1;
      let next = sequence.get(num);

      while (next !== null && next !== undefined) {
        maxSeq += 1;
        next = sequence.get(next);
        sequence.delete(num);
      }

      resultSeq = Math.max(maxSeq, resultSeq);
    }
  }

  return resultSeq;
}

//
//

describe('Longest Consecutive Sequence', () => {
  test('basic cases', () => {
    expect(longestConsecutive([12, 1, 10, 2, 11, 13, 3])).toEqual(4);
    expect(longestConsecutive([2, 20, 4, 10, 3, 4, 5])).toEqual(4);
    expect(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])).toEqual(7);
    expect(longestConsecutive([0, -1])).toEqual(2);
  });
});
