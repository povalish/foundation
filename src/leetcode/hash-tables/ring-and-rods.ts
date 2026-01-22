/**
 * Rings and Rods
 * https://leetcode.com/problems/rings-and-rods/description/
 *
 * Time Complexity: O()
 * Space Complexity: O(1)
 */

type Color = 'R' | 'G' | 'B';

type Rod = Record<Color, boolean>;

function countPoints(rings: string): number {
  const rods: Record<string, Rod> = {};
  for (let i = 0; i <= 9; i++) {
    rods[i] = { R: false, G: false, B: false };
  }

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i] as Color;
    const rod = rings[i + 1];
    rods[rod][color] = true;
  }

  let all = 0;
  for (const rod of Object.values(rods)) {
    if (rod.R && rod.G && rod.B) all += 1;
  }

  return all;
}

//
//

describe('Rings and Rods', () => {
  test('simple cases', () => {
    let rings = 'B0B6G0R6R0R6G9';
    expect(countPoints(rings)).toEqual(1);

    rings = 'B0R0G0R9R0B0G0';
    expect(countPoints(rings)).toEqual(1);

    rings = 'G4';
    expect(countPoints(rings)).toEqual(0);
  });
});
