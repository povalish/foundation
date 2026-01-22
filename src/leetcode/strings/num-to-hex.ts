/**
 * Convert a Number to Hexadecimal
 * https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * Time Complexity: O(logN)
 * Space Complexity: O(1)
 */

function toHex(num: number): string {
  if (num === 0) return '0';

  let result: string[] = [];
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  if (num < 0) {
    hex = hex.reverse();
    num = Math.abs(num + 1);
    result = ['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'];
    let index = result.length - 1;

    while (num !== 0) {
      const reminder = num % 16;
      result[index] = hex[reminder];
      num = Math.floor(num / 16);
      index -= 1;
    }

    return result.join('');
  }

  while (num !== 0) {
    const reminder = num % 16;
    result.push(hex[reminder]);
    num = Math.floor(num / 16);
  }

  return result.reverse().join('');
}

//
//

describe('Convert a Number to Hexadecimal', () => {
  test('simple cases', () => {
    let num = 26;
    expect(toHex(num)).toEqual('1a');

    num = -1;
    expect(toHex(num)).toEqual('ffffffff');

    num = -2;
    expect(toHex(num)).toEqual('fffffffe');

    num = -16;
    expect(toHex(num)).toEqual('fffffff0');

    num = -255;
    expect(toHex(num)).toEqual('ffffff01');

    num = 0;
    expect(toHex(num)).toEqual('0');

    num = 2147483647;
    expect(toHex(num)).toEqual('7fffffff');
  });

  test('advanced cases', () => {});
});
