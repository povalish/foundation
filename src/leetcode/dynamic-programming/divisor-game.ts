/**
 * Divisor Game
 * https://leetcode.com/problems/divisor-game/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function divisorGame(n: number): boolean {
  return n % 2 === 0;
}

//
//

describe('Divisor Game', () => {
  test('should pass simple cases', () => {
    expect(divisorGame(1)).toEqual(false);
    expect(divisorGame(2)).toEqual(true);
    expect(divisorGame(3)).toEqual(false);
    expect(divisorGame(4)).toEqual(true);
    expect(divisorGame(6)).toEqual(true);
    expect(divisorGame(7)).toEqual(false);
    expect(divisorGame(8)).toEqual(true);
  });
});
