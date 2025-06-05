/**
 * The Leetcode file system keeps a log each time some user
 * performs a change folder operation.
 *
 * The operations are described below:
 * -- "../" : Move to the parent folder of the current folder.
 *    (If you are already in the main folder, remain in the same folder).
 * -- "./" : Remain in the same folder.
 * -- "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
 *
 * You are given a list of strings logs where logs[i] is the operation
 * performed by the user at the ith step.
 *
 * The file system starts in the main folder, then the operations in logs are performed.
 *
 * Return the minimum number of operations needed to go back to the main folder after
 * the change folder operations.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks
 */

function minOperations(logs: string[]): number {
  const folders: string[] = [];

  logs.forEach((log) => {
    if (log === '../') {
      folders.pop();
    } else if (log !== './') {
      folders.push(log);
    }
  });

  return folders.length;
}

//
//

describe('crawler log folder', () => {
  test('should return `2`', () => {
    const logs = ['d1/', 'd2/', '../', 'd21/', './'];
    const result = minOperations(logs);
    expect(result).toEqual(2);
  });

  test('should return `3`', () => {
    const logs = ['d1/', 'd2/', './', 'd3/', '../', 'd31/'];
    const result = minOperations(logs);
    expect(result).toEqual(3);
  });

  test('should return `0`', () => {
    const logs = ['d1/', '../', '../', '../'];
    const result = minOperations(logs);
    expect(result).toEqual(0);
  });
});
