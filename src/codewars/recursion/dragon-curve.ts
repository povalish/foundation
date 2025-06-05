/**
 * Dragon's Curve
 * https://www.codewars.com/kata/53ad7224454985e4e8000eaa
 *
 * #recursion
 *
 * Time Complexity: O(2^N)
 * Space Complexity: O(1)
 */

// const a = 'aRbFR'; // RFR
// const b = 'LFaLb'; // LFL
// const log: string[] = [];

function Dragon(n: number): string {
  const curve = (char: string, depth: number): string => {
    if (char === 'a' && depth > 0) {
      return `${curve('a', depth - 1)}R${curve('b', depth - 1)}FR`;
    }

    if (char === 'b' && depth > 0) {
      return `LF${curve('a', depth - 1)}L${curve('b', depth - 1)}`;
    }

    return '';
  };

  if (n === 0) {
    return 'F';
  }

  if (isNaN(n) || n < 0 || n % 1 !== 0) {
    return '';
  }

  return `F${curve('a', n)}`;
}

//
//

describe("Dragon's Curve", () => {
  test('should pass test', () => {
    expect(Dragon(0)).toEqual('F');
    expect(Dragon(1)).toEqual('FRFR');
    expect(Dragon(2)).toEqual('FRFRRLFLFR');
  });
});
