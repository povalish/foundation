/**
 * Generate Parentheses
 * https://leetcode.com/problems/generate-parentheses/description/?envType=problem-list-v2&envId=dynamic-programming
 */

function generateParenthesis(n: number): string[] {
  if (n === 1) return ['()'];

  const result: string[] = [];

  const generate = (opens: number, closes: number, str: string): void => {
    if (opens === 0 && closes === 0) result.push(str);
    if (opens !== 0) generate(opens - 1, closes, str + '(');
    if (opens < closes) generate(opens, closes - 1, str + ')');
  };

  generate(n - 1, n, '(');

  return result;
}

//
//

describe('Generate Parentheses', () => {
  test('should pass simple cases', () => {
    let n = 2;
    expect(generateParenthesis(n)).toEqual(['(())', '()()']);

    n = 3;
    expect(generateParenthesis(n)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);

    n = 4;
    expect(generateParenthesis(n)).toEqual([
      '(((())))',
      '((()()))',
      '((())())',
      '((()))()',
      '(()(()))',
      '(()()())',
      '(()())()',
      '(())(())',
      '(())()()',
      '()((()))',
      '()(()())',
      '()(())()',
      '()()(())',
      '()()()()',
    ]);
  });
});
