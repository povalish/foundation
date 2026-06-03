function twoSum(nums: number[], target: number): [number, number] {
  const numWithIndex = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const diffIndex = numWithIndex.get(target - nums[index]);

    if (diffIndex !== undefined) return [diffIndex, index];
    else numWithIndex.set(nums[index], index);
  }

  return [-1, -1];
}

//
//

describe('Two Sum', () => {
  it('should pass basic cases', () => {
    expect(twoSum([3, 4, 5, 6], 7)).toEqual([0, 1]);
  });
});
