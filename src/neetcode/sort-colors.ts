/**
 * Sort Colors
 * https://neetcode.io/problems/sort-colors/question
 */

function sortColors(nums: number[]): void {
  const colors = new Map<number, number>();

  for (const num of nums) {
    const prev = colors.get(num) ?? 0;
    colors.set(num, prev + 1);
  }

  const adjustColors = (c: number): void => {
    const curr = colors.get(c)!;
    if (curr <= 1) colors.delete(c);
    else colors.set(c, curr - 1);
  };

  for (let i = 0; i < nums.length; i++) {
    if (colors.has(0)) {
      nums[i] = 0;
      adjustColors(0);
    } else if (colors.has(1)) {
      nums[i] = 1;
      adjustColors(1);
    } else {
      nums[i] = 2;
      adjustColors(2);
    }
  }
}

//

describe('Sort Colors', () => {
  it('should pass basic cases', () => {
    let colors = [1, 0, 1, 2];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 1, 2]);

    colors = [2, 1, 0];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 2]);
  });
});
