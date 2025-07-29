/**
 * Longest Unequal Adjacent Groups Subsequence I
 * https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #dynamic #combinations
 */

function getLongestSubsequence(words: string[], groups: number[]): string[] {
  if (words.length === 1) return words;

  const result: string[] = [];
  let lastGroup = -1;

  groups.forEach((group, index) => {
    if (group !== lastGroup) {
      result.push(words[index]);
      lastGroup = group;
    }
  });

  return result;
}

//
//

describe('Longest Unequal Adjacent Groups Subsequence I', () => {
  test('should pass simple cases', () => {
    let words = ['e', 'a', 'b'];
    let groups = [0, 0, 1];
    expect(getLongestSubsequence(words, groups)).toEqual(['e', 'b']);

    words = ['a', 'b', 'c', 'd'];
    groups = [1, 0, 1, 1];
    expect(getLongestSubsequence(words, groups)).toEqual(['a', 'b', 'c']);

    words = ['a', 'b', 'c', 'd'];
    groups = [1, 1, 1, 1];
    expect(getLongestSubsequence(words, groups)).toEqual(['a']);

    words = ['a', 'b', 'c', 'd'];
    groups = [1, 0, 0, 0];
    expect(getLongestSubsequence(words, groups)).toEqual(['a', 'b']);

    words = ['a'];
    groups = [1];
    expect(getLongestSubsequence(words, groups)).toEqual(['a']);

    words = ['a', 'b', 'c', 'd'];
    groups = [1, 0, 1, 0];
    expect(getLongestSubsequence(words, groups)).toEqual(['a', 'b', 'c', 'd']);
  });
});
