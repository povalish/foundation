/**
 * Given two arrays of strings list1 and list2, find the common
 * strings with the least index sum.
 *
 * A common string is a string that appeared in both list1 and list2.
 *
 * A common string with the least index sum is a common string such that if it
 * appeared at list1[i] and list2[j] then i + j should be the minimum value among
 * all the other common strings.
 *
 * Return all the common strings with the least index sum.
 * Return the answer in any order.
 *
 * Time Complexity: O(N + M)
 * Space Complexity: O(N)
 */

function findRestaurant(list1: string[], list2: string[]): string[] {
  const list1Indecies = new Map<string, number>();
  const commonIndexiesSum = new Map<string, number>();
  const result: string[] = [];

  list1.forEach((name, index) => {
    list1Indecies.set(name, index);
  });

  let minIndex = Infinity;

  list2.forEach((name, index) => {
    if (list1Indecies.has(name)) {
      const sumOfIndecies = index + list1Indecies.get(name)!;
      commonIndexiesSum.set(name, sumOfIndecies);

      if (sumOfIndecies < minIndex) {
        minIndex = sumOfIndecies;
      }
    }
  });

  for (const [name, index] of commonIndexiesSum.entries()) {
    if (index === minIndex) {
      result.push(name);
    }
  }

  return result;
}

describe('find restaurant', () => {
  test('should return `["Shogun"]`', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];
    const result = findRestaurant(list1, list2);
    expect(result).toEqual(['Shogun']);
  });

  test('should return `["Shogun"]`', () => {
    const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
    const list2 = ['KFC', 'Shogun', 'Burger King'];
    const result = findRestaurant(list1, list2);
    expect(result).toEqual(['Shogun']);
  });

  test('should return `["sad","happy"]`', () => {
    const list1 = ['happy', 'sad', 'good'];
    const list2 = ['sad', 'happy', 'good'];
    const result = findRestaurant(list1, list2);
    expect(result).toEqual(['sad', 'happy']);
  });
});
