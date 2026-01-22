/**
 * Slowest Key
 * https://leetcode.com/problems/slowest-key/description/
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let maxDuration = releaseTimes[0];
  let result = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const diff = releaseTimes[i] - releaseTimes[i - 1];

    if (diff > maxDuration || (diff === maxDuration && keysPressed[i] > result)) {
      maxDuration = diff;
      result = keysPressed[i];
    }
  }

  return result;
}

//
//

describe('Slowest Key', () => {
  test('simple cases', () => {
    let releaseTimes = [9, 29, 49, 50];
    let keysPressed = 'cbcd';
    expect(slowestKey(releaseTimes, keysPressed)).toEqual('c');

    releaseTimes = [28, 29, 49, 50];
    keysPressed = 'cbcd';
    expect(slowestKey(releaseTimes, keysPressed)).toEqual('c');

    releaseTimes = [12, 23, 36, 46, 62];
    keysPressed = 'spuda';
    expect(slowestKey(releaseTimes, keysPressed)).toEqual('a');
  });

  test('advanced cases', () => {});
});
