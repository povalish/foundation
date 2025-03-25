import { binarySearchWithRecursion, binarySearchWithLoop } from '../binary';

describe('binary search', () => {
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  describe('with recursion', () => {
    test.for([1, 9, 4, 10])('should return `true`', (target) => {
      const result = binarySearchWithRecursion(sortedArray, target);
      expect(result).toBe(true);
    });

    test('should return false', () => {
      const result = binarySearchWithRecursion(sortedArray, 20);
      expect(result).toBe(false);
    });
  });

  describe('with lopp', () => {
    test.for([1, 9, 4, 10])('should return `true`', (target) => {
      const result = binarySearchWithLoop(sortedArray, target);
      expect(result).toBe(true);
    });

    test('should return false', () => {
      const result = binarySearchWithLoop(sortedArray, 20);
      expect(result).toBe(false);
    });
  });
});
