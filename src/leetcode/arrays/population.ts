/**
 * Maximum Population Year
 * https://leetcode.com/problems/maximum-population-year/description
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function maximumPopulation(logs: number[][]): number {
  const population = 1;
  let year = logs[0][0];

  for (let i = 0; i < logs.length; i++) {
    const outerRange = logs[i];

    let innerIndex = i;
    let innerRange = logs[innerIndex];
    let innerPopulation = 0;

    while (innerRange[0] < outerRange[1] && innerIndex < logs.length - 1) {
      innerPopulation += 1;
      innerIndex += 1;
      innerRange = logs[innerIndex];
    }

    if (innerPopulation > population) {
      year = logs[innerIndex - 1][0];
    }
  }

  return year;
}

//
//

describe('Maximum Population Year', () => {
  test('simple cases', () => {
    expect(
      maximumPopulation([
        [1993, 1999],
        [2000, 2010],
      ]),
    ).toEqual(1993);

    expect(
      maximumPopulation([
        [1950, 1961],
        [1960, 1971],
        [1970, 1981],
      ]),
    ).toEqual(1960);
  });

  test('advanced cases', () => {
    expect(
      maximumPopulation([
        [1982, 1998],
        [2013, 2042],
        [2010, 2035],
        [2022, 2050],
        [2047, 2048],
      ]),
    ).toEqual(2022);
  });
});
