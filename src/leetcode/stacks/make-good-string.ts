/**
 * Given a string s of lower and upper case English letters.
 *
 * A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
 * -- 0 <= i <= s.length - 2
 * -- s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
 *
 * To make the string good, you can choose two adjacent characters that make the string
 * bad and remove them. You can keep doing this until the string becomes good.
 *
 * Return the string after making it good. The answer is guaranteed to be unique
 * under the given constraints.
 *
 * Notice that an empty string is also good.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks #strings
 */

function isSameCharAndDifferentCase(char1: string, char2: string): boolean {
  if (char1.toLowerCase() !== char2.toLowerCase()) {
    return false;
  }

  return !(
    (char1 === char1.toLowerCase() && char2 === char2.toLowerCase()) ||
    (char1 === char1.toUpperCase() && char2 === char2.toUpperCase())
  );
}

function makeGood(s: string): string {
  if (s.length <= 1) {
    return s;
  }

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }

    if (isSameCharAndDifferentCase(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
}

//
//

describe('make the string greate', () => {
  test('should return `leetcode`', () => {
    const s = 'leEeetcode';
    const result = makeGood(s);
    expect(result).toEqual('leetcode');
  });

  test('should return ``', () => {
    const s = 'abBAcC';
    const result = makeGood(s);
    expect(result).toEqual('');
  });

  test('should return `s`', () => {
    const s = 's';
    const result = makeGood(s);
    expect(result).toEqual('s');
  });

  test('should return `sM`', () => {
    const s = 'sM';
    const result = makeGood(s);
    expect(result).toEqual('sM');
  });

  test('should return `kkdsFuqUfSDKK`', () => {
    const s = 'kkdsFuqUfSDKK';
    const result = makeGood(s);
    expect(result).toEqual('kkdsFuqUfSDKK');
  });

  test('should return `kkdsFuqUfSDff`', () => {
    const s = 'kkdsFuqUfSDff';
    const result = makeGood(s);
    expect(result).toEqual('kkdsFuqUfSDff');
  });
});
