/**
 * You are keeping the scores for a baseball game with strange rules.
 * At the beginning of the game, you start with an empty record.
 *
 * You are given a list of strings operations, where operations[i] is
 * the ith operation you must apply to the record and is one of the following:
 *
 * An integer x.
 * Record a new score of x.
 *
 * '+'.
 * Record a new score that is the sum of the previous two scores.
 *
 * 'D'.
 * Record a new score that is the double of the previous score.
 *
 * 'C'.
 * Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the operations.
 *
 * The test cases are generated such that the answer and all intermediate
 * calculations fit in a 32-bit integer and that all operations are valid.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * #stacks
 */

import { Stack } from '@data-structures/stack/Stack.array';

function calPoints(operations: string[]): number {
  const stack = new Stack<number>();

  operations.forEach((operation) => {
    switch (operation) {
      case 'C':
        stack.pop();
        break;

      case 'D':
        stack.push(stack.read()! * 2);
        break;

      case '+': {
        const last = stack.pop()!;
        const prelast = stack.read()!;
        stack.push(last);
        stack.push(last + prelast);
        break;
      }

      default:
        stack.push(Number(operation));
        break;
    }
  });

  let result = 0;

  while (stack.length !== 0) {
    result += stack.pop()!;
  }

  return result;
}

//
//

describe('baseball game calculations', () => {
  test('should return `30`', () => {
    const ops = ['5', '2', 'C', 'D', '+'];
    const result = calPoints(ops);
    expect(result).toEqual(30);
  });

  test('should return `27`', () => {
    const ops = ['5', '-2', '4', 'C', 'D', '9', '+', '+'];
    const result = calPoints(ops);
    expect(result).toEqual(27);
  });

  test('should return `0`', () => {
    const ops = ['1', 'C'];
    const result = calPoints(ops);
    expect(result).toEqual(0);
  });
});
