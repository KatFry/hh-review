/* Given a string, return the character that has the maximum frequency.
If multiple characters occur the max number of times, return the character that occurs first. 

Example:
maxChar('good morning') -> 'o'
maxChar('abbcc') -> 'b'
*/

/* OPTION 1: most basic solution */

// input: string
// output: string
const maxChar = str => {
  // edge case - if the passed-in char isn't a string, return 'parameter must be a string'
  if (typeof str !== 'string') return 'parameter must be a string';
  // declare a const count initialized to an empty object
  const count = {};
  // loop over the passed in string
  for (let i = 0; i < str.length; i++) {
    // if the char doesn't exist as a key in obj, add it, assigning it to 1 
    if (!count[str[i]]) count[str[i]] = 1;
    // if it does exist, increment it 
    else count[str[i]]++;
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

const maxChar2 = str => {
  // edge case - if the passed-in char isn't a string, return 'parameter must be a string'
  if (typeof str !== 'string') return 'parameter must be a string';
  // declare a const initialized to a new instance of a Map constructor
  const charMap = new Map();
  // iterate over the passed-in string 
  for (const char of str) {
    // if the char doesn't exist in the map yet,  add it (use .has and .set)
    // .set uses parameters key and value, so 0 here to initialize it to 0 
    if (!charMap.has(char)) charMap.set(char, 0);
    // otherwise increment value by 1
    charMap.set(char, charMap.get(char) + 1); 
  }

  // find max occurring character
  let maxCharCandidate;
  let maxFrequency = 0; 

  // iterate over the char and freq of the map
  for (let [char, freq] of charMap.entries()) {
    // if freq is greater than max Frequency
    if (freq > maxFrequency) {
      // reassign maxCharCandidate to char
      maxCharCandidate = char;
      // reassign maxFrequency to freq 
      maxFrequency = freq;
    }
  }
  // return maxCharCandidate
  return maxCharCandidate;
}

/* //TESTS: 
console.log(maxChar2('good morning')); // -> 'o'
console.log(maxChar2('abbcc')); // -> 'b'
console.log(maxChar2(123445)); // -> 'parameter must be a string'
 */