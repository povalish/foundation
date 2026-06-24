/**
 * Best Time to Buy and Sell Stock
 * https://neetcode.io/problems/buy-and-sell-crypto/question?list=allNC
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxProfit(prices: number[]): number {
  let profit = 0;
  let minBuy = prices[0];

  for (const price of prices) {
    minBuy = Math.min(minBuy, price);
    profit = Math.max(profit, price - minBuy);
  }

  return profit;
}

// function maxProfitV2(prices: number[]): number {
//   let left = 0;
//   let right = 0;

//   let minBuy = prices[0];
//   let profit = 0;

//   while (right < prices.length) {
//     if (prices[right] < minBuy) {
//       minBuy = Math.min(prices[right], minBuy);
//       left = right;
//     }

//     profit = Math.max(profit, prices[right] - prices[left]);
//     right++;
//   }

//   return profit;
// }

//

// maxProfitV2([10, 8, 7, 5, 2]);

describe('Best Time to Buy and Sell Stock', () => {
  it('should pass basic cases', () => {
    expect(maxProfit([10, 1, 5, 6, 7, 1])).toEqual(6);
    expect(maxProfit([10, 8, 7, 5, 2])).toEqual(0);
  });
});

/**
 * start - 0
 * end - 0
 *
 * 10 - 1
 */
