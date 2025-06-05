/**
 * Ackermann Function
 * https://www.codewars.com/kata/53ad69892a27079b34000bd9
 *
 * #recursion
 */

const cache: Record<string, number> = {};

function ackermann(m: number, n: number): number | null {
  const isNotNumber = typeof m !== 'number' || typeof n !== 'number';
  const isFloat = m % 1 !== 0 || n % 1 !== 0;
  const isNegative = m < 0 || n < 0;

  if (isNotNumber || isFloat || isNegative) {
    return null;
  }

  const A = (a: number, b: number): number => {
    if (a === 0) {
      return b + 1;
    }

    const key = `${a}-${b}`;

    if (cache[key]) {
      return cache[key];
    }

    if (a > 0 && b === 0) {
      cache[key] = A(a - 1, 1);
      return cache[key];
    }

    if (a > 0 && b > 0) {
      cache[key] = A(a - 1, A(a, b - 1));
      return cache[key];
    }

    return 0;
  };

  return A(m, n);
}

//
//

describe('Ackermann Function', () => {
  test('simple tests', () => {
    expect(ackermann(1, 1)).toEqual(3);
    expect(ackermann(4, 0)).toEqual(13);
    expect(ackermann(3, 3)).toEqual(61);
    expect(ackermann(-1, 1)).toEqual(null);
    // @ts-expect-error required for test
    expect(ackermann('s', 1)).toEqual(null);
  });
});
