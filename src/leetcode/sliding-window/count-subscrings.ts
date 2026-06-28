/**
 * Count Substrings That Satisfy K-Constraint I
 * https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/description/?envType=problem-list-v2&envId=sliding-window
 */

function countKConstraintSubstrings(s: string, k: number): number {
  let satisfies = 0;

  const wFreq = new Map<number, number>();
  wFreq.set(0, 0);
  wFreq.set(1, 0);

  const isValidWithZero = (): boolean => wFreq.get(0)! <= k;
  const isValidWithOne = (): boolean => wFreq.get(1)! <= k;

  let pLeft = 0;
  let pRight = 0;

  while (pRight < s.length) {
    const num = parseInt(s[pRight]);
    wFreq.set(num, wFreq.get(num)! + 1);

    const isValidZero = isValidWithZero();
    const isValidOne = isValidWithOne();

    if (!isValidZero && !isValidOne) {
      const leftNumn = parseInt(s[pLeft]);
      const prevCount = wFreq.get(leftNumn)!;
      wFreq.set(leftNumn, prevCount - 1);
      pLeft++;
    }

    satisfies += pRight - pLeft + 1;
    pRight++;
  }

  return satisfies;
}

//

// countKConstraintSubstrings('10101', 1);

describe('Count Substrings That Satisfy K-Constraint I', () => {
  it('should pass basic cases', () => {
    expect(countKConstraintSubstrings('10101', 1)).toEqual(12);
    expect(countKConstraintSubstrings('1010101', 2)).toEqual(25);
    expect(countKConstraintSubstrings('11111', 1)).toEqual(15);
  });
});

/**
 *
 * [1] - 0 - 1 - 0 - 1
 */
