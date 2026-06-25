function getHash(s: string): string {
  const mask: number[] = new Array(26).fill(0);
  for (const char of s) {
    const position = char.charCodeAt(0) - 'a'.charCodeAt(0);
    mask[position]++;
  }

  return mask.join('-');
}

function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();

  for (const str of strs) {
    const hash = getHash(str);
    const list = anagramMap.get(hash) ?? [];
    list.push(str);
    anagramMap.set(hash, list);
  }

  const result: string[][] = [];
  for (const anagramList of anagramMap.values()) {
    result.push(anagramList);
  }

  return result;
}

//

// groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']);

describe.skip('Group Anagrams', () => {
  it('should pass basic cases', () => {
    expect(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat'])).toEqual([
      ['hat'],
      ['act', 'cat'],
      ['stop', 'pots', 'tops'],
    ]);
    expect(groupAnagrams(['x'])).toEqual([['x']]);
    expect(groupAnagrams([''])).toEqual([['']]);
  });
});
