/* Given a string, return the character that has the maximum frequency.
If multiple characters occur the max number of times, return the character that occurs first. 

Example:
maxChar('good morning') -> 'o'
maxChar('abbcc') -> 'b'
*/

/* OPTION 1: most basic solution */

// input: string
// output: string
const maxChar = char => {
  // edge case - if the passed-in char isn't a string, return 'parameter must be a string'
  if (typeof char !== 'string') return 'parameter must be a string';
  // declare a const count initialized to an empty object
  const count = {};
  // loop over the passed in string
  for (let i = 0; i < char.length; i++) {
    // if the char doesn't exist as a key in obj, add it, assigning it to 1 
    if (!count[char[i]]) count[char[i]] = 1;
    // if it does exist, increment it 
    else count[char[i]]++;
  }

  // check to see the index if there are duplicates
  // declare variable maxCharCandidate 
  // declare variable maxFrequency initialized to -Infinity
  let maxCharCandidate;
  let maxFrequency = -Infinity;

  // destructure key/value pairs from count 
  for (let [key, value] of Object.entries(count)) {
    // if current val is greater than maxFrequency
    if (value > maxFrequency) {
      // reassign maxCharCandidate to current key
      maxCharCandidate = key;
      // reassign maxFrequency to current value
      maxFrequency = value;
    }
  }
  // return maxCharCandidate
  return maxCharCandidate;
}

/* //TESTS: 
console.log(maxChar('good morning')); // -> 'o'
console.log(maxChar('abbcc')); // -> 'b'
console.log(maxChar(123445)); // -> 'parameter must be a string'
 */


/* OPTION 2: using a Map */

const maxChar2 = char => {
  
}