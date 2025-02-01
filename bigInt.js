// JavaScript BigInt
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

// JavaScript Integer Accuracy
// JavaScript integers are only accurate up to 15 digits:

// Integer Precision
const a = 999999999999999;
const b = 9999999999999999;
console.log(a + " " + b); //999999999999999 10000000000000000

////////////////////////////////////////////////////////////////////////
// In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

// With this standard, large integer cannot be exactly represented and will be rounded.

// Because of this, JavaScript can only safely represent integers:

// Up to 9007199254740991 +(253-1)

// and

// Down to -9007199254740991 -(253-1).

// Integer values outside this range lose precision.

// How to Create a BigInt
// To create a BigInt, append n to the end of an integer or call BigInt():

// Examples

const c = 9999999999999999;
const d = BigInt("9999999999999999");
console.log(c + " " + d); //10000000000000000 9999999999999999

const e = 1234567890123456789012345n;
const f = BigInt(1234567890123456789012345)
console.log(e + " " + f); //1234567890123456789012345 1234567890123456824475648

// bigint: A new JavaScript Datatype
// The JavaScript typeof a BigInt is "bigint":

//Example
const g = BigInt(999999999999999);
const h = typeof g;
console.log(h); //bigint

// BigInt is the second numeric data type in JavaScript (after Number).

// With BigInt the total number of supported data types in JavaScript is 8:

// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

//////////////////////////////////////////////////////////////////////////
// BigInt Operators
// Operators that can be used on a JavaScript Number can also be used on a BigInt.

// BigInt Multiplication Example
const i = 9007199254740995n;
const j = 9007199254740995n;
const k = i * j;
console.log(k); //81129638414606735738984533590025n

// Notes
// Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

// Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

// BigInt Decimals
// A BigInt can not have decimals.

// BigInt Division Example
// const l = 5n;
// const m = l / 2;
// console.log(l); //TypeError: Cannot mix BigInt and other types, use explicit conversions

const n = 5n;
const o = Number(n) / 2;
console.log(o); //2.5 A BigInt can not have decimals.

/////////////////////////////////////////////////////////////////////
// BigInt Hex, Octal and Binary
// BigInt can also be written in hexadecimal, octal, or binary notation:

// BigInt Hex Example

const hex = 0x20000000000003n;
const oct = 0o400000000000000003n;
const bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex + " , " + oct + " , " + bin); //9007199254740995 , 9007199254740995 , 9007199254740995

///////////////////////////////////////////////////////////////////////
// Precision Curiosity
// Rounding can compromise program security:

// MAX_SAFE_INTEGER Example
const p = 9007199254740992 === 9007199254740993;
console.log(p); //true

// Minimum and Maximum Safe Integers
// ES6 added max and min properties to the Number object:

// MAX_SAFE_INTEGER
// MIN_SAFE_INTEGER

// MAX_SAFE_INTEGER Example
const q = Number.MAX_SAFE_INTEGER;
console.log(q); //9007199254740991

// MIN_SAFE_INTEGER Example
const r = Number.MIN_SAFE_INTEGER;
console.log(r); //-9007199254740991

///////////////////////////////////////////////////////////////////////////

// New Number Methods
// ES6 also added 2 new methods to the Number object:

// Number.isInteger()
// Number.isSafeInteger()

////////////////////////////////////////////////////////
// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.

// Example: isInteger()

console.log(Number.isInteger(10) + " " + Number.isInteger(10.5)); //true false


// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// Example isSafeInteger()
console.log(Number.isSafeInteger(10) + " , " + Number.isSafeInteger(12345678901234567890)); //true , false
