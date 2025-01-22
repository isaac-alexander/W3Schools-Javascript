// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:

// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
// Examples

//Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
// const person = {firstName:"John", lastName:"Doe"};

// Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// Date object:
// const date = new Date("2022-03-25");
//////////////////////////////////////////////////////////////////////////

// The Concept of Data Types
// In programming, data types is an important concept.

// To be able to operate on variables, it is important to know something about the type.

// Without data types, a computer cannot safely solve this:

// let x = 16 + "Volvo";

// Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

// JavaScript will treat the example above as:

// let x = "16" + "Volvo";

// Note
// When adding a number and a string, JavaScript will treat the number as a string.

// Example

let a = 16 + "Volvo";

console.log(a); //16Volvo

let b = "Volvo" + 16;

console.log(b); //Volvo16

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let c = 16 + 4 + "Volvo";

console.log(c); //20Volvo

let d = "Volvo" + 16 + 4;

console.log(d); //Volvo164

//In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

//In the second example, since the first operand is a string, all operands are treated as strings.
//////////////////////////////////////////////////////////////////////

// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

// Example
let e;       // Now e is undefined
e = 5;       // Now e is a Number
e = "John";  // Now e is a String

console.log(e); //John
/////////////////////////////////////////////////////////////////////////

// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:

// Example
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

console.log(carName1 + " " + carName2); //Volvo XC60 Volvo XC60

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

console.log(answer1 + " " + answer2 + " " + answer3); //It's alright He is called 'Johnny' He is called "Johnny"
//////////////////////////////////////////////////////////////////////

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// Example
let x1 = 34.00;
let x2 = 34;
let x3 = 3.14;

console.log(x1 + " " + x2 + " " + x3); //34 34 3.14
//////////////////////////////////////////////////////////////

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:

let f = 123e5
let g = 123e-5

console.log(f + " " + g); //12300000   0.00123
/////////////////////////////////////////////////////////////////

// JavaScript BigInt
// All JavaScript numbers are stored in a 64-bit floating-point format.

// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

// Example
// let x = BigInt("123456789012345678901234567890");

////////////////////////////////////////////////////////////////////

// JavaScript Booleans
// Booleans can only have two values: true or false.

// Example
let h = 5;
let i = 5;
let j = 6;

console.log((h == i) + " " + (h == j)); //true  false
//Booleans are often used in conditional testing.
////////////////////////////////////////////////////////////////////////

// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.
// Array indexes are zero-based, which means the first item is [0].

// The following code declares (creates) an array called cars, containing three items (car names):

// Example
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); //Saab

//Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
///////////////////////////////////////////////////////////

// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

// Example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person.firstName + " is " + person.age + " years old."); //John is 50 years old.

//The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
////////////////////////////////////////////////////////////////////

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:

// Example
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

console.log(typeof "" + " " + typeof "John" + " " + typeof "John Doe"); //string string string

//Example
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

console.log(typeof 0 + " " + typeof 314 + " " + typeof 3.14 + " " + typeof (3) + " " + typeof (3 + 4)); //number number number number number
/////////////////////////////////////////////////////////////////////

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Example
// let car;    // Value is undefined, type is undefined

// console.log(car + " " + typeof car); //undefined undefined

// Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
// Example
let car = "Volvo";
car = undefined;    // Value is undefined, type is undefined

console.log("The value of car is " + car + "The typeof car is " + typeof car);  // Value is undefined, type is undefined
/////////////////////////////////////////////////////////////////////////

// Empty Values
// An empty value has nothing to do with undefined.

// An empty string has both a legal value and a type.

// Example
let vehicle = "";    // The value is "", the typeof is "string"

console.log("The value is: " + vehicle + " " + "The type is: " + typeof vehicle ); //The value is: The type is: string
