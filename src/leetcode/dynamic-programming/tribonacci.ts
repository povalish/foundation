/**
 * N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Space Complexity: O(1)
 * Time Complexity: O(N)
 *
 * #dynamic
 */

function tribonacci(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  const last = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    const next = last[2] + last[1] + last[0];
    last.shift();
    last.push(next);
  }

  return last[2];
}

//
//

describe('N-th Tribonacci Number', () => {
  test('should pass simple cases', () => {
    expect(tribonacci(4)).toEqual(4);
    expect(tribonacci(25)).toEqual(1389537);
  });
});
