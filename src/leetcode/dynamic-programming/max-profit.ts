/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #dynamic
 */

const cache = {
  min: 0,
  profit: 0,
};

function recursion(prices: number[]): number {
  if (prices.length === 1) return 0;
  if (prices.length === 2) {
    cache.min = Math.min(prices[0], prices[1]);
    cache.profit = prices[0] < prices[1] ? prices[1] - prices[0] : 0;
    return cache.profit;
  }

  recursion(prices.slice(0, prices.length - 1));
  const last = prices[prices.length - 1];

  if (last - cache.min > cache.profit) {
    cache.profit = last - cache.min;
  }

  if (last < cache.min) {
    cache.min = last;
  }

  return cache.profit;
}

function loop(prices: number[]): number {
  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
}

//
//

describe('Best Time to Buy and Sell Stock', () => {
  test('recursion', () => {
    expect(recursion([2, 4, 1])).toEqual(2);
    expect(recursion([1, 3, 4])).toEqual(3);
    expect(recursion([7, 4, 5, 3, 1, 6])).toEqual(5);
    expect(recursion([7, 6, 4, 3, 1])).toEqual(0);
    expect(recursion([1])).toEqual(0);
    expect(recursion([1, 1])).toEqual(0);
    expect(recursion([2, 1])).toEqual(0);
    expect(recursion([1, 3])).toEqual(2);
    expect(recursion([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
  });

  test('loop', () => {
    expect(loop([2, 4, 1])).toEqual(2);
    expect(loop([1, 3, 4])).toEqual(3);
    expect(loop([7, 4, 5, 3, 1, 6])).toEqual(5);
    expect(loop([7, 6, 4, 3, 1])).toEqual(0);
    expect(loop([1])).toEqual(0);
    expect(loop([1, 1])).toEqual(0);
    expect(loop([2, 1])).toEqual(0);
    expect(loop([1, 3])).toEqual(2);
    expect(loop([2, 1, 2, 1, 0, 1, 2])).toEqual(2);
  });
});
