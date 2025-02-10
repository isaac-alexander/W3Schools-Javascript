// Array Sort Methods
// Alphabetic Sort
// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects

// Numeric Sort
// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()

// See Also:
// Basic Methods
// Search Methods
// Iteration Methods	

///////////////////////////////////////////////////////////////////////

// Sorting an Array
// The sort() method sorts an array alphabetically:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
console.log(fruits);

////////////////////////////////////////////////////////////////
// Reversing an Array
// The reverse() method reverses the elements in an array:

// Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.reverse();
console.log(fruits1); //[ 'Mango', 'Apple', 'Orange', 'Banana' ]

// By combining sort() and reverse(), you can sort an array in descending order:

// Example

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();
fruits2.reverse();

console.log(fruits2); //[ 'Orange', 'Mango', 'Banana', 'Apple' ]

///////////////////////////////////////////////////////////////////////
// JavaScript Array toSorted() Method
// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

//*******I DON'T UNDERSTAND THIS*********
// Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();

console.log(sorted); //[ 'Apr', 'Feb', 'Jan', 'Mar' ]

///////////////////////////////////////////////////////////////////////
// JavaScript Array toReversed() Method
// ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

// Example

const months1 = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months1.toReversed();

console.log(reversed); //[ 'Apr', 'Mar', 'Feb', 'Jan' ]
