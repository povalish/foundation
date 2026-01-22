/**
 * Find X-Sum of All K-Long Subarrays I
 * https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

// массив nums из n елементов
// число k
// число x
//
/**
 * массив nums из n елементов
 * число K
 * число Х
 *
 * сумма считается:
 * - число вхождений всех элементов (уникальное кол-воэлементов)
 * - х - кол-во уникальных элементов
 * - если в массиве уникальных элементов меньше, чем Х, то вернуть сумму массива
 */

function findXSum(nums: number[], k: number, x: number): number[] {
  const answer: number[] = Array.from({ length: nums.length - k + 1 });

  const sum = (subarray: number[]): number => {
    const freq = new Map<number, number>();

    subarray.forEach((element) => {
      freq.set(element, (freq.get(element) || 0) + 1);
    });

    if (freq.size < x) return subarray.reduce((prev, curr) => prev + curr, 0);

    const sortedFreq = Array.from(freq).sort((entryA, entryB) => {
      if (entryB[1] === entryA[1]) return entryB[0] - entryA[0];
      return entryB[1] - entryA[1];
    });
    const sum = sortedFreq.slice(0, x).reduce((acc, item) => acc + item[0] * item[1], 0);
    return sum;
  };

  for (let i = 0; i < answer.length; i++) {
    answer[i] = sum(nums.slice(i, i + k));
  }

  return answer;
}

describe('Find X-Sum of All K-Long Subarrays I', () => {
  test('base cases', () => {
    let nums = [1, 1, 2, 2, 3, 4, 2, 3];
    let k = 6;
    let x = 2;
    expect(findXSum(nums, k, x)).toEqual([6, 10, 12]);

    nums = [3, 8, 7, 8, 7, 5];
    k = 2;
    x = 2;
    expect(findXSum(nums, k, x)).toEqual([11, 15, 15, 15, 12]);
  });
});
