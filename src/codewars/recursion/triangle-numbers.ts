function triangNumber(n: number): number {
  // return (n * (n + 1)) / 2;
  if (n === 1) return 1;
  return n + triangNumber(n - 1);
}

//
//

describe('find triangle number by N', () => {
  test('should pass test', () => {
    expect(triangNumber(7)).toEqual(28);
    expect(triangNumber(3)).toEqual(6);
  });
});
