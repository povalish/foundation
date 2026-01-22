/**
 * Group Anagrams
 * https://neetcode.io/problems/anagram-groups/question?list=neetcode150
 *
 * Time Complexit: O()
 * Space Complexity: O()
 */

// function sortStr(str: string): string {
//   return str.split('').sort().join('');
// }

// function groupAnagrams(strs: string[]): Array<string[]> {
//   if (strs.length === 1) return [strs];

//   const entriesWithIdx = new Map<string, number[]>();

//   strs.forEach((str, index) => {
//     const sorted = sortStr(str);

//     if (entriesWithIdx.has(sorted)) {
//       const idx = entriesWithIdx.get(sorted)!;
//       idx.push(index);
//     } else {
//       entriesWithIdx.set(sorted, [index]);
//     }
//   });

//   const result: string[][] = [];

//   for (const idx of entriesWithIdx.values()) {
//     const anagrams: string[] = [];
//     idx.forEach((i) => anagrams.push(strs[i]));
//     result.push(anagrams);
//   }

//   return result;
// }

function createStringMask(str: string): string {
  const mask = new Array(26).fill(0);
  for (const char of str) {
    mask[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  return mask.join('_');
}

function groupAnagrams(strs: string[]): string[][] {
  const masksWithIdx = new Map<string, string[]>();

  strs.forEach((str, index) => {
    const mask = createStringMask(str);
    if (masksWithIdx.has(mask)) masksWithIdx.get(mask)!.push(strs[index]);
    else masksWithIdx.set(mask, [strs[index]]);
  });

  return masksWithIdx.values().toArray();
}

//
//

describe('Group Anagrams', () => {
  test.skip('basic cases', () => {
    const example1 = ['act', 'pots', 'tops', 'cat', 'stop', 'hat'];
    expect(groupAnagrams(example1)).toEqual([['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']]);

    const example2 = ['x'];
    expect(groupAnagrams(example2)).toEqual([['x']]);

    const example3 = [''];
    expect(groupAnagrams(example3)).toEqual([['']]);
  });

  test('advanced cases', () => {
    const example1 = ['bdddddddddd', 'bbbbbbbbbbc'];
    expect(groupAnagrams(example1)).toEqual([['bdddddddddd'], ['bbbbbbbbbbc']]);
  });
});
