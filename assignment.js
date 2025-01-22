// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Operator 	Example	    Same As
// =	        x = y	    x = y
// +=	        x += y	    x = x + y
// -=	        x -= y	    x = x - y
// *=	        x *= y	    x = x * y
// /=	        x /= y	    x = x / y
// %=	        x %= y	    x = x % y
// **=	        x **= y	    x = x ** y

///////////////////////////////////////////////////
// Shift Assignment Operators
// Operator	        Example	        Same As
// <<=	            x <<= y     	x = x << y
// >>=	            x >>= y	        x = x >> y
// >>>=	            x >>>= y	    x = x >>> y

////////////////////////////////////////////////
// Bitwise Assignment Operators
// Operator	        Example	        Same As
// &=	            x &= y	        x = x & y
// ^=	            x ^= y      	x = x ^ y
// |=	            x |= y      	x = x | y

///////////////////////////////////////////////////////
// Logical Assignment Operators
// Operator	        Example     	Same As
// &&=	            x &&= y     	x = x && (x = y)
// ||=	            x ||= y     	x = x || (x = y)
// ??=	            x ??= y     	x = x ?? (x = y)

////////////////////////////////////////////////////////////
// The = Operator
// The Simple Assignment Operator assigns a value to a variable.

// Simple Assignment Examples
let x1 = 10;

console.log("Value of x1 is: " + x1); //Value of x1 is: 10

let y = 50
let x = 10 + y;

console.log( "Value of x is: " + x); //Value of x is: 60
//////////////////////////////////////////////////////////////////////

// The += Operator
// The Addition Assignment Operator adds a value to a variable.

// Addition Assignment Examples
let a = 10;
a += 5;

console.log("Value of a is: " + a);  //Value of a is: 15

let text = "Hello"; 
text += " World";

console.log(text); //Hello World
 /////////////////////////////////////////////////////////////////////

//  The -= Operator
// The Subtraction Assignment Operator subtracts a value from a variable.

// Subtraction Assignment Example
let b = 10;
b -= 5; 

console.log("Value of b is: " + b); //"Value of b is: 5
/////////////////////////////////////////////////////////////////////////

// The *= Operator
// The Multiplication Assignment Operator multiplies a variable.

// Multiplication Assignment Example
let c = 10;
c *= 5;
console.log("Value of c is: " + c); //Value of c is: 50
////////////////////////////////////////////////////////////

// The **= Operator
// The Exponentiation Assignment Operator raises a variable to the power of the operand.

// Exponentiation Assignment Example
let d = 10;
d **= 5;

console.log("Value of d is: " + d); //Value of d is: 100000
/////////////////////////////////////////////////////////////////////////

// The /= Operator
// The Division Assignment Operator divides a variable.

// Division Assignment Example
let e = 10;
e /= 5;

console.log(e); // 2
/////////////////////////////////////////////////////////////////////////

// The %= Operator
// The Remainder Assignment Operator assigns a remainder to a variable.

// Remainder Assignment Example
let f = 10;
f %= 5;

console.log("Value of f is: " + f); //Value of f is: 0
///////////////////////////////////////////////////////////////////////

// The <<= Operator
// The Left Shift Assignment Operator left shifts a variable.

// Left Shift Assignment Example
let g = -100;
g <<= 5;

console.log("Value of g is: " + g); //Value of g is: -3200
///////////////////////////////////////////////////////////////////////////

// The >>= Operator
// The Right Shift Assignment Operator right shifts a variable (signed).

// Right Shift Assignment Example
let h = -100;
h >>= 5;

console.log( "Value of h is: " + h); //Value of h is: -4
////////////////////////////////////////////////////////////////////////

// The >>>= Operator
// The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).

// Unsigned Right Shift Assignment Example
let i = -100;
i >>>= 5;

console.log("Value of i is: " + i); //Value of i is: 134217724
//////////////////////////////////////////////////////////////////////

// The &= Operator
// The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.

// Bitwise AND Assignment Example
let j = 100;
j &= 5;
 
console.log("Value of j is: " + j); //Value of j is: 4
////////////////////////////////////////////////////////////////////////

// The |= Operator
// The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.

// Bitwise OR Assignment Example
let k = 100;
k |= 5;

console.log("Value of k is: " + k); //Value of k is: 101
 //////////////////////////////////////////////////////////////////////////

//  The ^= Operator
// The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

// Bitwise XOR Assignment Example
let l = 100;
l ^= 5;
console.log("Value of l is: " + l); //Value of l is: 97
//////////////////////////////////////////////////////////////////////////

// The &&= Operator
// The Logical AND assignment operator is used between two values.

// If the first value is true, the second value is assigned.

// Logical AND Assignment Example
let m = 100;
m &&= 5;

console.log("Value of m is: " + m); //Value of m is: 5
///////////////////////////////////////////////////////////////////////

// The ||= Operator
// The Logical OR assignment operator is used between two values.

// If the first value is false, the second value is assigned.

// Logical OR Assignment Example
let n = undefined;
n ||= 5;

console.log("Value of n is: " + n); //Value of n is: 5
//////////////////////////////////////////////////////////////////////////

// The ??= Operator
// The Nullish coalescing assignment operator is used between two values.

// If the first value is undefined or null, the second value is assigned.

// Nullish Coalescing Assignment Example
let o;
o ??= 5;

console.log(o); //5
