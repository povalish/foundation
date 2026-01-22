/**
 * Maximum Value of K Coins From Piles
 * https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/description/
 *
 * Time Compexity: O()
 * Space Complexity: O()
 *
 */

function maxValueOfCoins(piles: number[][], k: number): number {
  if (k === 1) {
    let maxCoin = 0;

    piles.forEach((pile) => {
      pile.forEach((coin) => {
        if (coin > maxCoin) maxCoin = coin;
      });
    });

    return maxCoin;
  }

  // function searchPile(pile: number[], depth: number) {}

  // for (let i = 0; i < piles.length; i++) {
  //   for (let j = 0; j <= k && j < piles[i].length; j++) {}
  // }

  return 0;
}

//
//

describe.skip('Maximum Value of K Coins From Piles', () => {
  test('basic cases', () => {
    let piles = [
      [1, 100, 3],
      [7, 8, 9],
    ];
    let k = 2;
    expect(maxValueOfCoins(piles, k)).toEqual(101);

    piles = [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]];
    k = 7;
    expect(maxValueOfCoins(piles, k)).toEqual(706);

    piles = [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]];
    k = 1;
    expect(maxValueOfCoins(piles, k)).toEqual(700);
  });
});
