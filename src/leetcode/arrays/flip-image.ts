/**
 * Flipping an Image
 * https://leetcode.com/problems/flipping-an-image/description
 *
 * Time Complexity: O(N x M)
 * Space Complexity: O(1)
 */

function flipAndInvertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; i++) {
    const row: number[] = [];

    for (let j = image[i].length - 1; j >= 0; j--) {
      if (image[i][j] === 0) row.push(1);
      else row.push(0);
    }

    image[i] = row;
  }

  return image;
}

//
//

describe('Flipping an Image', () => {
  test('simple cases', () => {
    expect(
      flipAndInvertImage([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ]),
    ).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);

    expect(
      flipAndInvertImage([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ]),
    ).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
