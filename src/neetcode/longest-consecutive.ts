/**
 * Longest Consecutive Sequence
 * https://neetcode.io/problems/longest-consecutive-sequence/question?list=neetcode150
 */

function longestConsecutive(nums: number[]): number {
  const sequence = new Map<number, number>();
  let maxSequence = 0;

  for (const num of nums) {
    const actual = sequence.get(num);
    const plus1 = sequence.get(num + 1);
    const minus1 = sequence.get(num - 1);

    if (actual) maxSequence++;
    if (!actual && plus1) maxSequence++;
    if (!actual && minus1) maxSequence++;

    sequence.set(num, 1);
  }

  return maxSequence;
}

//

// longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]);

describe('Longest Consecutive Sequence', () => {
  it('should pass basic cases', () => {
    expect(longestConsecutive([2, 20, 4, 10, 3, 4, 5])).toEqual(4);
    expect(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])).toEqual(7);
  });
});
