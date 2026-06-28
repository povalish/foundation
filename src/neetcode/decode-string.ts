/**
 * Decode String
 * https://neetcode.io/problems/decode-string/question
 */

function decodeString(s: string): string {
  const stringStack: string[] = [];
  const countStack: number[] = [];

  let result = '';
  let size = 0;

  for (const c of s) {
    if (!isNaN(c as unknown as number)) {
      size = size * 10 + parseInt(c, 10);
    } else if (c === '[') {
      stringStack.push(result);
      countStack.push(size);
      result = '';
      size = 0;
    } else if (c === ']') {
      const saved = result;
      result = stringStack.pop()!;
      const count = countStack.pop()!;
      result += saved.repeat(count);
    } else {
      result += c;
    }
  }

  return result;
}

//

// decodeString('2[a3[b]]c');

describe('Decode String', () => {
  it('should pass basic cases', () => {
    expect(decodeString('2[a3[b]]c')).toEqual('abbbabbbc');
    expect(decodeString('axb3[z]4[c]')).toEqual('axbzzzcccc');
    expect(decodeString('ab2[c]3[d]1[x]')).toEqual('abccdddx');
  });
});
