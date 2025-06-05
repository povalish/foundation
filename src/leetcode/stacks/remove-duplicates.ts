/**
 * You are given a string s consisting of lowercase English letters.
 * A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 *
 * We repeatedly make duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made.
 * It can be proven that the answer is unique.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const lastChar = stack[stack.length - 1];

    if (!lastChar) {
      stack.push(s[i]);
    } else if (lastChar === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

//
//

describe('remove all adjacent duplicates in string', () => {
  test('should return `ca`', () => {
    const s = 'abbaca';
    const result = removeDuplicates(s);
    expect(result).toEqual('ca');
  });

  test('should return `ay`', () => {
    const s = 'azxxzy';
    const result = removeDuplicates(s);
    expect(result).toEqual('ay');
  });
});
