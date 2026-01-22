/**
 * Latest Time by Replacing Hidden Digits
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function maximumTime(time: string): string {
  const validTime = time.split('');

  // ??:XX
  if (validTime[0] === '?' && validTime[1] === '?') {
    validTime[0] = '2';
    validTime[1] = '3';
  }

  // ?X:XX 23:59
  if (validTime[0] === '?') {
    // Can we placed `2`?
    if (Number(validTime[1]) < 4) validTime[0] = '2';
    else validTime[0] = '1';
  }

  // X?:XX
  if (validTime[1] === '?') {
    if (validTime[0] === '2') validTime[1] = '3';
    else validTime[1] = '9';
  }

  // XX:?X
  if (validTime[3] === '?') validTime[3] = '5';

  // XX:X?
  if (validTime[4] === '?') validTime[4] = '9';

  return validTime.join('');
}

//
//

describe('Latest Time by Replacing Hidden Digits', () => {
  test('simple cases', () => {
    expect(maximumTime('?3:59')).toEqual('23:59');
    expect(maximumTime('1?:22')).toEqual('19:22');
    expect(maximumTime('2?:?0')).toEqual('23:50');
    expect(maximumTime('0?:3?')).toEqual('09:39');
    expect(maximumTime('1?:22')).toEqual('19:22');
  });
});
