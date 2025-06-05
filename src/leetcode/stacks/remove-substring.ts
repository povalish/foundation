/**
 * You are given a string s consisting only of uppercase English letters.
 *
 * You can apply some operations to this string where, in one operation, you can
 * remove any occurrence of one of the substrings "AB" or "CD" from s.
 *
 * Return the minimum possible length of the resulting string that you can obtain.
 *
 * Note that the string concatenates after removing the substring and could
 * produce new "AB" or "CD" substrings.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks #strings
 */

function minLength(s: string): number {
  const stack: string[] = [];

  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === 'A' && s[i] === 'B') {
      stack.pop();
    } else if (stack[stack.length - 1] === 'C' && s[i] === 'D') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
}

//
//

describe('minimum string lenght after removing substring', () => {
  test('should return 2', () => {
    const s = 'ABFCACDB';
    const result = minLength(s);
    expect(result).toEqual(2);
  });

  test('should return 5', () => {
    const s = 'ACBBD';
    const result = minLength(s);
    expect(result).toEqual(5);
  });
});
