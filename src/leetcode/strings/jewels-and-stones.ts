/**
 * Jewels and Stones
 * https://leetcode.com/problems/jewels-and-stones/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function numJewelsInStones(jewels: string, stones: string): number {
  const mapJewels: Record<string, boolean> = {};
  for (const jewelry of jewels) {
    mapJewels[jewelry] = true;
  }

  let count = 0;
  for (const stone of stones) {
    if (mapJewels[stone]) count += 1;
  }

  return count;
}

//
//

describe('Jewels and Stones', () => {
  test('simple cases', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
    expect(numJewelsInStones('z', 'ZZ')).toEqual(0);
  });
});
