// JavaScript Strings
// Strings are for storing text

// Strings are written with quotes

// Using Quotes
// A JavaScript string is zero or more characters written inside quotes.

// Example
let text1 = "John Doe";  // String written inside quotes
console.log(text1); //John Doe
// You can use single or double quotes:

// Example
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

console.log(carName1 + " " + carName2); //Volvo XC60 Volvo XC60
// Note
// Strings created with single or double quotes work the same.

// There is no difference between the two.

// Quotes Inside Quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; 

console.log(answer1 + " " + answer2 + " " + answer3); //It's alright He is called 'Johnny' He is called "Johnny"

// Template Strings
// Templates were introduced with ES6 (JavaScript 2016).

// Templates are strings enclosed in backticks (`This is a template string`).

// Templates allow single and double quotes inside a string:

// Example
 let text2 = `He's often called "Johnny"`;

 console.log(text2); //He's often called "Johnny"
// Note
// Templates are not supported in Internet Explorer.

// String Length
// To find the length of a string, use the built-in length property:

let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text3.length); //26

// Escape Characters
// Because strings must be written within quotes, JavaScript will misunderstand this string:

// let text = "We are the so-called "Vikings" from the north.";
// The string will be chopped to "We are the so-called ".

// To solve this problem, you can use an backslash escape character.

// The backslash escape character (\) turns special characters into string characters:

// Code	Result	Description
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash
// Examples

// \" inserts a double quote in a string:
 let text4 = "We are the so-called \"Vikings\" from the north."
 console.log(text4); //We are the so-called "Vikings" from the north.

// \' inserts a single quote in a string:
 let text5 = 'It\'s alright.';
 console.log(text5); //It's alright

// \\ inserts a backslash in a string:
 let text6 = "The character \\ is called backslash.";
 console.log(text6); //The character \ is called backslash.

// Six other escape sequences are valid in JavaScript:

// Code	    Result
// \b	        Backspace
// \f	        Form Feed
// \n	        New Line
// \r	        Carriage Return
// \t	        Horizontal Tabulator
// \v	        Vertical Tabulator
// Note
// The 6 escape characters above were originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML.

/////////////////////////////////////////////////////////////////////
// Breaking Long Lines
// For readability, programmers often like to avoid long code lines.

// A safe way to break up a statement is after an operator:

///////////////////////////////////////////////////////////////////
// Template Strings
// Templates were introduced with ES6 (JavaScript 2016).

// Templates are strings enclosed in backticks (`This is a template string`).

// Templates allow multiline strings:

// Example

let text =

`The quick
brown fox
jumps over
the lazy dog`;

console.log(text); //The quick brown fox jumps over the lazy dog

////////////////////////////////////////////////////////////////

// JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:
// let x = "John";
// But strings can also be defined as objects with the keyword new:

// let y = new String("John");
// Example

// x1 is a string
 let x1 = "John";

// y1 is an object
let y1 = new String("John");

console.log(typeof x1 + " " + typeof y1); //string object

// Do not create String objects.

// The new keyword complicates the code and slows down execution speed.

// String objects can produce unexpected results:

// When using the == operator, x and y are equal:

 let x2 = "John";        // x2 is a string
 let y2 = new String("John");  // y2 is an object
 console.log((x2==y2)); //true

 let x3 = "John";        // x3 is a string
 let y3 = new String("John");  // y3 is an object
 console.log((x3===y3)); //false

// Note the difference between (x2==y2) and (x3===y3).


 let x4 = new String("John");  // x4 is an object
 let y4 = new String("John");  // y4 is an object
 console.log((x4==y4)); //false

let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
console.log((x===y)); //false
// Comparing two JavaScript objects always returns false.