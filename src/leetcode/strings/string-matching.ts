/**
 * String Matching in an Array
 * https://leetcode.com/problems/string-matching-in-an-array/description
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(M)
 */

function stringMatching(words: string[]): string[] {
  if (words.length === 1) return [];

  words.sort((a, b) => a.length - b.length);
  const result: string[] = [];

  console.log(words);

  for (let i = 0; i < words.length; i++) {
    for (let j = words.length - 1; j > i; j--) {
      if (words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }

  return result;
}

//
//

describe('String Matching in an Array', () => {
  test('basic cases', () => {
    expect(stringMatching(['mass', 'as', 'hero', 'superhero'])).toEqual(['as', 'hero']);
    expect(stringMatching(['leetcode', 'et', 'code'])).toEqual(['et', 'code']);
    expect(stringMatching(['blue', 'green', 'bu'])).toEqual([]);
  });

  test('advanced cases', () => {
    expect(stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am'])).toEqual(['od', 'am', 'leetcode']);
  });
});
