function findX(s: string): number {
  if (s.length === 1 && s[0] === 'x') return 0;
  if (s[s.length - 1] === 'x') return s.length - 1;
  return findX(s.slice(0, s.length - 1));
}

//
//

describe('find x in a string', () => {
  test('should pass test', () => {
    expect(findX('abcdexf')).toEqual(5);
    expect(findX('abxdefg')).toEqual(2);
  });
});
