// Array Iteration Methods
// Array iteration methods operate on every array item:

// Array forEach
// Array map()
// Array flatMap()
// Array filter()
// Array reduce()
// Array reduceRight()
// Array every()
// Array some()
// Array from()
// Array keys()
// Array entries()
// Array with()
// Array Spread (...)

// See Also:
// Basic Array Methods
// Array Search Methods
// Array Sort Methods	

// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// Example
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction)

// function myFunction(value, index, array) {
//   txt += value + " "; 
// }

//CHECK********************************
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// The example above uses only the value parameter. The example can be rewritten to:

// Example



//////////////////////////////////////////////////////////////////
// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:

// Example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2); //[ 90, 8, 18, 32, 50 ]

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// When a callback function uses only the value parameter, the index and array parameters can be omitted:

const numbers1a = [45, 4, 9, 16, 25];
const numbers2a = numbers1.map(myFunction);
function myFunction(value) {
  return value * 2;
}
console.log(numbers2); //[ 90, 8, 18, 32, 50 ]
