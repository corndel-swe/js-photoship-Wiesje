// Read https://tech-docs.corndel.com/js/arrays.html first!

/**
 * Returns the sum of the first and last elements of the array.
 *
 * e.g. [4, 1, 9, 5, 2] => 6
 *
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The sum of the first and last elements.
 */
export function firstAddLast(nums) {
  // get the first value of the nums array
  const firstValue = nums[0]
  // get the last value
  const lastValue = nums[nums.length - 1]
  // add the first and last value
  const result = firstValue + lastValue
  // return the result
  return result
}


// let testArray = [1, 2, 3]
// let result = firstAddLast(testArray)
// console.log(result)