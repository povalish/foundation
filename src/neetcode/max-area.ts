/**
 * Container With Most Water
 * https://neetcode.io/problems/max-water-container/question?list=neetcode150
 */

function maxArea(heights: number[]): number {
  let area = 0;

  let pLeft = 0;
  let pRight = heights.length - 1;

  const getArea = (l: number, r: number): number => {
    const height = Math.min(heights[l], heights[r]);
    const width = r - l;
    return height * width;
  };

  while (pLeft < pRight) {
    const curr = getArea(pLeft, pRight);
    const leftNext = getArea(pLeft + 1, pRight);
    const rightNext = getArea(pLeft, pRight - 1);

    area = Math.max(area, curr);

    if (leftNext > curr) pLeft++;
    else if (rightNext > curr) pRight--;
    else {
      pLeft++;
      pRight--;
    }
  }

  return area;
}

//

// maxArea([2, 2, 2]);

describe('Container With Most Water', () => {
  it('should pass basic cases', () => {
    expect(maxArea([1, 7, 2, 5, 4, 7, 3, 6])).toEqual(36);
    expect(maxArea([2, 2, 2])).toEqual(4);
  });
});

/**
 *
 * [1*, 7#, 2, 5, 4, 7, 3#, 6*]
 *
 */
