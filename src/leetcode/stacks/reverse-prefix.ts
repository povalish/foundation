/**
 * Given a 0-indexed string word and a character ch, reverse the segment of word
 * that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
 * If the character ch does not exist in word, do nothing.
 *
 * For example, if word = "abcdefd" and ch = "d", then you should reverse
 * the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
 *
 * Return the resulting string.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks
 */

function reversePrefix(word: string, ch: string): string {
  const stack: string[] = [];
  let result: string = '';
  let targetChIndex = -1;

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);

    if (word[i] === ch) {
      targetChIndex = i;
      break;
    }
  }

  if (targetChIndex === -1) {
    return word;
  }

  while (stack[stack.length - 1]) {
    result += stack.pop();
  }

  for (let i = targetChIndex + 1; i < word.length; i++) {
    result += word[i];
  }

  return result;
}

//
//

describe('reverse prefix of word', () => {
  test('should return dcbaefd', () => {
    const word = 'abcdefd';
    const ch = 'd';
    const result = reversePrefix(word, ch);
    expect(result).toEqual('dcbaefd');
  });

  test('should return zxyxxe', () => {
    const word = 'xyxzxe';
    const ch = 'z';
    const result = reversePrefix(word, ch);
    expect(result).toEqual('zxyxxe');
  });

  test('should return abcd', () => {
    const word = 'abcd';
    const ch = 'z';
    const result = reversePrefix(word, ch);
    expect(result).toEqual('abcd');
  });
});
