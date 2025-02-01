// JavaScript Number Properties
// Property	          Description
// EPSILON	          The difference between 1 and the smallest number > 1.
// MAX_VALUE          The largest number possible in JavaScript
// MIN_VALUE          The smallest number possible in JavaScript
// MAX_SAFE_INTEGER   The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	  The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY  Infinity (returned on overflow)
// NEGATIVE_INFINITY  Negative infinity (returned on overflow)
// NaN	              A "Not-a-Number" value

////////////////////////////////////////////////////////////////////////
// JavaScript EPSILON
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

// Example
const a = Number.EPSILON;
console.log(a); //2.220446049250313e-16

//////////////////////////////////////////////////////////////////////
// JavaScript MAX_VALUE
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

// Example
const b = Number.MAX_VALUE;
console.log(b); //1.7976931348623157e+308

// Number Properties Cannot be Used on Variables
// Number properties belong to the JavaScript Number Object.

// These properties can only be accessed as Number.MAX_VALUE.

// Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

// Example
const x = 6;
console.log(x.MAX_VALUE); //undefined

//////////////////////////////////////////////////////////////////////
// JavaScript MIN_VALUE
// Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

// Example
const c = Number.MIN_VALUE;
console.log(c); //5e-324

//////////////////////////////////////////////////////////////////
// JavaScript MAX_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

// Number.MAX_SAFE_INTEGER is (253 - 1).

// Example
const d = Number.MAX_SAFE_INTEGER;
console.log(d); //9007199254740991

///////////////////////////////////////////////////////////////////////
// JavaScript MIN_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

// Example
const e = Number.MIN_SAFE_INTEGER;
console.log(e); //-9007199254740991

//////////////////////////////////////////////////////////////////////
// JavaScript NEGATIVE_INFINITY
// Example
const f = Number.NEGATIVE_INFINITY;
console.log(f); //-Infinity

//NEGATIVE_INFINITY is returned on overflow:
const g = -1 / 0;
console.log(g); //-Infinity

////////////////////////////////////////////////////////////////////
//JavaScript NaN - Not a Number
//NaN is a JavaScript reserved word for a number that is not a legal number.

//Examples
console.log(Number.NaN); //NaN

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
const h = 100 / "Apple";
console.log(h); //NaN

//or

console.log(100 / "Apple"); //NaN