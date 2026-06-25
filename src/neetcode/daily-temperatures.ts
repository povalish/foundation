/**
 * Daily Temperatures
 * https://neetcode.io/problems/daily-temperatures/question?list=neetcode150
 */

type HistoryRecord = {
  temperature: number;
  day: number;
};

function dailyTemperatures(temperatures: number[]): number[] {
  const history: HistoryRecord[] = [];
  const report: number[] = new Array(temperatures.length).fill(0);

  history.push({ temperature: temperatures[0], day: 0 });

  for (let day = 1; day < temperatures.length; day++) {
    const temperature = temperatures[day];

    while (history.length > 0 && temperature > history[history.length - 1].temperature) {
      const record = history.pop()!;
      report[record.day] = day - record.day;
    }

    history.push({ temperature, day });
  }

  return report;
}

//

// dailyTemperatures([30, 38, 30, 36, 35, 40, 28]);

describe('Daily Temperatures', () => {
  it('should pass basic cases', () => {
    expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
    expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0]);
  });
});
