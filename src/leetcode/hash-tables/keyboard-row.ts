/**
 * Given an array of strings words, return the words that can be
 * typed using letters of the alphabet on only one row of
 * American keyboard like the image below.
 *
 * Note that the strings are case-insensitive, both lowercased and
 * uppercased of the same letter are treated as if they are at the same row.
 *
 * In the American keyboard:
 * - the first row consists of the characters "qwertyuiop",
 * - the second row consists of the characters "asdfghjkl", and
 * - the third row consists of the characters "zxcvbnm".
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1)
 */

function prepare(): Map<string, number> {
  const keyboardMap = new Map<string, number>();

  const chars1st = 'qwertyuiop';
  const chars2nd = 'asdfghjkl';
  const chars3rd = 'zxcvbnm';

  for (let i = 0; i < chars1st.length; i++) {
    keyboardMap.set(chars1st[i], 1);
  }

  for (let i = 0; i < chars2nd.length; i++) {
    keyboardMap.set(chars2nd[i], 2);
  }

  for (let i = 0; i < chars3rd.length; i++) {
    keyboardMap.set(chars3rd[i], 3);
  }

  return keyboardMap;
}

function findWords(words: string[]): string[] {
  const keyboardMap = prepare();
  const result: string[] = [];

  words.forEach((word) => {
    const row = keyboardMap.get(word[0].toLowerCase())!;
    let isSameRow = true;

    for (let i = 1; i < word.length; i++) {
      if (keyboardMap.get(word[i].toLowerCase()) !== row) {
        isSameRow = false;
      }
    }

    if (isSameRow) {
      result.push(word);
    }
  });

  return result;
}

//
//

describe('find words on keyborad row', () => {
  test('should return `["Alaska","Dad"]`', () => {
    const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
    const result = findWords(words);
    expect(result).toEqual(['Alaska', 'Dad']);
  });

  test('should return ``', () => {
    const words = ['omk'];
    const result = findWords(words);
    expect(result).toEqual([]);
  });

  test('should return `["adsdf","sfd"]`', () => {
    const words = ['adsdf', 'sfd'];
    const result = findWords(words);
    expect(result).toEqual(['adsdf', 'sfd']);
  });
});
