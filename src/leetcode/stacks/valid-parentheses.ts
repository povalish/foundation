import { Stack } from 'data-structures/Stack';

function isValid(s: string): boolean {
  const open: Record<string, string> = { '(': ')', '[': ']', '{': '}' };
  const close: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  const stack = new Stack<string>();

  for (let i = 0; i < s.length; i++) {
    if (open[s[i]]) {
      stack.push(s[i]);
    }

    if (close[s[i]]) {
      const last = stack.pop();

      if (last !== close[s[i]]) {
        return false;
      }
    }
  }

  return stack.size === 0;
}

//
//

describe('is valid parentheses', () => {
  test('should return `true`', () => {
    const s = '()';
    const result = isValid(s);
    expect(result).toEqual(true);
  });

  test('should return `true`', () => {
    const s = '()[]{}';
    const result = isValid(s);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const s = '(]';
    const result = isValid(s);
    expect(result).toEqual(false);
  });

  test('should return `true`', () => {
    const s = '([])';
    const result = isValid(s);
    expect(result).toEqual(true);
  });
});
