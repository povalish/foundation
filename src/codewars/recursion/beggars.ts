/**
 * English beggars
 * https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript
 *
 * Time Complexity: O(N)
 * Space Complexity: O(K) // K - amount of beggars
 *
 * #recursion
 */

function beggars(values: number[], n: number): number[] {
  if (values.length === 0 || n === 0) {
    return [];
  }

  if (n === 1) {
    return [values.reduce((acc, val) => acc + val, 0)];
  }

  if (values.length <= n) {
    const result = values;
    const requiredSpace = n - values.length;
    for (let i = 0; i < requiredSpace; i++) {
      result.push(0);
    }

    return result;
  }

  const bucket: number[] = [];

  const beggar = (name: number, index: number): void => {
    if (index > values.length - 1) {
      return;
    }

    bucket[name] = bucket[name] + values[index];
    beggar(name, index + n);
  };

  for (let i = 0; i < n; i++) {
    bucket.push(0);
    beggar(i, i);
  }

  return bucket;
}

//
//

describe('English beggars', () => {
  test('simple tests', () => {
    expect(beggars([1, 2, 3, 4, 5], 1)).toEqual([15]);
    expect(beggars([1, 2, 3, 4, 5], 2)).toEqual([9, 6]);
    expect(beggars([1, 2, 3, 4, 5], 3)).toEqual([5, 7, 3]);
    expect(beggars([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5, 0]);
    expect(beggars([993, 2, 2, 7, 68, 411], 12)).toEqual([993, 2, 2, 7, 68, 411, 0, 0, 0, 0, 0, 0]);
    expect(beggars([1, 2, 3, 4, 5], 0)).toEqual([]);
  });
});
