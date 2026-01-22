/**
 * Complexity: O(n)
 */
function lengthOfLastWord(s: string): number {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (length > 0 && s[i] === ' ') return length;
    if (s[i] !== ' ') length += 1;
  }

  return length;
}

//
//

describe('Length of Last Word', () => {
  test('base cases', () => {
    let str = 'Hello World';
    expect(lengthOfLastWord(str)).toEqual(5);

    str = '   fly me   to   the moon  ';
    expect(lengthOfLastWord(str)).toEqual(4);

    str = 'luffy is still joyboy';
    expect(lengthOfLastWord(str)).toEqual(6);
  });
});
