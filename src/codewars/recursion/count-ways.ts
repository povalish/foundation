function countWays(x: number, y: number, count = 0): number {
  if (x === 0 && y === 0) return 1;
  if (x === 0) return countWays(x, y - 1, count);
  if (y === 0) return countWays(x - 1, y, count);
  return countWays(x - 1, y, count) + countWays(x, y - 1, count);
}

//
//

describe('count ways', () => {
  test('should pass test', () => {
    expect(countWays(3, 2)).toEqual(10);
  });
});
