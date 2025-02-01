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
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //Banana,Orange,Apple,Mango

//////////////////////////////////////////////////////////////////////
// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:

// Example
const cars8 = ["Saab", "Volvo", "BMW"];
console.log(cars8); //[ 'Saab', 'Volvo', 'BMW' ]
