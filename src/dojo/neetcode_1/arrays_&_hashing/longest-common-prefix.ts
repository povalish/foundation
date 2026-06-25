/**
 * Longest Common Prefix
 * https://neetcode.io/problems/longest-common-prefix/question?list=neetcode250
 *
 * Time Complexity: O(n*m) n - array len, m - string len
 * Space Complexity: O(m)
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  const prefixMap = new Map<number, string>();
  for (let i = 0; i < strs[0].length; i++) {
    prefixMap.set(i, strs[0][i]);
  }

  let minPrefixIndex = prefixMap.size;

  for (let i = 1; i < strs.length; i++) {
    let longesPrefix = 0;
    for (let j = 0; j < strs[i].length; j++) {
      if (prefixMap.has(j) && prefixMap.get(j) === strs[i][j]) longesPrefix++;
      else break;
    }

    minPrefixIndex = Math.min(minPrefixIndex, longesPrefix);
  }

  return strs[0].slice(0, minPrefixIndex);
}

//

describe('Longest Common Prefix', () => {
  it('should pass basic cases', () => {
    expect(longestCommonPrefix(['bat', 'bag', 'bank', 'band'])).toEqual('ba');
    expect(longestCommonPrefix(['dance', 'dag', 'danger', 'damage'])).toEqual('da');
    expect(longestCommonPrefix(['neet', 'feet'])).toEqual('');
  });
});
