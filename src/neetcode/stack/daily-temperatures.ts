/**
 * Daily Temperatures
 * https://neetcode.io/problems/daily-temperatures/question?list=neetcode150
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const history: [number, number][] = []; // [temperature, day]
  const report = new Array(temperatures.length).fill(0);

  temperatures.forEach((temperature, day) => {
    while (history.length > 0 && temperature > history[history.length - 1][0]) {
      const [, d] = history.pop()!;
      report[d] = day - d;
    }

    history.push([temperature, day]);
  });

  return report;
}

//
//

describe('Daily Temperatures', () => {
  it('should pass basic cases', () => {
    expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
    expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0]);
  });
});
