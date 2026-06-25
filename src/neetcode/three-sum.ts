/**
 * 3Sum
 * https://neetcode.io/problems/three-integer-sum/question?list=neetcode150
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  let p1 = 0;
  let p2 = p1 + 1;
  let p3 = nums.length - 1;

  while (p1 < p3) {
    p2 = p1 + 1;

    while (p2 < p3) {
      const sum = nums[p1] + nums[p2] + nums[p3];

      if (sum < 0) p2++;
      else if (sum > 0) p3--;
      else {
        result.push([nums[p1], nums[p2], nums[p3]]);
        p3--;
        p2++;
      }
    }

    p1++;
  }

  return result;
}

//

// threeSum([-1, 0, 1, 2, -1, -4]);

describe('3Sum', () => {
  it('should pass basic cases', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([0, 1, 1])).toEqual([]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});

/**
 * [-4*, -1*, -1, 0, 1, 2*]
 */
