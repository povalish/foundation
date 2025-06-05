function countSymbols(s: string[]): number {
  if (s.length === 1) return s[0].length;
  return s[0].length + countSymbols(s.slice(1, s.length));
}

//
//

describe('count symbols of all elements', () => {
  test('should pass test', () => {
    expect(countSymbols(['ab', 'c', 'def', 'ghij'])).toEqual(10);
  });
});
