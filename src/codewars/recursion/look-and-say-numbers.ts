/**
 * There exists a sequence of numbers that follows the pattern
 * 
 *        1
         11
         21
        1211
       111221
       312211
      13112221
     1113213211
          .
          .
          .
  * 
  * Starting with "1" the following lines are produced by "saying what you see", so that 
  * line two is "one one", line three is "two one(s)", line four is "one two one one".
  * 
  * Starting with "1" the following lines are produced by "saying what you see", so that 
  * line two is "one one", line three is "two one(s)", line four is "one two one one".
  * 
  * Time Complexity: O(N * K)
  * Space Complexity: O(N * K)
  * 
  * #recursion
 */

function countNumbers(data: string[], depth: number): string[] {
  if (depth <= 0) {
    return data;
  }

  let count = 1;
  let result = '';
  const s = data[data.length - 1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count += 1;
    } else {
      result += count + s[i];
      count = 1;
    }
  }

  if (depth === 1) {
    data = [result];
  } else {
    data.push(result);
  }

  return countNumbers(data, depth - 1);
}

function lookAndSay(data: string, len: number): string[] {
  return countNumbers([data], len);
}

//
//

describe('look and say numbers', () => {
  test('should pass', () => {
    const s = '1259';
    const maxDepth = 5;
    const result = lookAndSay(s, maxDepth);
    expect(result[result.length - 1]).toEqual('31131122211211131221151113122119');
  });
});
