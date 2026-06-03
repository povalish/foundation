/**
 * https://neetcode.io/problems/anagram-groups/question?list=neetcode150
 *
 * Time Complexity: O(n*m)
 * Space Complexity: O(n*m)
 */

function getHash(str: string): string {
  const hash: number[] = new Array(26).fill(0);

  for (const char of str) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    hash[index] += 1;
  }

  return hash.join('-');
}

//

function groupAnagrams(strs: string[]): string[][] {
  const strsByHash = new Map<string, string[]>();

  // 1st run: setup hash table
  strs.forEach((str) => {
    const hash = getHash(str);
    const strs = strsByHash.get(hash);

    if (strs) strs.push(str);
    else strsByHash.set(hash, [str]);
  });

  console.log(strsByHash);

  // 2nd run: combine result
  const result: string[][] = [];
  strsByHash.forEach((strs) => {
    result.push(strs);
  });

  return result;
}

//
//

describe('DOJO: Group Anagrams', () => {
  it('should pass basic cases', () => {
    expect(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat'])).toEqual([
      ['act', 'cat'],
      ['pots', 'tops', 'stop'],
      ['hat'],
    ]);

    expect(groupAnagrams(['x'])).toEqual([['x']]);

    expect(groupAnagrams([''])).toEqual([['']]);
  });

  it('should pass tricky cases', () => {
    expect(groupAnagrams(['ac', 'c'])).toEqual([['ac'], ['c']]);
    expect(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc'])).toEqual([['bdddddddddd'], ['bbbbbbbbbbc']]);
  });
});
