// JavaScript Numbers
// JavaScript has only one type of number. Numbers can be written with or without decimals.

// Example
const x = 3.14;
const y = 3;

console.log(x + ", " + y); //3.14, 3

// Extra large or extra small numbers can be written with scientific (exponent) notation:

// Example
const x1 = 123e5;
const y1 = 123e-5;

console.log(x1 + ", " + y1);   //12300000, 0.00123


///////////////////////////////////////////////////////////////////////
// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// Value (aka Fraction/Mantissa)	    Exponent	        Sign
// 52 bits (0 - 51) 	                11 bits (52 - 62)	1 bit (63)

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

// Example
const x2 = 999999999999999;
const y2 = 9999999999999999;
console.log(x2 + "," + y2); //999999999999999,10000000000000000

// The maximum number of decimals is 17.

// Floating Precision
// Floating point arithmetic is not always 100% accurate:

const x$ = 0.2 + 0.1;
console.log("0.2 + 0.1 = " + x$); //0.2 + 0.1 = 0.30000000000000004

//To solve the problem above, it helps to multiply and divide:

const x3 = 0.2 + 0.1;
console.log("0.2 + 0.1 = " + x3); //0.2 + 0.1 = 0.30000000000000004

const y3 = (0.2 * 10 + 0.1 * 10) / 10;
console.log("0.2 + 0.1 = " + y3); //0.2 + 0.1 = 0.3

// Adding Numbers and Strings
// WARNING !!

// JavaScript uses the + operator for both addition and concatenation.

// Numbers are added. Strings are concatenated.

// If you add two numbers, the result will be a number:

//Example

const x4 = 10;
const y4 = 20;
const z4 = x4 + y4;

console.log(z4); //30

// If you add two strings, the result will be a string concatenation:

// Example
const x5 = "10";
const y5 = "20";
const z5 = x5 + y5;
console.log(z5); //1020

// If you add a number and a string, the result will be a string concatenation:

// Example

const x6 = 10;
const y6 = "20";
const z6 = x6 + y6;
console.log(z6); //1020

// If you add a string and a number, the result will be a string concatenation:

// Example

const x7 = "10";
const y7 = 20;
const z7 = x7 + y7;
console.log("The result is: " + x7 + y7); //The result is: 1020

// A common mistake is to expect this result to be 30:

// Example

const x8 = 10;
const y8 = 20;
console.log("The result is: " + x8 + y8); //The result is: 1020

// A common mistake is to expect this result to be 102030:

// Example

const x9 = 10;
const y9 = 20;
const z9 = "30";
const result = x9 + y9 + z9;
console.log(result); //3030

// The JavaScript interpreter works from left to right.

// First 10 + 20 is added because x and y are both numbers.

// Then 30 + "30" is concatenated because z is a string.

//////////////////////////////////////////////////////////////////////////
// Numeric Strings
// JavaScript strings can have numeric content:

const a = 100;         // a is a number

const b = "100";       // b is a string

// JavaScript will try to convert strings to numbers in all numeric operations:

//This will work:

const a1 = "100";
const b1 = "10";
const c1 = a1 / b1;
console.log(c1); //10
//JavaScript will try to convert strings to numbers when dividing:

// This will also work:

const a2 = "100";
const b2 = "10";
const c2 = a2 * b2;
console.log(c2); //1000
//JavaScript will try to convert strings to numbers when multiplying:

// And this will work:

const a3 = "100";
const b3 = "10";
const c3 = a3 - b3;
console.log(c3); //90
//JavaScript will try to convert strings to numbers when subtracting:

// But this will not work:

const a4 = "100";
const b4 = "10";
const c4 = a4 + b4;
console.log(c4); //10010
//JavaScript will NOT convert strings to numbers when adding:

// In the last example JavaScript uses the + operator to concatenate the strings.

///////////////////////////////////////////////////////////////////
// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

// Example
const x_ = 100 / "Apple";
console.log(x_); //NaN

//However, if the string is numeric, the result will be a number:

//Example
const x__ = 100 / "10";
console.log(x__); //10

//You can use the global JavaScript function isNaN() to find out if a value is a not a number:

//Example

const a_ = 100 / "Apple";
console.log(isNaN(a_)); //true

//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

// Example
const a5 = NaN;
const b5 = 5;
const c5 = a5 + b5;
console.log(c5); //NaN

// Or the result might be a concatenation like NaN5:

// Example

const a6 = NaN;
const b6 = "5";
const c6 = a6 + b6;
console.log(c6); //NaN5

// NaN is a number: typeof NaN returns number:

// Example
const b_ = NaN
console.log(typeof b_); //number

///////////////////////////////////////////////////////////////////
// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// Example
// const myNumber = 2; 
// const txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + " ";
// }
// console.log(txt);

// Division by 0 (zero) also generates Infinity:

// Example
const a7 = 2/0;
const b7 = -2/0;
console.log(a7 + " " + b7); //Infinity -Infinity

// Infinity is a number: typeof Infinity returns number.

// Example
const c_ = Infinity
console.log(typeof c_); //number

///////////////////////////////////////////////////////////////////
// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

// Example
const h = 0xFF;
console.log("0xFF = " + h); //0xFF = 255

// Never write a number with a leading zero (like 07).
// Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

// By default, JavaScript displays numbers as base 10 decimals.

// But you can use the toString() method to output numbers from base 2 to base 36.

// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

// Example

const myNumber = 32;
console.log("Decimal 32 = " + "  " + 

"Hexatrigesimal (base 36): " + myNumber.toString(36) + " " +
"Duotrigesimal (base 32): " + myNumber.toString(32) + " " +
"Hexadecimal (base 16): " + myNumber.toString(16) + " " +
"Duodecimal (base 12): " + myNumber.toString(12) + " " +
"Decimal (base 10): " + myNumber.toString(10) + " " +
"Octal (base 8): " + myNumber.toString(8) + " " +
"Binary (base 2): " + myNumber.toString(2));
//Decimal 32 =

//Hexatrigesimal (base 36): w
//Duotrigesimal (base 32): 10
// Hexadecimal (base 16): 20
// Duodecimal (base 12): 28
// Decimal (base 10): 32
// Octal (base 8): 40
// Binary (base 2): 100000

