function hIndex(citations: number[]): number {
  const sorted = citations.toSorted((a, b) => b - a);

  if (sorted[sorted.length - 1] >= sorted.length) return sorted.length;

  for (let i = 0; i < sorted.length; i++) {
    if (i >= sorted[i]) {
      return i;
    }
  }

  return 0;
}

//
//

describe('H-index', () => {
  test('base cases', () => {
    let citations = [3, 0, 6, 1, 5];
    expect(hIndex(citations)).toEqual(3);

    citations = [1, 3, 1];
    expect(hIndex(citations)).toEqual(1);

    citations = [1, 2, 6, 7, 9];
    expect(hIndex(citations)).toEqual(3);

    citations = [10, 8, 5, 4, 3];
    expect(hIndex(citations)).toEqual(4);

    citations = [25, 8, 5, 3, 3];
    expect(hIndex(citations)).toEqual(3);

    citations = [0, 0, 2];
    expect(hIndex(citations)).toEqual(1);
  });
});
