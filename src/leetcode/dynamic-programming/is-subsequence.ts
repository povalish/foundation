/**
 * Is Subsequence
 * https://leetcode.com/problems/is-subsequence/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * #dynamic
 *
 * Time Complexity: O(N)
 * Space Complexity: O(K) - k === s.lenght
 */

function isSubsequence(s: string, t: string): boolean {
  const stack = s.split('');

  for (let i = t.length - 1; i >= 0; i--) {
    if (t[i] === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return stack.length === 0;
}

//
//

describe('Is Subsequence', () => {
  test('shpuld pass basic tests', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).toEqual(true);
  });
});
