/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const ransomNoteLettersCount = new Map<string, number>();

  for (let i = 0; i < ransomNote.length; i++) {
    if (!ransomNoteLettersCount.has(ransomNote[i])) {
      ransomNoteLettersCount.set(ransomNote[i], 1);
    } else {
      const count = ransomNoteLettersCount.get(ransomNote[i])!;
      ransomNoteLettersCount.set(ransomNote[i], count + 1);
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    if (ransomNoteLettersCount.has(magazine[i])) {
      const count = ransomNoteLettersCount.get(magazine[i])! - 1;

      if (count <= 0) {
        ransomNoteLettersCount.delete(magazine[i]);
      } else {
        ransomNoteLettersCount.set(magazine[i], count);
      }
    }
  }

  return ransomNoteLettersCount.size === 0;
}

//
//

describe('ransom note', () => {
  test('should return `true`', () => {
    const ransomNote = 'aa';
    const magazine = 'aab';
    const result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    let ransomNote = 'a';
    let magazine = 'b';
    let result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(false);

    ransomNote = 'aaab';
    magazine = 'aaab';
    result = canConstruct(ransomNote, magazine);
    expect(result).toEqual(true);
  });
});
