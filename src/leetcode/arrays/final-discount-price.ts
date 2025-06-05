/**
 * You are given an integer array prices where prices[i]
 * is the price of the ith item in a shop.
 *
 * There is a special discount for items in the shop.
 * If you buy the ith item, then you will receive a discount equivalent
 * to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i].
 * Otherwise, you will not receive any discount at all.
 *
 * Return an integer array answer where answer[i] is the final price you will
 * pay for the ith item of the shop, considering the special discount.
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(N)
 */

function finalPrices(prices: number[]): number[] {
  const result: number[] = [];

  prices.forEach((price, index) => {
    let discount = 0;
    for (let i = index + 1; i < prices.length; i++) {
      if (prices[i] <= price) {
        discount = prices[i];
        break;
      }
    }

    result.push(price - discount);
  });

  return result;
}

//
//

describe('final price with a spacial discount in a shop', () => {
  test('should return `[4,2,4,2,3]`', () => {
    const prices = [8, 4, 6, 2, 3];
    const result = finalPrices(prices);
    expect(result).toEqual([4, 2, 4, 2, 3]);
  });

  test('should return `[1, 2, 3, 4, 5]`', () => {
    const prices = [1, 2, 3, 4, 5];
    const result = finalPrices(prices);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return `[9, 0, 1, 6]`', () => {
    const prices = [10, 1, 1, 6];
    const result = finalPrices(prices);
    expect(result).toEqual([9, 0, 1, 6]);
  });
});
