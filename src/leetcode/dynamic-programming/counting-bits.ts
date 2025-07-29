/**
 * Counting Bits
 * https://leetcode.com/problems/counting-bits/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * #dynamic
 */

function loop(n: number): number[] {
  const result = new Array(n + 1).fill(0);

  for (let i = 1; i < result.length; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}

//
//

describe('Counting Bits', () => {
  // Aware of stack overflow
  test('recursion', () => {});

  test('lopp', () => {
    expect(loop(5)).toEqual([0, 1, 1, 2, 1, 2]);
    expect(loop(6)).toEqual([0, 1, 1, 2, 1, 2, 2]);
    expect(loop(7)).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
    expect(loop(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
    expect(loop(9)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2]);
    expect(loop(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
    expect(loop(11)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]);
    expect(loop(64)).toEqual([
      0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3,
      3, 4, 2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 1,
    ]);
  });
});
