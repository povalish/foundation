/**
 * Maximum Repeating Substring
 * https://leetcode.com/problems/maximum-repeating-substring/description/?envType=problem-list-v2&envId=dynamic-programming
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #dynamic #strings
 */

function maxRepeating(sequence: string, word: string): number {
  if (sequence.length < word.length) return 0;
  if (sequence.length === word.length) {
    return sequence === word ? 1 : 0;
  }

  let pattern = word;
  let isRepeating = true;
  let repeat = 0;

  while (isRepeating) {
    isRepeating = sequence.includes(pattern);

    if (isRepeating) {
      pattern += word;
      repeat += 1;
    }
  }

  return repeat;
}

//
//

describe('Maximum Repeating Substring', () => {
  test('should pass simple cases', () => {
    let sequence = 'ababc';
    let word = 'ab';
    expect(maxRepeating(sequence, word)).toEqual(2);

    sequence = 'abcabc';
    word = 'ab';
    expect(maxRepeating(sequence, word)).toEqual(1);

    sequence = 'ababc';
    word = 'ba';
    expect(maxRepeating(sequence, word)).toEqual(1);

    sequence = 'ababc';
    word = 'ac';
    expect(maxRepeating(sequence, word)).toEqual(0);

    sequence = 'a';
    word = 'a';
    expect(maxRepeating(sequence, word)).toEqual(1);

    sequence = 'aaabaaaabaaabaaaabaaaabaaaabaaaaba';
    word = 'aaaba';
    expect(maxRepeating(sequence, word)).toEqual(5);
  });
});
