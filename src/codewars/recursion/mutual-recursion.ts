/**
 * F(0) = 1
 * M(0) = 0
 * F(n) = n - M(F(n - 1))
 * M(n) = n - F(M(n - 1))
 *
 * #recursion
 */

function F(n: number): number {
  if (n === 0) {
    return 1;
  }

  return n - M(F(n - 1));
}

function M(n: number): number {
  if (n === 0) {
    return 0;
  }

  return n - F(M(n - 1));
}

//
//

describe('mutual recrusion', () => {
  test('checking the first 10 integers', () => {
    const casesF = [
      { n: 0, result: 1 },
      { n: 1, result: 1 },
      { n: 2, result: 2 },
      { n: 3, result: 2 },
      { n: 4, result: 3 },
      { n: 5, result: 3 },
      { n: 6, result: 4 },
      { n: 7, result: 5 },
      { n: 8, result: 5 },
      { n: 9, result: 6 },
    ];

    const casesM = [
      { n: 0, result: 0 },
      { n: 1, result: 0 },
      { n: 2, result: 1 },
      { n: 3, result: 2 },
      { n: 4, result: 2 },
      { n: 5, result: 3 },
      { n: 6, result: 4 },
      { n: 7, result: 4 },
      { n: 8, result: 5 },
      { n: 9, result: 6 },
    ];

    casesF.forEach((value) => {
      expect(F(value.n)).toEqual(value.result);
    });

    casesM.forEach((value) => {
      expect(M(value.n)).toEqual(value.result);
    });
  });
});
