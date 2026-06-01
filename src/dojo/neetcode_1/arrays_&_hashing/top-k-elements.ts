/**
 * Top K Frequent Elements
 * https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function topKFrequent(nums: number[], k: number): number[] {
  let maxFreq = 0;
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(num) ?? 1);
  }

  const combinedFreq: number[][] = Array.from({ length: maxFreq + 1 }, () => []);
  freq.forEach((v, k) => {
    combinedFreq[v].push(k);
  });

  const result: number[] = [];
  for (let i = combinedFreq.length - 1; i >= 0; i--) {
    for (let j = 0; j < combinedFreq[i].length; j++) {
      if (result.length >= k) break;
      result.push(combinedFreq[i][j]);
    }
  }

  return result;
}

//
//

describe('Top K Frequent Elements', () => {
  it('should pass cases', () => {
    expect(topKFrequent([1, 2, 2, 2, 3, 3, 3], 2)).toEqual([2, 3]);
    expect(topKFrequent([7, 7], 1)).toEqual([7]);
  });
});
