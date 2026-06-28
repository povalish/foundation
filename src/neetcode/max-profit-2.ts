/**
 * Best Time to Buy and Sell Stock II (?)
 * https://neetcode.io/problems/best-time-to-buy-and-sell-stock-ii/question?list=neetcode250
 */

function maxProfit(prices: number[]): number {
  let nextBuy = 0;
  let nextSell = 0;

  let currBuy = 0;
  let currSell = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    const price = prices[i];

    currBuy = Math.max(nextBuy, -price + nextSell);
    currSell = Math.max(nextSell, price + nextBuy);

    nextBuy = currBuy;
    nextSell = currSell;
  }

  return currBuy;
}

//

// maxProfit([7, 1, 5, 3, 6, 4]);

describe('Best Time to Buy and Sell Stock II', () => {
  it('should pass basic cases', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  });
});

/**
 * 7 - 1 - 5 - 3 - 6 - 4
 */
