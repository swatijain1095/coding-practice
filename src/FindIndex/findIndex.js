/**
 * This function returns the index of the first element in the array that satisfies the provided testing function.
 * Otherwise, it returns -1, indicating that no element passed the test.
 *
 * @param {Array} array - The array to search.
 * @param {Function} predicate - The function invoked per iteration.
 * @param {number} [fromIndex=0] - The index to start searching from.
 * @returns The index of the found element, else -1.
 */
export default function findIndex(array, predicate, fromIndex = 0) {
  // throw 'Not implemented!';
  const i = array.length;
  const startIndex = fromIndex >= 0 ? fromIndex : Math.max(i + fromIndex, 0);

  for (let index = startIndex; index < i; index++) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
