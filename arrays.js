//JavaScrript Arrays
//An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); //[ 'Saab', 'Volvo', 'BMW' ]

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// const car1 = "Saab";
// const car2 = "Volvo";
// const car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

/////////////////////////////////////////////////////////////////////////
//Creating an Array
//Using an array literal is the easiest way to create a JavaScript Array.

//Syntax:

//const array_name = [item1, item2, ...];

//It is a common practice to declare arrays with the const keyword.

//Example
const cars_ = ["Saab", "Volvo", "BMW"];
console.log(cars_); //[ 'Saab', 'Volvo', 'BMW' ]

//Spaces and line breaks are not important. A declaration can span multiple lines:

//Example
const cars2 = [
    "Saab",
    "Volvo",
    "BMW"
];
console.log(cars2); //[ 'Saab', 'Volvo', 'BMW' ]

//You can also create an array, and then provide the elements:

//Example
const cars3 = [];
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";
console.log(cars3); //[ 'Saab', 'Volvo', 'BMW' ]

/////////////////////////////////////////////////////////////////////////
// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

// Example
const cars4 = new Array("Saab", "Volvo", "BMW");
console.log(cars4); //[ 'Saab', 'Volvo', 'BMW' ]

// The two examples above do exactly the same.

// There is no need to use new Array().

// For simplicity, readability and execution speed, use the array literal method.

////////////////////////////////////////////////////////////////////////
// Accessing Array Elements
// You access an array element by referring to the index number:

const cars5 = ["Saab", "Volvo", "BMW"];
let car = cars5[0];
console.log(car); //Saab
//or
const cars6 = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); //Saab

//note: Array indexes start with 0.[0] is the first element. [1] is the second element.

////////////////////////////////////////////////////////////////////////
// Changing an Array Element
// This statement changes the value of the first element in cars:

// cars[0] = "Opel";

//Example
const cars7 = ["Saab", "Volvo", "BMW"];
cars7[0] = "Opel";
console.log(cars7); //[ 'Opel', 'Volvo', 'BMW' ]

////////////////////////////////////////////////////////////////////////
// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString()); //Banana,Orange,Apple,Mango

//////////////////////////////////////////////////////////////////////
// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
const cars8 = ["Saab", "Volvo", "BMW"];
console.log(cars8); //[ 'Saab', 'Volvo', 'BMW' ]

//////////////////////////////////////////////////////////////////////////

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:

// Array:
const person = ["John", "Doe", 46];
console.log(person[0]); //John

//Objects use names to access its "members". In this example, person.firstName returns John:

// Object:
const person2 = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person2.firstName); //John

///////////////////////////////////////////////////////////////////////

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;

////////////////////////////////////////////////////////////////////////
// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

//cars.length   // Returns the number of elements
//cars.sort()   // Sorts the array

///////////////////////////////////////////////////////////////////////
// The length Property
// The length property of an array returns the length of an array (the number of array elements).

// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits2.length;
console.log(size); //4

//The length property is always one more than the highest array index.

////////////////////////////////////////////////////////////////////////
// Accessing the First Array Element
// Example
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3[0]); //Banana

////////////////////////////////////////////////////////////////////////
// Accessing the Last Array Element
// Example
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4[fruits4.length - 1]); //Mango

//////////////////////////////////////////////////////////////////////
// Looping Array Elements
// One way to loop through an array, is using a for loop:

// Example
const fruits$ = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits$.length;

for (let i = 0; i < fLen; i++) {
    console.log(fruits$[i]);
};

// You can also use the Array.forEach() function:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

/////////////////////////////////////////////////////////////////////////

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

// Example
const fruits5 = ["Banana", "Orange", "Apple"];

function myFunction() {
    let fruits5 = ["Banana", "Orange", "Apple"];
    fruits5.push("Lemon");  // Adds a new element (Lemon) to fruits
    console.log(fruits5);
    
}
myFunction()

// New element can also be added to an array using the length property:

//Example

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6[fruits6.length] = "Lemon";

console.log(fruits6); //  ["Banana", "Orange", "Apple", "Mango", "Lemon"]

// WARNING !

// Adding elements with high indexes can create undefined "holes" in an array:

// Example

const fruits7 = ["Banana", "Orange", "Apple"];
fruits7[6] = "Lemon";
console.log(fruits7);

//////////////////////////////////////////////////////////////////////
// Associative Arrays
// Many programming languages support arrays with named indexes.

// Arrays with named indexes are called associative arrays (or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes.  

//Example
