/**
 * Top K Frequent Elements
 * https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function topKFrequent(nums: number[], k: number): number[] {
  const frequency = new Map<number, number>();
  const bucket = Array.from({ length: nums.length + 1 }, () => []) as number[][];

  // 1 - create frequency map O(n)
  nums.forEach((num) => {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  });

  // 2 - create buckets with elements
  // index - frequency
  // element - number
  for (const [num, freq] of frequency.entries()) {
    bucket[freq].push(num);
  }

  // 3 - collect elements from the end
  const result: number[] = [];

  for (let i = bucket.length - 1; i > 0; i--) {
    for (const element of bucket[i]) {
      result.push(element);
      if (result.length === k) return result;
    }
  }

  return result;
}

//
//

describe('Top K Frequent Elements', () => {
  test('basic cases', () => {
    expect(topKFrequent([1, 2, 2, 3, 3, 3, 3], 2)).toEqual([3, 2]);
    // expect(topKFrequent([7, 7], 1)).toEqual([7]);
  });
});
