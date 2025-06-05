/**
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection
 * between a letter in pattern and a non-empty word in s. Specifically:
 * - Each letter in pattern maps to exactly one unique word in s.
 * - Each unique word in s maps to exactly one letter in pattern.
 * - No two letters map to the same word, and no two words map to the same letter.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 *
 * #hash-tables #strings
 */
function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) {
    return false;
  }

  const mapPatternToWords: Record<string, string> = {};

  for (let i = 0; i < words.length; i++) {
    const entry = mapPatternToWords[pattern[i]];

    if (entry && entry !== words[i]) {
      return false;
    }

    if (!entry) {
      for (const word of Object.values(mapPatternToWords)) {
        if (word === words[i]) {
          return false;
        }
      }

      mapPatternToWords[pattern[i]] = words[i];
    }
  }

  return true;
}

// function wordPattern(pattern: string, s: string): boolean {
//   const words = s.split(' ');

//   if (pattern.length !== words.length) {
//     return false;
//   }

//   const mapPatternToWord = new Map<string, string>();
//   const mapWordToPattern = new Map<string, string>();

//   for (let i = 0; i < words.length; i++) {
//     const matchWord = mapPatternToWord.get(pattern[i]);

//     if (!matchWord) {
//       mapPatternToWord.set(pattern[i], words[i]);

//       if (!mapWordToPattern.get(words[i])) {
//         mapWordToPattern.set(words[i], pattern[i]);
//       }
//     }

//     if (matchWord && matchWord !== words[i]) {
//       return false;
//     }
//   }

//   const mapPatternToWordKeys = mapPatternToWord.keys();

//   for (const patternKey of mapPatternToWordKeys) {
//     const _word = mapPatternToWord.get(patternKey)!;
//     const _pattern = mapWordToPattern.get(_word);

//     if (patternKey !== _pattern) {
//       return false;
//     }
//   }

//   return true;
// }

describe('word pattern', () => {
  test('should return `true`', () => {
    const pattern = 'aboba';
    const s = 'one two three two one';
    const result = wordPattern(pattern, s);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    let pattern = 'abobb';
    let s = 'one two three two one';
    let result = wordPattern(pattern, s);
    expect(result).toEqual(false);

    pattern = 'abobf';
    s = 'one two three two one';
    result = wordPattern(pattern, s);
    expect(result).toEqual(false);
  });
});
