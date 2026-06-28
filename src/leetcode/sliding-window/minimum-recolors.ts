/**
 * Minimum Recolors to Get K Consecutive Black Blocks
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/?envType=problem-list-v2&envId=sliding-window
 */

function minimumRecolors(blocks: string, k: number): number {
  let minWhiteRecolors = 0;
  let whiteCounter = 0;

  let pLeft = 0;
  let pRight = 0;

  // Build white window
  //

  while (pRight < k) {
    if (blocks[pRight] === 'W') whiteCounter++;
    pRight++;
  }

  minWhiteRecolors = whiteCounter;

  // Move window
  //

  while (pRight < blocks.length) {
    if (blocks[pRight] === 'W') whiteCounter++;
    if (blocks[pLeft] === 'W') whiteCounter--;

    minWhiteRecolors = Math.min(minWhiteRecolors, whiteCounter);

    pLeft++;
    pRight++;
  }

  return minWhiteRecolors;
}

//

// minimumRecolors('WBBWWBBWBW', 7);

describe('Minimum Recolors to Get K Consecutive Black Blocks', () => {
  it('should pass basic cases', () => {
    expect(minimumRecolors('WBBWWBBWBW', 7)).toEqual(3);
    expect(minimumRecolors('WBWBBBW', 2)).toEqual(0);
  });
});

/**
 * whiteCounter - 3
 * W - [B - B - W - W - B - B - W] - B - W
 *
 *
 */
