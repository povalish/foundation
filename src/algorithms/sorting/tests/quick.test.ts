import { quick } from '../quick';

describe('quick sort', () => {
  test('sorting', () => {
    const array = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(quick(array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
