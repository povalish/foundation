/**
 * You are given a string s.
 *
 * Your task is to remove all digits by doing this operation repeatedly:
 *
 * Delete the first digit and the closest non-digit character to its left.
 * Return the resulting string after removing all digits.
 *
 * Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.
 *
 * Time Complexity: O()
 * Space Complexity: O()
 *
 * $stacks
 */

const DIGITS: Record<string, boolean> = {
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  '4': true,
  '5': true,
  '6': true,
  '7': true,
  '8': true,
  '9': true,
  '10': true,
};

function clearDigits(s: string): string {
  const stack: string[] = [];

  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (DIGITS[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

//
//

describe('clear digits', () => {
  test('should return abc', () => {
    const s = 'abc';
    const result = clearDigits(s);
    expect(result).toEqual('abc');
  });

  test('should return ""', () => {
    const s = 'g0';
    const result = clearDigits(s);
    expect(result).toEqual('');
  });
});
