/**
 * Minimum Recolors to Get K Consecutive Black Blocks
 * https://neetcode.io/problems/minimum-recolors-to-get-k-consecutive-black-blocks/question?list=allNC
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function minimumRecolors(blocks: string, k: number): number {
  let minRecolors = blocks.length;
  let currBlacks = 0;

  let start = 0;
  let end = 0;

  while (end < blocks.length) {
    // build window and count B's
    if (end < k) {
      if (blocks[end] === 'B') currBlacks++;
      minRecolors = currBlacks;
      end++;
      continue;
    }

    // Move window
    if (blocks[start] === 'B') currBlacks--;
    if (blocks[end] === 'B') currBlacks++;

    minRecolors = Math.min(minRecolors, currBlacks);

    end++;
    start++;
  }

  return minRecolors;
}

//

// WB[BWWBBWB]W
// minimumRecolors('WBBWWBBWBW', 7);

describe('Minimum Recolors to Get K Consecutive Black Blocks', () => {
  it('should pass basic cases', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toEqual(3);
    expect(minimumRecolors('BWWWBB', 6)).toEqual(3);
  });
});
