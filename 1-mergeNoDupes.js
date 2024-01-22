/* option shift allows to click multiple lines to type on :) */
/*
Given an arbitrary number of arrays, return a new array
representing the union of the arrays.
Do this in O(n) time.

Example:

mergeNoDupes([1, 3, 7], [2, 3, 9], [9, 13]) -> [1, 3, 7, 2, 9, 13]
mergeNoDupes([4, 3]) -> [4, 3]
mergeNoDupes([6, 7, 8], [7, 8, 9]) -> [6, 7, 8, 9]
*/

// input: multiple arrays 
// output: new array representing. union. of arrays (numbers in order) without duplicates
const mergeNoDupes = (...arrays) => {
  // declare a constant unified initialized to an empty array 

  // loop over the arrays

    // if the element at the array position doesn't already exist in the output array, add it 

  // return the unified array 

}


/* //TESTS:
console.log(mergeNoDupes([1, 3, 7], [2, 3, 9], [9, 13])) // -> [1, 3, 7, 2, 9, 13]
console.log(mergeNoDupes([4, 3])) // -> [4, 3]
console.log(mergeNoDupes([6, 7, 8], [7, 8, 9])) // -> [6, 7, 8, 9]
*/