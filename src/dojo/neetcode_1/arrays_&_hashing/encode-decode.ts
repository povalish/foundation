/**
 * Encode and Decode Strings
 * https://neetcode.io/problems/string-encode-and-decode/question?list=neetcode150
 *
 * Time Complexity: O(n)
 * Space Complexity: O(m)
 */

function encode(strs: string[]): string {
  if (strs.length === 0) return '';

  let encoded = '';
  for (const str of strs) {
    encoded += '[' + str.length + ']' + str;
  }
  return encoded;
}

function decode(str: string): string[] {
  if (str.length === 0) return [];

  let isCountingChars = true;
  let countAsStr: string = '';
  let count: number = 0;

  let resultStr = '';
  const result: string[] = [];

  for (let i = 1; i < str.length; i++) {
    const isOpenBracket = str[i] === '[' && count === 0;
    const isCloseBracket = str[i] === ']' && count === 0;

    if (isOpenBracket) {
      countAsStr = '';
      count = 0;

      isCountingChars = true;

      result.push(resultStr);
      resultStr = '';

      continue;
    }

    if (isCloseBracket) {
      count = parseInt(countAsStr);
      isCountingChars = false;

      continue;
    }

    if (isCountingChars) {
      countAsStr += str[i];
    }

    if (!isCountingChars) {
      resultStr += str[i];
      count -= 1;
    }
  }

  result.push(resultStr);

  return result;
}

//

describe('Encode and Decode Strings', () => {
  it('should pass basic cases', () => {
    let source: string[] = ['He[[[[][[llo', 'World![[[][][][[]'];
    let encoded = encode(source);
    let decoded = decode(encoded);
    expect(decoded).toEqual(source);

    source = [''];
    encoded = encode(source);
    decoded = decode(encoded);
    expect(decoded).toEqual(source);

    source = ['', ''];
    encoded = encode(source);
    decoded = decode(encoded);
    expect(decoded).toEqual(source);
  });
});
