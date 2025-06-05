/**
 * Hack psw with brute-force way))
 * Compexity: O(26N)
 */
// const symbols = 'abcdefghijklmnopqrstuvwxyz'.split('');
const symbols = 'abc'.split('');

// aaa
// 'abcdefghijklmnopqrstuvwxyz'
// 'abcdefghijklmnopqrstuvwxyz'
// 'abcdefghijklmnopqrstuvwxyz'

function bruteForce(size: number): number {
  const result: string[] = [];

  const generate = (depth: number): string => {
    if (depth < size) {
      return '';
    }

    for (let i = 0; i < symbols.length; i++) {
      return symbols[i] + generate(depth + 1);
    }

    return '';
  };

  generate(0);

  return result.length;
}

//
//

describe.skip('brute force', () => {
  test('should return correct result', () => {
    const result = bruteForce(2);
    expect(result).toEqual(263);

    // result = bruteForce(4);
    // expect(result).toEqual(264);
  });
});
