/**
 * Distribute Money to Maximum Children
 * https://leetcode.com/problems/distribute-money-to-maximum-children
 */

function distMoney(money: number, children: number): number {
  if (money < children) return -1;
  if (money % 8 === 0 && money / 8 === children) return children;

  let result = 0;

  for (let i = 1; i <= children; i++) {
    const requiredMoney = 8 * i;
    const balance = money - requiredMoney;

    if (children === i && balance !== 0) return result;
    if (balance === 4 && children === i + 1) return result;
    if (balance < children - i) return result;

    result += 1;
  }

  return result;
}

//
//

describe('Distribute Money to Maximum Children', () => {
  test('simple cases', () => {
    expect(distMoney(8, 1)).toEqual(1);
    expect(distMoney(12, 2)).toEqual(0);
    expect(distMoney(16, 2)).toEqual(2);
    expect(distMoney(20, 2)).toEqual(1);

    expect(distMoney(20, 3)).toEqual(1);
    expect(distMoney(16, 2)).toEqual(2);
    expect(distMoney(9, 2)).toEqual(1);
    expect(distMoney(9, 1)).toEqual(0);
  });
});
