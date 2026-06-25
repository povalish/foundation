/**
 * // Задача 2. Поиск анаграммы в строке

  // Проверить, содержит ли исходная строка подстроку,
  // которая является анаграммой строки-шаблона.
  // Анаграмма — это строка с теми же символами и их количеством,
  // но, возможно, в другом порядке.
 */

function hasAnagramSubstring(source: string, pattern: string): boolean {
  if (pattern.length > source.length) return false;

  const patternFreq = new Map<string, number>();
  const windowFreq = new Map<string, number>();

  for (const char of pattern) {
    const prev = patternFreq.get(char) ?? 0;
    patternFreq.set(char, prev + 1);
  }

  let diff = patternFreq.size;

  // Build window
  for (const char of source.slice(0, pattern.length)) {
    const prev = windowFreq.get(char) ?? 0;
    const actual = patternFreq.get(char) ?? 0;

    if (prev + 1 === actual) diff--;
    if (prev === actual) diff++;

    if (diff === 0) return true;

    windowFreq.set(char, prev + 1);
  }

  let left = 0;
  let right = pattern.length;

  // Move window
  while (right < source.length) {
    const prevLeft = windowFreq.get(source[left]) ?? 0;
    const prevRight = windowFreq.get(source[right]) ?? 0;

    const actualLeft = patternFreq.get(source[left]) ?? 0;
    const actualRight = patternFreq.get(source[right]) ?? 0;

    if (prevLeft - 1 === actualLeft) diff--;
    if (prevLeft === actualLeft) diff++;

    if (prevRight + 1 === actualRight) diff--;
    if (prevRight === actualRight) diff++;

    if (diff === 0) return true;

    if (prevLeft <= 1) windowFreq.delete(source[left]);
    else windowFreq.set(source[left], prevLeft - 1);

    windowFreq.set(source[right], prevRight + 1);

    if (right >= pattern.length - 1) left++;
    right++;
  }

  return false;
}

// hasAnagramSubstring('asbhbbavbjsbabbsjklndskv', 'bab');

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
