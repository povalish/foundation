/**
 * Jump Game
 * https://leetcode.com/problems/jump-game/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function canJump(nums: number[]): boolean {
  let canReachTheEnd = true;
  let requiredJump = 0;

  for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[index] >= requiredJump) {
      requiredJump = 0;
      canReachTheEnd = true;
    } else {
      canReachTheEnd = false;
    }

    requiredJump += 1;
  }

  return canReachTheEnd;
}

//
//

describe('Jump Game', () => {
  test('should pass simple cases', () => {
    let nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toEqual(true);

    nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toEqual(false);

    nums = [0];
    expect(canJump(nums)).toEqual(true);

    nums = [4, 1, 1, 0, 1, 0];
    expect(canJump(nums)).toEqual(true);

    nums = [1, 1, 1, 1, 1, 1, 1, 0];
    expect(canJump(nums)).toEqual(true);

    nums = [1, 1, 1, 1, 1, 1, 0, 0];
    expect(canJump(nums)).toEqual(false);
  });
});
