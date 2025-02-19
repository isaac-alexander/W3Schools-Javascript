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

points.sort(function (a, b) { return a - b });
console.log(points); //[ 1, 5, 10, 25, 40, 100 ]

// Use the same trick to sort an array descending:

// Example
const points1 = [40, 100, 1, 5, 25, 10];
console.log(points1); //[ 40, 100, 1, 5, 25, 10 ]

points1.sort(function (a, b) { return b - a });
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
const points2 = [40, 100, 1, 5, 25, 10];
console.log("First points " + points2);


function myFunction1(points2) {
    return points2.sort();
}

const Points2 = myFunction1(points2);
console.log("First Function Point " + points2);[1, 10, 100, 25, 40, 5]



function myFunction2(points2) {
    points2.sort(function (a, b) { return a - b });

}

console.log("Second Function Point " + points2);
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

////////////////////////////////////////////////////////////////////
// The Fisher Yates Method
// The points.sort() method in the example above is not accurate. It will favor some numbers over others.

// The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!

// In JavaScript the method can be translated to this:

// Example
const points4 = [40, 100, 1, 5, 25, 10];

function myFunction() {
    for (let i = points4.length - 1; i > 0; i--) { //i = 5, True // i = 4, True
        console.log("i is " + i);

        let j = Math.floor(Math.random() * (i + 1)); //6 //0
        console.log("j is " + j);

        let k = points4[i]; //10 //25
        console.log("k is " + k);

        points4[i] = points4[j]; //null, 40
        console.log("points4[i] is " + points4[i]);

        points4[j] = k; //10, 25
        console.log("points4[j] is " + points4[j]);

        console.log("points4 is " + points4); //points4 is 40,100,10,5,25,1

    }
}
myFunction();


// Find the Lowest (or Highest) Array Value
// There are no built-in functions for finding the max or min value in an array.

// To find the lowest or highest value you have 3 options:

// Sort the array and read the first or last element
// Use Math.min() or Math.max()
// Write a home made function
// Find Min or Max with sort()
// After you have sorted an array, you can use the index to obtain the highest and lowest values.

// Sort Ascending:
// Example

const points5 = [40, 100, 1, 5, 25, 10];
points5.sort(function (a, b) { return a - b });

console.log(points5[0]); //1

// Sort Descending:
// Example
const points6 = [40, 100, 1, 5, 25, 10];
points6.sort(function (a, b) { return b - a });
console.log(points6[0]); //100

// Note
// Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.

//////////////////////////////////////////////////////////////////////////
// Using Math.min() on an Array
// You can use Math.min.apply to find the lowest number in an array:

// Example
const points7 = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
console.log(myArrayMin(points7)); //1

// Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).

//////////////////////////////////////////////////////////////////////
// Using Math.max() on an Array
// You can use Math.max.apply to find the highest number in an array:

// Example
const points8 = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points8)) //100;

//   Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).

///////////////////////////////////////////////////////////////////////
// // JavaScript Array Minimum Method
// There is no built-in function for finding the lowest value in a JavaScript array.

// The fastest code to find the lowest number is to use a home made method.

// This function loops through an array comparing each value with the lowest value found:

// Example (Find Min)
const points9 = [40, 100, 1, 5, 25, 10];


function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
console.log("The lowest number is " + myArrayMin(points)); //The lowest number is 1.

///////////////////////////////////////////////////////////////////////
// JavaScript Array Maximum Method
// There is no built-in function for finding the highest value in a JavaScript array.

// The fastest code to find the highest number is to use a home made method.

// This function loops through an array comparing each value with the highest value found:

// Example (Find Max)
const points0 = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
console.log("The highest number is " + myArrayMax(points)); //The highest number is 100

////////////////////////////////////////////////////////////////////////
// Sorting Object Arrays
// JavaScript arrays often contain objects:

// Example
// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// Even if objects have properties of different data types, the sort() method can be used to sort the array.

// The solution is to write a compare function to compare the property values:

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

displayCars();

cars.sort(function (a, b) { return a.year - b.year });
displayCars();
function displayCars() {
}
displayCars()
console.log(cars[0].type + " " + cars[0].year +  " " + cars[1].type + " " + cars[1].year +  " " + cars[2].type + " " + cars[2].year); //Saab 2001 BMW 2010 Volvo 2016

// Comparing string properties is a little more complex:

// Example

// const cars1a = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];
  
//   displayCars1a();
  
//   function myFunction() {
//     cars1a.sort(function(a, b){
//       let x = a.type.toLowerCase();
//       let y = b.type.toLowerCase();
//       if (x < y) {return -1;}
//       if (x > y) {return 1;}
//       return 0;
//     });
//     displayCars1a();
//   }
  
//   function displayCars1a() {
//   }

// ****************I DON'T UNDERSTAND THIS*****************

