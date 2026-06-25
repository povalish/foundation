/**
 * Baseball Game
 * https://neetcode.io/problems/baseball-game/question?list=neetcode250
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (const op of operations) {
    if (op === '+') {
      const right = stack.pop()!;
      const left = stack.pop()!;
      stack.push(right);
      stack.push(left);
      stack.push(right + left);
    } else if (op === 'C') {
      stack.pop();
    } else if (op === 'D') {
      const last = stack.pop()!;
      stack.push(last);
      stack.push(last * 2);
    } else {
      stack.push(parseInt(op));
    }
  }

  return stack.reduce((prev, curr) => prev + curr, 0);
}

//

describe('Baseball Game', () => {
  it('should pass basic cases', () => {
    expect(calPoints(['1', '2', '+', 'C', '5', 'D'])).toEqual(18);
    expect(calPoints(['5', 'D', '+', 'C'])).toEqual(15);
  });
});
