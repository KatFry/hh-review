/* 
Given an array of integers and a target integer, 
return true if a pair of integers exist in the array that add up to the target. 
Return false otherwise. 

In second edition of the problem, return the indices of the numbers that add up to the target. 

Examples: 
twoSum([2, 4, 5], 9) // -> true, [1, 2]
twoSum([2, 4, 5], 8) // -> false 
twoSum([5, -1, -2, 3], 1) // -> true, [2, 3]
*/

/* OPTION 1: naive solution - O(n^2) because of nested loops
not a great solution with a large input array!  */

// input: array, target number
// output: boolean 
const twoSum1 = (arr, target) => {
  // iterate over the passed-in array 
  for (let i = 0; i < arr.length; i++) {
    // loop again to check every integer after it and check the sum 
    for (let j = i + 1; j < arr.length; j++) {
      // if the sum of the two equals the target, return true 
      if (arr[i] + arr[j] === target) return true;
    }
  }
  // return false otherwise 
  return false;
}

/* // TESTS: 
console.log(twoSum1([2, 4, 5], 9)); // -> true, [1, 2]
console.log(twoSum1([2, 4, 5], 8)); // -> false 
console.log(twoSum1([5, -1, -2, 3], 1)); // -> true, [2, 3]
*/


/* OPTION 2: better solution - O(n) because it uses a set */
const twoSum2 = (arr, target) => {
  // initialize a new Set
  const seen = new Set();
  // loop through each num in the array
  for (const num of arr) {
    // assign a constant complement to the target minus the current num you're checking
    const complement = target - num;
    // if the set has the complement, return true (it will add up to the target) 
    if (seen.has(complement)) return true;
    // add each num into the set 
    seen.add(num);
  }
  // return false otherwise
  return false;
}

/* // TESTS: 
console.log(twoSum2([2, 4, 5], 9)); // -> true, [1, 2]
console.log(twoSum2([2, 4, 5], 8)); // -> false 
console.log(twoSum2([5, -1, -2, 3], 1)); // -> true, [2, 3]
 */

/* OPTION 3: returning indices instead, still O(n)
this solution works, but a Map would be better to access indices directly (option 4) 
*/

// input: array, target number
// output: array of indices of numbers that added to target number 
const twoSum3 = (arr, target) => {
  // initialize a new set 
  const seen = new Set();
  // loop through each num in the array 
  for (let i = 0; i < arr.length; i++) {
    // assign a constant complement to the target minus the current num (array[i])
    const complement = target - arr[i];
    // if the set has the complement, return the indices of the complement and i  
    if (seen.has(complement)) return [arr.indexOf(complement), i];
    // add each num to the set
    seen.add(arr[i]);
  }
  // return 'numbers summing to target not found' 
  return 'numbers summing to target not found';
}

/* // TESTS: 
console.log(twoSum3([2, 4, 5], 9)); // ->. [1, 2]
console.log(twoSum3([2, 4, 5], 8)); // -> 'numbers summing to target not found'
console.log(twoSum3([5, -1, -2, 3], 1)); // -> [2, 3]
*/


/* OPTION 4: using a Map to return indices instead, O(n) with more efficient lookup*/
const twoSum4 = (arr, target) => {
  // initialize a new map
  const seen = new Map();
  // iterate over the array 
  for (let i = 0; i < arr.length; i++) {
    // declare the complement assigned to target minus the array at i 
    const complement = target - arr[i]; 
    // if the map has the complement, return an array of the complement and i 
    if (seen.has(complement)) return [seen.get(complement), i];
    // set the key arr[i] in the map to the value of i 
    seen.set(arr[i], i);
  }
  // return null otherwise 
  return null; 
}


/* // TESTS: 
console.log(twoSum4([2, 4, 5], 9)); // -> [1, 2]
console.log(twoSum4([2, 4, 5], 8)); // -> null
console.log(twoSum4([5, -1, -2, 3], 1)); // -> [2, 3]
*/
