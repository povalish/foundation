/**
 * Odd String Difference
 * https://leetcode.com/problems/odd-string-difference/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

const charSet: Record<string, number> = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

function getDiff(word: string): string {
  const result: number[] = [];
  for (let i = 1; i < word.length; i++) {
    result.push(charSet[word[i]] - charSet[word[i - 1]]);
  }
  return result.join(',');
}

function oddString(words: string[]): string {
  let repeatCount = 0;
  let repeatElement = words[0];
  let reserve: string | null = null;

  for (const word of words) {
    const diff = getDiff(word);
    const repeatDiff = getDiff(repeatElement);

    if (diff === repeatDiff) {
      repeatCount += 1;
    }

    if (reserve && diff === getDiff(reserve)) {
      repeatCount = 1;
      reserve = repeatElement;
      repeatElement = word;
    }

    if (!reserve && diff !== repeatDiff) {
      reserve = word;
    }

    if (reserve && repeatCount > 1) return reserve;
  }

  return reserve!;
}

//
//

describe('Odd String Difference', () => {
  test('simple cases', () => {
    expect(oddString(['adc', 'wzy', 'abc'])).toEqual('abc');
    expect(oddString(['aaa', 'bob', 'ccc', 'ddd'])).toEqual('bob');
    expect(oddString(['aaa', 'eee', 'ttt', 'bob', 'ccc', 'ddd'])).toEqual('bob');
    expect(oddString(['bob', 'aaa', 'eee', 'ttt', 'ccc', 'ddd'])).toEqual('bob');
    expect(oddString(['aaa', 'eee', 'ttt', 'ccc', 'ddd', 'bob'])).toEqual('bob');
  });
});
