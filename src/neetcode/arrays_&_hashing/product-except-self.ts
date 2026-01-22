/**
 * Products of Array Except Self
 * https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150
 *
 * Time Compexity: O(N)
 * Space Complexity: O(N)
 */

function productExceptSelf(nums: number[]): number[] {
  const cacheForward = new Map<number, number>();
  const result: number[] = Array.from({ length: nums.length }, () => 1);

  nums.reduce((curr, acc, index) => {
    cacheForward.set(index, curr);
    return curr * acc;
  }, 1);

  let accFromTheEnd = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const cache = cacheForward.get(i)!;

    result[i] = cache * accFromTheEnd;
    if (result[i] === 0) result[i] = 0;

    accFromTheEnd *= nums[i];
  }

  return result;
}

//
//

describe('Products of Array Except Self', () => {
  test('basic cases', () => {
    expect(productExceptSelf([2, 3, 4, 1, 10])).toEqual([120, 80, 60, 240, 24]);
    expect(productExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8]);
    expect(productExceptSelf([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0]);
  });
});
