// JavaScript Arithmetic Operators
// Arithmetic operators perform arithmetic on numbers (literals or variables).
////////////////////////////////////////////////////////////
// Operator	    Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// **	        Exponentiation (ES2016)
// /	        Division
// %	        Modulus (Division Remainder)
// ++	        Increment
// --	        Decrement
/////////////////////////////////////////////////////////////////
// Arithmetic Operations
// A typical arithmetic operation operates on two numbers.

// The two numbers can be literals:

// Example
let x = 100 + 50;

console.log(x); //150
// or variables:

//Example
let a = 100;
let b = 50;
let y = a + b;

console.log(y); //150

//or expressions:

//Example
let c = 3;
let z = (100 + 50) * c;

console.log(z); //450
////////////////////////////////////////////////////////////////
// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.

// The operation (to be performed between the two operands) is defined by an operator.

// Operand	    Operator	    Operand
// 100	         +	             50

///////////////////////////////////////////////////////////////////
// Adding
// The addition operator (+) adds numbers:

// Example
let e = 5;
let f = 2;
let g = e + f;

console.log(g); //7
////////////////////////////////////////////////////////////
// Subtracting
// The subtraction operator (-) subtracts numbers.

// Example
let h = 5;
let i = 2;
let j = h - i;

console.log(j); //3
////////////////////////////////////////////////////////
// Multiplying
// The multiplication operator (*) multiplies numbers.

// Example
let k = 5;
let l = 2;
let m = k * l;

console.log(m); //10
///////////////////////////////////////////////////////////////
// Dividing
// The division operator (/) divides numbers.

// Example
let n = 5;
let o = 2;
let p = n / o;

console.log(p); //2.5

///////////////////////////////////////////////
// Remainder
// The modulus operator (%) returns the division remainder.

// Example
let q = 5;
let r = 2;
let s = q % r;

console.log(s); //1
////////////////////////////////////////////////////////////////
// Incrementing
// The increment operator (++) increments numbers.

// Example
let t = 5;
t++;
let u = t;

console.log(t); //6
////////////Decrementing
// The decrement operator (--) decrements numbers.

// Example
let v = 5;
v--;
let w = v;

console.log(w); //4
//////////////////////////////////////////////////
// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

// Example
let $x = 5;
let $z = $x ** 2;

console.log($z); //25

// x ** y produces the same result as Math.pow(x,y):

// Example
let x$ = 5;
let z$ = Math.pow(x$,2);

console.log(Math.pow(x$,2)); //25
//////////////////////////////////////////////////////////////////////////
// Operator Precedence
// Operator precedence describes the order in which operations are performed in an arithmetic expression.

// Example
let a$ = 100 + 50 * 3;

console.log(100 + 50 *3); //250

// Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

// Is the addition or the multiplication done first?

// As in traditional school mathematics, the multiplication is done first.

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

// And (as in school mathematics) the precedence can be changed by using parentheses.

// When using parentheses, the operations inside the parentheses are computed first:

//Example
let $a = (100 + 50) * 3;

console.log((100 + 50) * 3); //450

// Multiplication has precedence over addition.

// But parenthesis has precedence over multiplication.

// When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
// Examples
let b$ = 100 + 50 - 3;

console.log(100 + 50 - 3); //147
//////////////////////////////////////////

let  = 100 / 50 * 3;

console.log(100 / 50 * 3); //6
