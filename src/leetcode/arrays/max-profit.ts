/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  let profit = 0;
  let minPrice = prices[0];

  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    if (price > minPrice) {
      profit = Math.max(profit, price - minPrice);
    }
  }

  return profit;
}

//
//

describe('Best Time to Buy and Sell Stock', () => {
  test('simple cases', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(maxProfit([7, 3, 5, 1, 6, 4])).toEqual(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
