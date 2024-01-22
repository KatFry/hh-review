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
// output: new array representing union of arrays without duplicates

// adding comments to see if this fixes dev issue

/* OPTION 1: more inelegant solution (naive approach) */
const mergeNoDupes = (...arrays) => {
  // declare a constant unified initialized to an empty array 
  const unified = [];
  // loop over the arrays
  for (const array of arrays) {
    // then check elements in inner array 
    for (const el of array) {
      // if the element at the array position doesn't already exist in the output array, add it 
      if (!unified.includes(el)) unified.push(el); 
    }
  }
  // return the unified array 
  return unified;
}

/* //TESTS:
console.log(mergeNoDupes([1, 3, 7], [2, 3, 9], [9, 13])) // -> [1, 3, 7, 2, 9, 13]
console.log(mergeNoDupes([4, 3])) // -> [4, 3]
console.log(mergeNoDupes([6, 7, 8], [7, 8, 9])) // -> [6, 7, 8, 9] */


/* OPTION 2: using a set */
/* time complexity of this is still O(n), so a good option here!
the nested for loop isn't too bad because set being used to store unique values,
and O(n) where 'n' is the total number of elements across all arrays. */

const mergeNoDupes2 = (...arrays) => {
  // declare a constant assigned to creating a new set 
  const unique = new Set(); 
  // loop over the array of arrays 
  for (const arr of arrays) {
    // loop over individual elements 
    for (const el of arr) {
      // use the .add() method on set - will only add unique values 
      unique.add(el);
    }
  }
  // return an array of the unique values 
  return [...unique];
}

/* //TESTS:
console.log(mergeNoDupes2([1, 3, 7], [2, 3, 9], [9, 13])) // -> [1, 3, 7, 2, 9, 13]
console.log(mergeNoDupes2([4, 3])) // -> [4, 3]
console.log(mergeNoDupes2([6, 7, 8], [7, 8, 9])) // -> [6, 7, 8, 9]  */

