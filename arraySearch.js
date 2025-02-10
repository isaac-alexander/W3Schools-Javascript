// Array Find and Search Methods
// Array indexOf()
// Array lastIndexOf()
// Array includes()


// See Also:
// Basic Methods
// Sort Methods
// Iteration Methods	Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

//////////////////////////////////////////////////////////////////////
// JavaScript Array indexOf()
// The indexOf() method searches an array for an element value and returns its position.

// Note: The first item has position 0, the second item has position 1, and so on.

// Example
// Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

console.log( "Apple is found in position " + position); //Apple is found in position 1

// Syntax
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.

///////////////////////////////////////////////////////////////////////

// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// Example
// Search an array for the item "Apple":
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = fruits1.lastIndexOf("Apple") + 1;

console.log("Apple is found in position " + position1); //Apple is found in position 3

// Syntax
// array.lastIndexOf(item, start)
// item	Required. The item to search for
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning

//////////////////////////////////////////////////////////////////////////
// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// Example

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); //true


// Syntax
// array.includes(search-item)
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().

/////////////////////////////////////////////////////////////////////
// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

// Example

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log("First number over 18 is " + first); //First number over 18 is 25

// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

/////////////////////////////////////////////////////////////////////

// JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

// Example
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);

console.log("The last temperature over 40 was " + high); //The last temperature over 40 was 42

///////////////////////////////////////////////////////////////////////

// JavaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.

// Example

const temp2 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp2.findLastIndex(x => x > 40);

console.log("The last temperature over 40 was in position " + pos); //The last temperature over 40 was in position 4
