// JavaScript Template Strings also String Templates or Template Literals
// Beloved child has many names

// Back-Tics Syntax
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

// Example
const text = `Hello world!`;
console.log(text);

////////////////////////////////////////////////////////////////////
// Quotes Inside Strings
// Template Strings allow both single and double quotes inside a string:

// Example
const text2 = `He's often called "Johnny"`;
console.log(text2);

///////////////////////////////////////////////////////////////////////
// Multiline Strings
// Template Strings allow multiline strings:

// Example
const text3 =
    `The quick
brown fox
jumps over
the lazy dog`;
console.log(text3);

///////////////////////////////////////////////////////////////////////
// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings.

// The method is called string interpolation.

// The syntax is:   ${...}

/////////////////////////////////////////////////////////////////////
// Variable Substitutions
// Template Strings allow variables in strings:

// Example
const firstName = "John";
const lastName = "Doe";

const text4 = `Welcome ${firstName}, ${lastName}!`;
console.log(text4);

// Automatic replacing of variables with real values is called string interpolation.

/////////////////////////////////////////////////////////////////////////
// Expression Substitution
// Template Strings allow expressions in strings:

// Example
const price = 10;
const VAT = 0.25;
const total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// Automatic replacing of expressions with real values is called string interpolation.


//////////////////////////////////////////////////////////////////////
//HTML Templates

//Example
// let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;
// console.log(html);
