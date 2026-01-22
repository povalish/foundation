/**
 * Maximum Enemy Forts That Can Be Captured
 * https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/description
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

const isEnemy = (fort: number): boolean => fort === 0;
const isUnderCommand = (fort: number): boolean => fort === 1;
const isEmpty = (fort: number): boolean => fort === -1;

function captureForts(forts: number[]): number {
  let isCapturedFortBefore = false;
  let isAnyUnderCommand = false;
  let captured = 0;
  let maxCaptured = 0;

  for (const fort of forts) {
    if (isEnemy(fort) && isCapturedFortBefore) {
      captured += 1;
    }

    if ((isUnderCommand(fort) || isEmpty(fort)) && isCapturedFortBefore) {
      maxCaptured = Math.max(captured, maxCaptured);
      captured = 0;
    }

    if ((isUnderCommand(fort) || isEmpty(fort)) && !isCapturedFortBefore) {
      isCapturedFortBefore = true;
    }

    if (isUnderCommand(fort)) {
      isAnyUnderCommand = true;
    }
  }

  return isAnyUnderCommand ? maxCaptured : 0;
}

//
//

describe('Maximum Enemy Forts That Can Be Captured', () => {
  test('simple cases', () => {
    expect(captureForts([0, 0, 1, 0, 0, 0, -1])).toEqual(3);
    expect(captureForts([1, 0, 0, -1, 0, 1, 0, 0, 0, -1])).toEqual(3);
    expect(captureForts([1, -1, 0, 0, 0, 1, 0, 0, -1])).toEqual(3);

    expect(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])).toEqual(4);
    expect(captureForts([0, 0, 1, -1])).toEqual(0);
    expect(captureForts([-1, -1, 1, -1, -1, 0])).toEqual(0);
  });

  test('advanced cases', () => {
    expect(captureForts([-1, 0, -1, 0, 1, 1, 1, -1, -1, -1])).toEqual(1);
  });
});
