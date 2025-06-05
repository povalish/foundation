/**
 * We have the numbers with different colours with
 * the sequence: ['red', 'yellow', 'blue'].
 *
 * That sequence colours the numbers in the following way:
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 .....
 *
 * We have got the following recursive function:
 * f(1) = 1
 * f(n) = f(n - 1) + n
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #recursion #hash-table
 */

function sameColSeq(val: number, k: number, col: string): number[] {
  const result: number[] = [];
  const cache: Record<number, number> = {};

  const getColor = (n: number): string => {
    if (n % 3 === 1) {
      return 'red';
    } else if (n % 3 === 2) {
      return 'yellow';
    } else {
      return 'blue';
    }
  };

  const F = (n: number): number => {
    if (cache[n]) {
      return cache[n];
    }

    if (n === 1) {
      return 1;
    }

    return F(n - 1) + n;
  };

  for (let i = 1; i <= k * 2 * val; i++) {
    const value = F(i);
    cache[i] = value;
    const color = getColor(value);

    if (color === col && value > val) {
      result.push(value);
    }

    if (result.length === k || value > k * 2 * val) {
      return result;
    }
  }

  return result;
}

//
//

describe('Working With Coloured Numbers', () => {
  test('Simple cases', () => {
    expect(sameColSeq(3, 3, 'blue')).toEqual([6, 15, 21]);
    expect(sameColSeq(100, 4, 'red')).toEqual([136, 190, 253, 325]);
    expect(sameColSeq(250, 6, 'yellow')).toEqual([]);
    expect(sameColSeq(1000, 7, 'red')).toEqual([1081, 1225, 1378, 1540, 1711, 1891, 2080]);
  });
});
