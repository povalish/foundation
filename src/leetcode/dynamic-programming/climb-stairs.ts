/**
 * Climbing Stairs.
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * https://leetcode.com/problems/climbing-stairs/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 *
 * #dynamic #recursion
 */

/**
 *  Used memo
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

const cache: Record<string, number> = {};

function climbStairsMemo(n: number): number {
  if (cache[n]) return cache[n];

  if (n <= 1) return 1;
  if (n === 2) return 2;

  cache[n] = climbStairsMemo(n - 1) + climbStairsMemo(n - 2);
  return cache[n];
}

/**
 *  Used bottom-up
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function climbStairsBottomUp(n: number): number {
  if (n <= 1) return 1;
  if (n === 2) return 2;

  let prevStep = 1;
  let currStep = 1;
  for (let i = 2; i <= n; i++) {
    const buffer = currStep;
    currStep = currStep + prevStep;
    prevStep = buffer;
  }

  return currStep;
}

//
//

describe('Climbing Stairs', () => {
  test('memo solution', () => {
    expect(climbStairsMemo(2)).toEqual(2);
    expect(climbStairsMemo(3)).toEqual(3);
    expect(climbStairsMemo(5)).toEqual(8);
  });

  test('bottom-up solution', () => {
    expect(climbStairsBottomUp(2)).toEqual(2);
    expect(climbStairsBottomUp(3)).toEqual(3);
    expect(climbStairsBottomUp(5)).toEqual(8);
  });
});
