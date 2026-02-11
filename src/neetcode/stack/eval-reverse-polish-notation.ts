/**
 * Evaluate Reverse Polish Notation
 * https://neetcode.io/problems/evaluate-reverse-polish-notation/question?list=neetcode150
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

type Func = (a: number, b: number) => number;

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  const operations = new Map<string, Func>();
  operations.set('+', (a: number, b: number): number => a + b);
  operations.set('-', (a: number, b: number): number => a - b);
  operations.set('*', (a: number, b: number): number => a * b);
  operations.set('/', (a: number, b: number): number => a / b);

  for (const token of tokens) {
    if (!operations.has(token)) {
      stack.push(parseInt(token));
    }

    if (operations.has(token)) {
      const b = stack.pop();
      const a = stack.pop();
      const func = operations.get(token)!;

      if (a !== undefined && b !== undefined) {
        const result = func(a, b);
        stack.push(Math.trunc(result));
      }
    }
  }

  return Math.trunc(stack[0]);
}

//
//

describe('Evaluate Reverse Polish Notation', () => {
  it('should pass basic cases', () => {
    expect(evalRPN(['1', '2', '+', '3', '*', '4', '-'])).toEqual(5);
  });

  it('should pass advanced cases', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toEqual(22);
  });
});
