// JavaScript Operators
// Javascript operators are used to perform different types of mathematical and logical computations.

// Examples:
// The Assignment Operator = assigns values

// The Addition Operator + adds values

// The Multiplication Operator * multiplies values

// The Comparison Operator > compares values

// JavaScript Assignment
// The Assignment Operator (=) assigns a value to a variable:

// Assignment Examples
// let x = 10;

// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

console.log("The sum of x + y is: " + z); // The sum of x + y is: 7

// JavaScript Addition
// The Addition Operator (+) adds numbers:

// Adding
let x_ = 5;
let y_ = 2;
let z_ = x_ + y_;

console.log(z_); //7


// JavaScript Multiplication
// The Multiplication Operator (*) multiplies numbers:

// Multiplying
let x$ = 5;
let y$ = 2;
let z$ = x$ * y$;

console.log(z$); //10
/////////////////////////////////////////////////////////

// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators
// JavaScript Arithmetic Operators
// Arithmetic Operators are used to perform arithmetic on numbers:

// Arithmetic Operators Example

let a = 3;
let b = (100 + 50) * a;

console.console.log(b); //450
/////////////////////////////////////////////////////////////
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

// JavaScript Comparison Operators
// Operator	    Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator
////////////////////////////////////////////////////////////////////////

// JavaScript String Comparison
// All the comparison operators above can also be used on strings:

// Example
let text1 = "A";
let text2 = "B";
let result = text1 < text2;

console.log("Is A less than B? " + result); //Is A less than B? true
// Note that strings are compared alphabetically:

//Example
let text1_ = "20";
let text2_ = "5";
let result_ = text1_ < text2_;

console.log("Is 20 less than 5? " + result_); //Is 20 less than 5? true

// JavaScript String Addition
// The + can also be used to add (concatenate) strings:

// Example
let text1$ = "John";
let text2$ = "Doe";
let text3 = text1$ + " " + text2$

console.log(text3);

// The += assignment operator can also be used to add (concatenate) strings:

// Example
let text4 = "What a very ";
text4 += "nice day";

console.log(text4); //What a very nice day

// Note
// When used on strings, the + operator is called the concatenation operator.
//////////////////////////////////////////////////////////////////////////

// Adding Strings and Numbers
// Adding two numbers, will return the sum, but adding a number and a string will return a string:

// Example
let e = 5 + 5;
let f = "5" + 5;
let g = "Hello" + 5;

console.log(e + " " + f + " " + g); //10
                                    //55
                                    //Hello5

// Note
// If you add a number and a string, the result will be a string!

/////////////////////////////////////////////////////////////////
// JavaScript Logical Operators
// Operator	    Description
// &&	        logical and
// ||	        logical or
// !	        logical not

////////////////////////////////////////////////////////////
// JavaScript Type Operators
// Operator     	Description
// typeof	        Returns the type of a variable
// instanceof   	Returns true if an object is an instance of an object type
/////////////////////////////////////////////////////////////////////

// JavaScript Bitwise Operators
// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.
// Operator	    Description 	Example	Same as	        Result	Decimal
// &	        AND	            5 & 1	0101 & 0001 	0001	 1
// |	        OR	            5 | 1	0101 | 0001 	0101	 5
// ~	        NOT	            ~ 5	    ~0101	        1010	 10
// ^	        XOR	            5 ^ 1	0101 ^ 0001 	0100	 4
// <<	        left shift  	5 << 1	0101 << 1	    1010	 10
// >>	        right shift 	5 >> 1	0101 >> 1	    0010	  2
// >>>   unsigned right shift   5 >>> 1	0101 >>> 1	    0010	  2
