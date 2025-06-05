/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 * - Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * - Those numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 *
 * Time Complexity: O(log N)
 * Space Complexity: O(log N)
 *
 * #has-tables #numbers
 */

const MAX_DEPTH = 10;

const SQUARES: Record<number, number> = {
  0: 0,
  1: 1,
  2: 2 ** 2,
  3: 3 ** 2,
  4: 4 ** 2,
  5: 5 ** 2,
  6: 6 ** 2,
  7: 7 ** 2,
  8: 8 ** 2,
  9: 9 ** 2,
};

const HAPPY_NUMBERS: Record<number, boolean> = {};

function splitNumber(n: number): number[] {
  const digits: number[] = [];
  let target = n;

  while (target > 0) {
    digits.push(target % 10);
    target = Math.floor(target / 10);
  }

  return digits;
}

function isHappyNumber(n: number): boolean {
  if (n < 0) {
    return false;
  }

  let target = n;
  let iteration = 0;

  while (target !== 1 && iteration < MAX_DEPTH) {
    iteration += 1;
    const numbers = splitNumber(target);
    target = numbers.reduce((accumulator, currentValue) => {
      return accumulator + SQUARES[currentValue];
    }, 0);

    if (HAPPY_NUMBERS[target]) {
      return true;
    }
  }

  if (target === 1) {
    HAPPY_NUMBERS[n] = true;
  }

  return target === 1;
}

describe('happy number', () => {
  test('should return `true`', () => {
    let n = 19;
    let result = isHappyNumber(n);
    expect(result).toEqual(true);

    n = 7;
    result = isHappyNumber(n);
    expect(result).toEqual(true);

    n = 97;
    result = isHappyNumber(n);
    expect(result).toEqual(true);
  });

  test('should return `false`', () => {
    const n = 2;
    const result = isHappyNumber(n);
    expect(result).toEqual(false);
  });
});
