/**
 * Restore Finishing Order
 * https://leetcode.com/problems/restore-finishing-order/description
 *
 * Time Complexity: O(N)
 * Space Complexity: O(M)
 */

function recoverOrder(order: number[], friends: number[]): number[] {
  const friendsMap = new Map<number, boolean>();
  for (const friend of friends) {
    friendsMap.set(friend, true);
  }

  const result: number[] = [];
  for (const position of order) {
    if (friendsMap.has(position)) result.push(position);
  }

  return result;
}

//
//

describe('Restore Finishing Order', () => {
  test('simple cases', () => {
    expect(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4])).toEqual([3, 1, 4]);
    expect(recoverOrder([1, 4, 5, 3, 2], [2, 5])).toEqual([5, 2]);
  });
});
