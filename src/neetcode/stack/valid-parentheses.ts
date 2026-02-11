/**
 * Valid Parentheses
 * https://neetcode.io/problems/validate-parentheses/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function isValid(s: string): boolean {
  const opened: Record<string, string> = { '(': ')', '[': ']', '{': '}' };
  const closed: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  const stack: string[] = [];

  for (const char of s) {
    if (opened[char]) {
      stack.push(char);
    }

    if (closed[char]) {
      const lastOpened = stack.pop();
      if (!lastOpened) return false;
      if (lastOpened !== closed[char]) return false;
    }
  }

  return stack.length === 0;
}

//
//

describe('Valid Parentheses', () => {
  it('should pass basic cases', () => {
    expect(isValid('[]')).toEqual(true);
    expect(isValid('([{}])')).toEqual(true);
    expect(isValid('[(])')).toEqual(false);
  });
});
