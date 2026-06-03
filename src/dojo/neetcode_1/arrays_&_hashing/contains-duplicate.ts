function hasDuplicate(nums: number[]): boolean {
  const freq = new Map<number, boolean>();
  return nums.some((num) => {
    if (freq.has(num)) return true;
    freq.set(num, true);
  });
}

//
//

describe('Contains Duplicate', () => {
  it('should pass basic cases', () => {
    expect(hasDuplicate([1, 2, 3, 3])).toEqual(true);
    expect(hasDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
