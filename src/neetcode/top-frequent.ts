function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const topK: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // Build freq of nums
  for (const num of nums) {
    const prev = freq.get(num) ?? 0;
    freq.set(num, prev + 1);
  }

  // Build freq by groups
  for (const entry of freq.entries()) {
    const [value, count] = entry;
    topK[count].push(value);
  }

  const result: number[] = [];
  topK.reverse();

  for (const topKList of topK) {
    if (result.length >= k) break;
    if (topKList.length === 0) continue;
    for (const element of topKList) {
      if (result.length >= k) break;
      result.push(element);
    }
  }

  return result;
}

//

topKFrequent([1, 2, 2, 3, 3, 3], 2);

describe('Top K Frequent Elements', () => {
  it('should pass basic cases', () => {
    expect(topKFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2]);
    expect(topKFrequent([7, 7], 1)).toEqual([7]);
  });
});

/**
 * [3, 3, 1, 1, 1, 2]
 * [1, 3, 0]
 * { 3:2, 1:2 }
 * 3 - 3 - 1 - 1
 */
