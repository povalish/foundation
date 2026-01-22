/**
 * Decode XORed Array
 * https://leetcode.com/problems/decode-xored-array/description/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function decode(encoded: number[], first: number): number[] {
  return encoded.reduce(
    (prev, curr, index) => {
      prev.push(prev[index] ^ curr);
      return prev;
    },
    [first],
  );
}

//

describe('Decode XORed Array', () => {
  test('base cases', () => {
    let encoded = [1, 2, 3];
    let first = 1;
    expect(decode(encoded, first)).toEqual([1, 0, 2, 1]);

    encoded = [6, 2, 7, 3];
    first = 4;
    expect(decode(encoded, first)).toEqual([4, 2, 0, 7, 4]);
  });
});
