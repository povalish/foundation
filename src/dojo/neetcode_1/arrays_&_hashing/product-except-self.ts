/**
 * Products of Array Except Self
 * https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function productExceptSelf(nums: number[]): number[] {
  const productByindex = new Map<number, number>();
  let currentProduct = 1;

  nums.forEach((num, idx) => {
    currentProduct *= num;
    productByindex.set(idx, currentProduct);
  });

  currentProduct = 1;
  const result: number[] = new Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const productFromTheBeggining = productByindex.get(i - 1) ?? 1;
    result[i] = productFromTheBeggining * currentProduct + 0;
    currentProduct *= nums[i];
  }

  console.log(result);

  return result;
}

//

describe('Products of Array Except Self', () => {
  it('should pass basic cases', () => {
    expect(productExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8]);
    expect(productExceptSelf([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0]);
  });
});
