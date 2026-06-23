/**
 * Best Time to Buy and Sell Stock
 * https://neetcode.io/problems/buy-and-sell-crypto/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxProfit(prices: number[]): number {
  let start = 0;
  let end = 0;
  let max = 0;

  while (end < prices.length) {
    if (prices[end] < prices[start]) start = end;
    else max = Math.max(prices[end] - prices[start], max);

    end++;
  }

  return max;
}

function maxProfitV2(prices: number[]): number {
  let profit = 0;
  let minBuy = prices[0];

  for (const price of prices) {
    profit = Math.max(profit, price - minBuy);
    minBuy = Math.min(price, minBuy);
  }

  return profit;
}

//

// maxProfit([7, 1, 5, 3, 6, 4]);

describe('Best Time to Buy and Sell Stock', () => {
  it('should pass basic cases', () => {
    expect(maxProfit([10, 1, 5, 6, 7, 1])).toEqual(6);
    expect(maxProfit([10, 8, 7, 5, 2])).toEqual(0);
    expect(maxProfit([10, 1, 5, 6, 7, 1, 100])).toEqual(99);
    expect(maxProfitV2([7, 1, 5, 3, 6, 4])).toEqual(5);
  });
});

/**
 * [7, 1, 5, 3, 6, 4]
 *
 * max = 0
 * minBey = 1
 *
 * [7, 1, 5, 3, 6, 4]
 * []
 */
