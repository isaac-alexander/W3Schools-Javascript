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

//////////////////////////////////////////////////////////////////////
// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

// Example
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);   //[ 1, 10,  2, 20,  3, 30,  4, 40,  5, 50, 6, 60 ]

///////////////////////////////////////////////////////////////////////
// JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

// This example creates a new array from elements with a value larger than 18:

// Example

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(over18);  //[ 45, 25 ]

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// In the example above, the callback function does not use the index and array parameters, so they can be omitted:

// Example
const numbersA = [45, 4, 9, 16, 25];
const over18A = numbersA.filter(myFunction);

function myFunction(value) {
    return value > 18;
}
console.log(over18A); //[ 45, 25 ]

////////////////////////////////////////////////////////////////////
// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

// Example
const numbersB = [45, 4, 9, 16, 25];
let sum = numbersB.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log("The sum is " + sum); //The sum is 99

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
// The example above does not use the index and array parameters. It can be rewritten to:

// Example
const numbersC = [45, 4, 9, 16, 25];
let sumC = numbersC.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log("The sum is " + sumC); //The sum is 99

//The reduce() method can accept an initial value:

// Example
const numbersD = [45, 4, 9, 16, 25];
let sumD = numbersD.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
console.log("The sum is " + sumD); //The sum is 199

///////////////////////////////////////////////////////////////////////////

// JavaScript Array reduceRight()
// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() works from right-to-left in the array. See also reduce().

// The reduceRight() method does not reduce the original array.

// This example finds the sum of all numbers in an array:

// Example
const numbersE = [45, 4, 9, 16, 25];
let sumE = numbersE.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log( "The sum is " + sumE); //The sum is 99

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself
// The example above does not use the index and array parameters. It can be rewritten to:

// Example

const numbersF = [45, 4, 9, 16, 25];
let sumF = numbersF.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log("The sum is " + sumE); //The sum is 99

/////////////////////////////////////////////////////////////////////
// JavaScript Array every()
// The every() method checks if all array values pass a test.

// This example checks if all array values are larger than 18:

// Example

const numbersG = [45, 4, 9, 16, 25];
let allOver18 = numbersG.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log("All over 18 is " + allOver18); //All over 18 is false
