/**
 * Container With Most Water
 * https://neetcode.io/problems/max-water-container/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function maxArea(heights: number[]): number {
  let leftIndex = 0;
  let rightIndex = heights.length - 1;
  let max = 0;

  while (leftIndex < rightIndex) {
    const height = Math.min(heights[leftIndex], heights[rightIndex]);
    const width = rightIndex - leftIndex;
    max = Math.max(max, height * width);

    if (heights[leftIndex] <= heights[rightIndex]) leftIndex += 1;
    else rightIndex -= 1;
  }

  return max;
}

//

describe('Container With Most Water', () => {
  it('should pass basic cases', () => {
    expect(maxArea([1, 7, 2, 5, 4, 7, 3, 6])).toEqual(36);
    expect(maxArea([2, 2, 2])).toEqual(4);
  });
});
