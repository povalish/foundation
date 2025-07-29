/**
 * Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * #dynamic
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function recursion(cost: number[]): number {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  cost.push(0);

  for (let i = 2; i < cost.length; i++) {
    const min = Math.min(cost[i - 1], cost[i - 2]);
    cost[i] = min + cost[i];
  }

  return cost[cost.length - 1];
}

//
//

describe('Min Cost Climbing Stairs', () => {
  test('should pass basic tests', () => {
    const cost = [10, 15, 20];
    expect(recursion(cost)).toEqual(15);
  });

  test('should pass basic tests', () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    expect(recursion(cost)).toEqual(6);
  });

  test('should pass advanced tests', () => {
    const cost = [0, 0, 0, 0];
    expect(recursion(cost)).toEqual(0);
  });

  test('should pass advanced tests', () => {
    const cost = [0, 0, 0, 1];
    expect(recursion(cost)).toEqual(0);
  });
});
