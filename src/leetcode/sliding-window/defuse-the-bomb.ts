/**
 * Defuse the Bomb
 * https://leetcode.com/problems/defuse-the-bomb/description/?envType=problem-list-v2&envId=sliding-window
 */

function decrypt(code: number[], k: number): number[] {
  if (k === 0) return code.map(() => 0);

  const decrypted: number[] = [];

  let pLeft = 0;
  let pRight = 0;

  for (let i = 0; i < code.length; i++) {
    if (k < 0) {
      pLeft = code.length - Math.abs(k) + i;
      pRight = pLeft + Math.abs(k) - 1;
    } else {
      pLeft = i + 1;
      pRight = pLeft + k - 1;
    }

    let sum = 0;

    while (pLeft <= pRight) {
      sum += code[pLeft % code.length];
      pLeft++;
    }

    decrypted.push(sum);
  }

  return decrypted;
}

//

// decrypt([2, 4, 9, 3], -2);

describe('Defuse the Bomb', () => {
  it('shpuld pass basic cases', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});

/**
 *
 * 5* - (7 - 1 - 4) - 5 - 7 - 1
 * [12, 10, 16. 13]
 *
 * 2 - 4* - 9 - (3 - 2) - 4 - 9 - 3
 * 0   1    2   3    4   5   6   7
 */
