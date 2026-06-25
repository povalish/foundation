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

  let resultWord = '';

  while (word1Index < word1.length || word1Index < word2.length) {
    if (word1Index < word1.length) resultWord += word1[word1Index];
    if (word2Index < word2.length) resultWord += word2[word2Index];
    word1Index++;
    word2Index++;
  }

  return resultWord;
}

//

describe('Merge Strings Alternately', () => {
  it('should pass basic cases', () => {
    expect(mergeAlternately('abc', 'xyz')).toEqual('axbycz');
    expect(mergeAlternately('ab', 'abbxxc')).toEqual('aabbbxxc');
  });
});
