/**
 * Maximum Score After Splitting a String
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/?envType=problem-list-v2&envId=prefix-sum
 */

function maxScore(s: string): number {
  const symbols = s.split('');
  let maxSum = 0;

  const leftZeros: number[] = [];
  let sumOfZeros = 0;
  for (const symbol of symbols) {
    if (symbol === '0') sumOfZeros++;
    leftZeros.push(sumOfZeros);
  }

  let rightOnes = 0;
  for (let i = symbols.length - 1; i > 0; i--) {
    const symbol = symbols[i];

    if (symbol === '1') rightOnes++;
    const zeros = leftZeros[i];

    maxSum = Math.max(maxSum, rightOnes + zeros);
  }

  return maxSum;
}

//

// maxScore('1111');

describe('Maximum Score After Splitting a String', () => {
  it('should pass basic cases', () => {
    expect(maxScore('011101')).toEqual(5);
    expect(maxScore('00111')).toEqual(5);
    expect(maxScore('1111')).toEqual(3);
  });
});
