/**
 * Evaluate Reverse Polish Notation
 * https://neetcode.io/problems/evaluate-reverse-polish-notation/question?list=neetcode150
 */

const operations: Record<string, (a: number, b: number) => number> = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

function evalRPN(tokens: string[]): number {
  const expressions: number[] = [];

  for (const token of tokens) {
    const operation = operations[token];
    if (!operation) expressions.push(parseInt(token));
    else {
      const right = expressions.pop()!;
      const left = expressions.pop()!;
      const result = operation(left, right);
      expressions.push(result);
    }
  }

  return expressions[expressions.length - 1];
}

//

describe('Evaluate Reverse Polish Notation', () => {
  it('should pass basic cases', () => {
    expect(evalRPN(['1', '2', '+', '3', '*', '4', '-'])).toEqual(5);
  });
});
