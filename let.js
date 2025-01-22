// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

//////////////////////////////////////////////////////////////////////
// Block Scope

// Before ES6 (2015), JavaScript did not have Block Scope.

// JavaScript had Global Scope and Function Scope.

// ES6 introduced the two new JavaScript keywords: let and const.

// These two keywords provided Block Scope in JavaScript:

// Example
// Variables declared inside a { } block cannot be accessed from outside the block:
{
    // let x = 2;
  }
  // x can NOT be used here


//   Global Scope

//   Variables declared with the var always have Global Scope.
  
//   Variables declared with the var keyword can NOT have block scope:
  
//   Example

//   Variables declared with varinside a { } block can be accessed from outside the block:
  
  {
    // var x = 2;
  }
  // x CAN be used here

/////////////////////////////////////////////////////////////////////
//   Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

// Example

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

console.log(x); //2

// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// Example

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

console.log(x); //10

// Difference Between var, let and const

//         Scope  Redeclare   Reassign	  Hoisted	Binds this
// var:	   No	  Yes	      Yes	      Yes	     Yes
// let:    Yes 	  No	      Yes	      No	     No
// const:  Yes    No	      No	      No	     No

// What is Good?
// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// What is Not Good?
// var does not have to be declared.

// var is hoisted.

// var binds to this.
/////////////////////////////////////////////////////////

// Redeclaring

// Redeclaring a JavaScript variable with var is allowed anywhere in a program:

// Example

var x = 2;
// Now x is 2

var x = 3;
// Now x is 3

console.log(x); //3

// With let, redeclaring a variable in the same block is NOT allowed:

// Example

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
//let x = 2;   // Allowed
//let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}

// Redeclaring a variable with let, in another block, IS allowed:

// Example

let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}

console.log(x); //2

////////////////////////////////////////////////////////////////////


// Let Hoisting

// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:

// Example
// This is OK:

carName = "Volvo";
var carName;

console.log(carName); //Volvo
