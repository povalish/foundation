/**
 * Binary Search.
 * Complexity: O(logN)
 *
 * #sort
 */

export function binarySearchWithRecursion(array: number[], target: number): boolean {
  const find = (startIndex: number, endIndex: number): boolean => {
    if (startIndex === endIndex) {
      return array[startIndex] === target;
    }

    const middleIndex = Math.round((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return true;
    }

    if (target < array[middleIndex]) {
      return find(0, middleIndex - 1);
    }

    if (target > array[middleIndex]) {
      return find(middleIndex + 1, endIndex);
    }

    return false;
  };

  return find(0, array.length - 1);
}

//
//

export function binarySearchWithLoop(array: number[], target: number): boolean {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.round((startIndex + endIndex) / 2);

    if (target === array[middleIndex]) {
      return true;
    }

    if (target < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }

    if (target > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }
  }

  return false;
}
