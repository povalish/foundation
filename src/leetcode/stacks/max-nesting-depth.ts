/**
 * Given a valid parentheses string s, return the nesting depth of s.
 * The nesting depth is the maximum number of nested parentheses.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #stacks #strings
 */

function maxDepth(s: string): number {
  let parenthese = 0;
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      parenthese += 1;
    } else if (s[i] === ')') {
      if (parenthese > depth) {
        depth = parenthese;
      }

      parenthese -= 1;
    }
  }

  return depth;
}

//
//

describe('maximum nesting depth of the parentheses', () => {
  test('should return 3', () => {
    const s = '(1+(2*3)+((8)/4))+1';
    const result = maxDepth(s);
    expect(result).toEqual(3);
  });

  test('should return 3', () => {
    const s = '(1)+((2))+(((3)))';
    const result = maxDepth(s);
    expect(result).toEqual(3);
  });

  test('should return 3', () => {
    const s = '()(())((()()))';
    const result = maxDepth(s);
    expect(result).toEqual(3);
  });
});
