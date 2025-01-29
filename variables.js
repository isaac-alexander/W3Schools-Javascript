// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:

// Automatically
// Using var
// Using let
// Using const
// In this first example, x, y, and z are undeclared variables.

// They are automatically declared when first used:

// Example
x = 5;
y = 6;
z = x + y;

 console.log("The value of z is: " + z);

//  Note
// It is considered good programming practice to always declare variables before use.

// From the examples you can guess:

// x stores the value 5
// y stores the value 6
// z stores the value 11

// Example using var

var x = 5;
var y = 6;
var z = x + y;
 
console.log("The value of z is: " + z);

// Note
// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

// Example using let

let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;

console.log("The value of z1 is: " + z1);

// Example using const

const x2 = 5;
const y2 = 6;
const z2 = x2 + y2;

console.log("The value of z2 is: " + z2);

// Mixed Example

 const price1 = 5;
 const price2 = 6;
 let total = price1 + price2;

 console.log("The total is: " + total);

// The two variables price1 and price2 are declared with the const keyword.

// These are constant values and cannot be changed.

// The variable total is declared with the let keyword.

// The value total can be changed.

// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.



// Just Like Algebra
// Just like in algebra, variables hold values:

// let x = 5;
// let y = 6;
// Just like in algebra, variables are used in expressions:

// let z = x + y;
// From the example above, you can guess that the total is calculated to be 11.

// Note
// Variables are containers for storing values.


// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.

// These unique names are called identifiers.

// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// Note
// // JavaScript identifiers are case-sensitive.

// The Assignment Operator
// In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

// This is different from algebra. The following does not make sense in algebra:

// x = x + 5
// In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

// (It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

// Note
// The "equal to" operator is written like == in JavaScript.
 

// JavaScript Data Types

// JavaScript variables can hold numbers like 100 and text values like "John Doe".

// In programming, text values are called text strings.

// JavaScript can handle many types of data, but for now, just think of numbers and strings.

// Strings are written inside double or single quotes. Numbers are written without quotes.

// If you put a number in quotes, it will be treated as a text string.

// Example

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

console.log(pi + " " + person + " " + answer);


// Declaring a JavaScript Variable
// Creating a variable in JavaScript is called "declaring" a variable.

// You declare a JavaScript variable with the var or the let keyword:

 //var carName;
// or:
 //let carName;

//  After the declaration, the variable has no value (technically it is undefined).

// To assign a value to the variable, use the equal sign:

///carName = "Volvo";

// You can also assign a value to the variable when you declare it:

let carName1 = "Volvo";

console.log(carName1);

// Note

// It's a good programming practice to declare all variables at the beginning of a script.

// One Statement, Many Variables
// You can declare many variables in one statement.

// Start the statement with let and separate the variables by comma:

// Example

let person$ = "John Doe", carName$ = "Volvo", price$ = 200;

console.log(carName$); //Volvo

// A declaration can span multiple lines:

// Example

let person3 = "John Doe",
carName3 = "Volvo",
price3 = 200;

console.log(carName3); //Volvo

// Value = undefined
// In computer programs, variables are often declared without a value. The value can be so
// mething that has to be calculated, or something that will be provided later, like user input.

// A variable declared without a value will have the value undefined.

// The variable carName will have the value undefined after the execution of this statement:

// Example

let carName4;

console.log(carName4); //undefined

// Re-Declaring JavaScript Variables
// If you re-declare a JavaScript variable declared with var, it will not lose its value.

// The variable carName will still have the value "Volvo" after the execution of these statements:

// Example

var carName5 = "Volvo";
var carName5;

console.log(carName5); //Volvo

// Note
// You cannot re-declare a variable declared with let or const.

// This will not work:

// let carName = "Volvo";
// let carName;

// JavaScript Arithmetic
// As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

// Example

let x$ = 5 + 2 + 3;

console.log(x$); //10

// You can also add strings, but strings will be concatenated:

// Example

let x_ = "John" + " " + "Doe";

console.log(x_); //John Doe

// Also try this:

// Example

let x3 = "5" + 2 + 3;

console.log(x3); //523

// Note
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

// Now try this:

// Example

let x4 = 2 + 3 + "5"; //55

// JavaScript Dollar Sign $
// Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

// Example

let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

console.log( $$$ + $myMoney); //7

// Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

// In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

// JavaScript Underscore (_)
// Since JavaScript treats underscore as a letter, identifiers containing _ are valid variable names:

// Example

let _lastName = "Johnson";
let _x = 2;
let _100 = 5;

console.log( _x + _100);  //7
