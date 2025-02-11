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

//////////////////////////////////////////////////////////////////////
// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:

// Example
const points = [40, 100, 1, 5, 25, 10];
console.log(points); //[ 40, 100, 1, 5, 25, 10 ]

points.sort(function(a, b){return a - b});
console.log(points); //[ 1, 5, 10, 25, 40, 100 ]

// Use the same trick to sort an array descending:

// Example
const points1 = [40, 100, 1, 5, 25, 10];
console.log(points1); //[ 40, 100, 1, 5, 25, 10 ]

points1.sort(function(a, b){return b - a});
console.log(points1);  //[ 100, 40, 25, 10, 5, 1 ]

/////////////////////////////////////////////////////////////////////////

// The Compare Function
// The purpose of the compare function is to define an alternative sort order.

// The compare function should return a negative, zero, or positive value, depending on the arguments:

// function(a, b){return a - b}
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.

// Example:

// The compare function compares all the values in the array, two values at a time (a, b).

// When comparing 40 and 100, the sort() method calls the compare function(40, 100).

// The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

// You can use this code snippet to experiment with numerically and alphabetically sorting:

//Example
// const points2 = [40, 100, 1, 5, 25, 10];
// console.log(points2);


// function myFunction1(points2) {
//   return points2.sort();
// }

// const Points2 = myFunction1(points2);
// console.log(points2); [ 1, 10, 100, 25, 40, 5 ]



// function myFunction2(points2) {
//   return points2((a, b) => a - b);

// }

//  myFunction2(  console.log(points2));
//  console.log(points2);
//MISTAKE********* //WILL CHECK*******

/////////////////////////////////////////////////////////////////////
// Sorting an Array in Random Order
// Using a sort function, like explained above, you can sort an numeric array in random order

// Example

// const points3 = [40, 100, 1, 5, 25, 10];
// console.log(points3); //[ 40, 100, 1, 5, 25, 10 ]

// function myFunction() {
//   points3.sort(function(){return 0.5 - Math.random()});
    
// }
// console.log(myFunction());

//MISTAKE******* //WILL CHECK