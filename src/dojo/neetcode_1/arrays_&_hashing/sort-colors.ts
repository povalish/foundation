/**
 * Sort Colors
 * https://neetcode.io/problems/sort-colors/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function sortColors(nums: number[]): void {
  let zero = 0;
  let one = 0;
  let two = 0;
  let index = 0;

  while (index < nums.length) {
    if (nums[index] === 0) {
      nums[zero++] = 0;
      nums[one++] = 1;
      nums[two++] = 2;
    } else if (nums[index] === 1) {
      nums[one++] = 1;
      nums[two++] = 2;
    } else {
      nums[two++] = 2;
    }

    index++;
  }
}

//

// const colors = [1, 0, 1, 2];
// sortColors(colors);

describe.skip('Sort Colors', () => {
  it('should pass basic cases', () => {
    let colors = [1, 0, 1, 2];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 1, 2]);

    colors = [2, 1, 0];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 2]);
  });
});

/**
 * [1, 0, 0, 1]
 * 0's = 0
 * 1's = 1
 * 2's = 0
 *
 *
 */
