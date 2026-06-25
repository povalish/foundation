/**
 * Products of Array Except Self
 * https://neetcode.io/problems/products-of-array-discluding-self/question?list=neetcode150
 */

function productExceptSelf(nums: number[]): number[] {
  const forwardProducts: number[] = [];
  let forwardProduct = 1;
  for (const num of nums) {
    forwardProduct *= num;
    if (forwardProduct === 0) forwardProduct = Math.abs(forwardProduct);
    forwardProducts.push(forwardProduct);
  }

  const result: number[] = new Array(nums.length).fill(0);
  let backwardProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    if (i > 0) result[i] = forwardProducts[i - 1] * backwardProduct;
    else result[i] = backwardProduct;
    backwardProduct *= num;
  }

  return result;
}

//

// productExceptSelf([-1, 0, 1, 2, 3]);

describe('Products of Array Except Self', () => {
  it('should pass basic cases', () => {
    expect(productExceptSelf([1, 2, 4, 6])).toEqual([48, 24, 12, 8]);
    expect(productExceptSelf([-1, 0, 1, 2, 3])).toEqual([0, -6, 0, 0, 0]);
  });
});
