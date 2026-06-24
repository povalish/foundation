/**
 * // Задача 2. Поиск анаграммы в строке

  // Проверить, содержит ли исходная строка подстроку,
  // которая является анаграммой строки-шаблона.
  // Анаграмма — это строка с теми же символами и их количеством,
  // но, возможно, в другом порядке.
 */

function hasAnagramSubstring(source: string, pattern: string): boolean {
  if (pattern.length > source.length) return false;
  return false;
}

// hasAnagramSubstring('abbhvbjsbabbsjklndskv', 'bab');

//

describe.skip('Search Anagram', () => {
  it('should pass basic cases', () => {
    expect(hasAnagramSubstring('asbhvbjsbabbsjklndskv', 'bab')).toEqual(true);
    expect(hasAnagramSubstring('asbhvbjsbabbsjklndskv', 'babz')).toEqual(false);
    expect(hasAnagramSubstring('cbaebabacd', 'abc')).toEqual(true);
    expect(hasAnagramSubstring('eidboaoo', 'abc')).toEqual(false);
    expect(hasAnagramSubstring('a', 'aa')).toEqual(false);
  });
});

/**
 * freq - { a:1 | b:2 }
 * a - s - b
 * window  - { a:1 | s:1 | b:1 }
 */
