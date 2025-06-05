/**
 * Given two strings s and t, return true if they are equal when
 * both are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks
 */

function backspaceCompare(s: string, t: string): boolean {
  const stackS: string[] = [];
  const stackT: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      stackS.push(s[i]);
    } else {
      stackS.pop();
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '#') {
      stackT.push(t[i]);
    } else {
      stackT.pop();
    }
  }

  if (stackS.length !== stackT.length) {
    return false;
  }

  for (let i = 0; i < stackS.length; i++) {
    if (stackS[i] !== stackT[i]) {
      return false;
    }
  }

  return true;
}

describe('backspace string compare', () => {
  test('should return `true`', () => {
    let s = 'ab#c';
    let t = 'ad#c';
    let result = backspaceCompare(s, t);
    expect(result).toEqual(true);

    s = 'ab##';
    t = 'c#d#';
    result = backspaceCompare(s, t);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const s = 'a#c';
    const t = 'b';
    const result = backspaceCompare(s, t);
    expect(result).toEqual(false);
  });
});
