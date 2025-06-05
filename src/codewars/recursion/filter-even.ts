function filterEven(nums: number[]): number[] {
  const result: number[] = [];

  const run = (part: number[]): void => {
    if (part.length === 0) {
      if (part[0] % 2 === 0) result.push(part[0]);
      return;
    }

    if (part[0] % 2 === 0) result.push(part[0]);
    run(part.slice(1, part.length));
  };

  run(nums);
  return result;
}

//
//

describe('return new array with even numbers', () => {
  test('should pass test', () => {
    expect(filterEven([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
});
