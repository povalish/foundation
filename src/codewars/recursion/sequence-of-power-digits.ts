/**
 * Let's take an integer number,  start and let's do the iterative process described below:
 *
 * - we take its digits and raise each of them to a certain power, n, and add all those values up. (result = r1)
 * - we repeat the same process with the value r1 and so on, k times.
 *
 *
 * Let's do it with start = 420, n = 3, k = 5
 *
 * 420 ---> 72 (= 4³ + 2³ + 0³) ---> 351 (= 7³ + 2³) ---> 153 ---> 153 ----> 153
 * We can observe that it took 3 steps to reach a cyclical pattern [153](h = 3).
 * The length of this cyclical pattern is 1, patt_len. The last term of our k
 * operations is 153, last_term
 *
 * Now, start = 420, n = 4, k = 30
 *
 * 420 ---> 272 ---> 2433 ---> 434 ---> 593 ---> 7267 --->
 * 6114 ---> 1554 ---> 1507 ---> 3027 ---> 2498 ---> 10929 --->
 * 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 --->
 * 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219 --->
 * 13139 ---> 6725 ---> 4338 ---> 4514 ---> 1138 ---> 4179 ---> 9219......
 *
 * In this example we can observe that the cyclical pattern (cyc_patt_arr) is
 * [13139, 6725, 4338, 4514, 1138, 4179, 9219] with a length of 7, (patt_len = 7), and it
 * took 12 steps (h = 12) to reach the cyclical pattern. The last term after doing 30 operations is 1138
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(log N)
 *
 * #recursion #numbers
 */

type Result = [number, number[], number, number];
// [depth, pattern, pattern length, last element]

function getDigits(n: number): number[] {
  const result: number[] = [];
  while (n !== 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }
  return result;
}

function getSum(nums: number[], pow: number): number {
  return nums.reduce((acc, curr) => acc + curr ** pow, 0);
}

function generateSequence(nums: number[], pow: number, step: number): number[] {
  if (step === 0) {
    return nums;
  }

  const digits = getDigits(nums[nums.length - 1]);
  const sum = getSum(digits, pow);
  nums.push(sum);

  return generateSequence(nums, pow, step - 1);
}

function findPattern(nums: number[]): { index: number; pattern: number[] } {
  const endIndex = nums.findIndex((value, index) => nums.indexOf(value) < index);
  const startIndex = nums.indexOf(nums[endIndex]);

  return { index: startIndex, pattern: nums.slice(startIndex, endIndex) };
}

//
//

function sequenceOfPowerDigits(start: number, pow: number, steps: number): Result {
  const seq = generateSequence([start], pow, steps);
  const { index, pattern } = findPattern(seq);

  return [index, pattern, pattern.length, seq[seq.length - 1]];
}

//
//

describe('Sequence of Power Digits Sum', () => {
  test('Variables with low values', () => {
    expect(sequenceOfPowerDigits(420, 3, 5)).toEqual([3, [153], 1, 153]);
    expect(sequenceOfPowerDigits(420, 4, 30)).toEqual([12, [13139, 6725, 4338, 4514, 1138, 4179, 9219], 7, 1138]);
    expect(sequenceOfPowerDigits(420, 5, 100)).toEqual([
      23,
      [
        9045, 63198, 99837, 167916, 91410, 60075, 27708, 66414, 17601, 24585, 40074, 18855, 71787, 83190, 92061, 66858,
        84213, 34068, 41811, 33795, 79467, 101463,
      ],
      22,
      18855,
    ]);
  });
});
