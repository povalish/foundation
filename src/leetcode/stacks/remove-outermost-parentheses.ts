/**
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B
 * are valid parentheses strings, and + represents string concatenation.
 *
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 *
 * -  A valid parentheses string s is primitive if it is nonempty, and there does not
 *    exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
 *
 * -  Given a valid parentheses string s, consider its primitive decomposition:
 *    s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 *
 * Return s after removing the outermost parentheses of every primitive string
 * in the primitive decomposition of s.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #stacks
 */

function removeOuterParentheses(s: string): string {
  const stack: string[] = [];
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && stack.length === 0) {
      // pass
      stack.push('(');
      continue;
    }

    if (s[i] === ')' && stack.length === 1) {
      stack.pop();
      continue;
    }

    if (s[i] === '(') {
      stack.push('(');
    }

    if (s[i] === ')') {
      stack.pop();
    }

    result += s[i];
  }

  return result;
}

//
//

describe('remove outermost parentheses', () => {
  test('should return `()()()`', () => {
    // const s = '( ()() ) ( () )';
    const s = '(()())(())';
    const result = removeOuterParentheses(s);
    expect(result).toEqual('()()()');
  });

  test('should return `()()()()(())`', () => {
    // const s = '( () () ) ( () ) ( () ( () ) )';
    const s = '(()())(())(()(()))';
    const result = removeOuterParentheses(s);
    expect(result).toEqual('()()()()(())');
  });

  test('should return `()()`', () => {
    const s = '()()';
    const result = removeOuterParentheses(s);
    expect(result).toEqual('');
  });
});
