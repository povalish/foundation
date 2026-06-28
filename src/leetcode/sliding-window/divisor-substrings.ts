/**
 * Find the K-Beauty of a Number
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/description/?envType=problem-list-v2&envId=sliding-window
 */

function divisorSubstrings(num: number, k: number): number {
  const strOfNum = String(num);
  let divisors = 0;

  let pLeft = 0;
  let pRight = k;

  while (pRight <= strOfNum.length) {
    const divisorStr = strOfNum.slice(pLeft, pRight);
    const divisorNum = parseInt(divisorStr);
    if (num % divisorNum === 0) divisors++;

    pLeft++;
    pRight++;
  }

  return divisors;
}

//

// divisorSubstrings(240, 2);

describe('Find the K-Beauty of a Number', () => {
  it('should pass basic cases', () => {
    expect(divisorSubstrings(240, 2)).toEqual(2);
    expect(divisorSubstrings(430043, 2)).toEqual(2);
  });
});
