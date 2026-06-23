/**
 * Merge Strings Alternately
 * https://neetcode.io/problems/merge-strings-alternately/question?list=neetcode250
 *
 * Time Complexity: O(n) - n largest string
 * Space Complexity: O(n + m)
 */

function mergeAlternately(word1: string, word2: string): string {
  let word1Index = 0;
  let word2Index = 0;
  let result = '';

  while (word1Index < word1.length || word2Index < word2.length) {
    if (word1Index < word1.length) result += word1[word1Index];
    if (word2Index < word2.length) result += word2[word2Index];

    word1Index = Math.min(word1Index + 1, word1.length);
    word2Index = Math.min(word2Index + 1, word2.length);
  }

  return result;
}

//

describe('Merge Strings Alternately', () => {
  it('should pass basic cases', () => {
    expect(mergeAlternately('abc', 'xyz')).toEqual('axbycz');
    expect(mergeAlternately('ab', 'abbxxc')).toEqual('aabbbxxc');
  });
});
