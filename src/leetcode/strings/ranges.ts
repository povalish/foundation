function findMin(map: Map<number, number>): number {
  if (map.size === 0) return 0;

  let min = Infinity;
  map.forEach((value, key) => {
    if (key < min) min = key;
  });

  return min;
}

/**
 * Complexity: O(n)
 */
function splitRanges(array: number[]): string {
  const map = new Map<number, number>();

  // fill the map O(n)
  array.forEach((element) => {
    if (map.has(element - 1)) map.set(element - 1, element);
    if (map.has(element + 1)) map.set(element, element + 1);
    else map.set(element, -1);
  });

  const result: string[] = [];

  // Finding ranges O(n)
  while (map.size !== 0) {
    const startKey = findMin(map);
    let endKey = startKey;
    let savedKey = startKey;

    while (endKey !== -1) {
      savedKey = endKey;
      endKey = map.get(endKey)!;
      map.delete(savedKey);
    }

    if (startKey === savedKey) result.push(`${startKey}`);
    else result.push(`${startKey}-${savedKey}`);
  }

  return result.join(',');
}

//
//

describe('split ranges', () => {
  test('basic cases', () => {
    const array = [1, 3, 4, 2, 8, 9, 11, 0];
    expect(splitRanges(array)).toEqual('0-4,8-9,11');
  });

  test('basic cases', () => {
    const array = [0, 4, 10, 3, 5];
    expect(splitRanges(array)).toEqual('0,3-5,10');
  });
});
