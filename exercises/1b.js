// https://tech-docs.corndel.com/js/array-slice.html

/**
 * Returns the middle elements of the array, without the first and last
 * elements.
 *
 * e.g. [4, 6, 1, 7, 9] => [6, 1, 7]
 *
 * @param {Array} arr - The array to process
 * @returns {Array} The array containing only the middle elements
 */
export function getMiddle(arr) {
  // Slice it to only get the middle 3
  const result = arr.slice(1, -1)
  // Return the result
  return result
}

// const testArray = [1, 2, 3]
// const result = getMiddle(testArray)
// console.log(result)
