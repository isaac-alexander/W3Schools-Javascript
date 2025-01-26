// Basic String Methods
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

// String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// JavaScript String Length
// The length property returns the length of a string:

// Example
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length); //26

/////////////////////////////////////////////////////////
// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// Example
// var text = "HELLO WORLD";
// console.log(text.charAt(0)); //H

////////////////////////////////////////////////////////////////////
// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
// let text = "HELLO WORLD";
// console.log(text.charCodeAt(0)); //72

//////////////////////////////////////////////////////////////////
// JavaScript String at()
// ES2022 introduced the string method at():

// Examples
// Get the third letter of name:
// const name = "W3Schools";
// let letter = name.at(2);
// console.log(letter); //S

//Get the third letter of name:

// const name = "W3Schools";
// let letter = name[2];
// console.log(letter); //S

////////////////////////////////////////////////////////////////////
// The at() method returns the character at a specified index (position) in a string.

// The at() method is supported in all modern browsers since March 2022:

// Note
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).

////////////////////////////////////////////////////////////////////

// Property Access [ ]
// Example
// let text = "HELLO WORLD";
// console.log(text[0]); //H

// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// Example

// let text = "HELLO WORLD";

// text[0] = "A";  // Does not work
// console.log(text); //HELLO WORLD
/////////////////////////////////////////////////////////////////////

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// Example
// Slice out a portion of a string from position 7 to position 13:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part); //Banana

// Note
// JavaScript counts positions from zero.

// First position is 0.

// Second position is 1.

// Examples
// // If you omit the second parameter, the method will slice out the rest of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7) 
//console.log(part); //Banana, Kiwi

// //If a parameter is negative, the position is counted from the end of the string:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// console.log(part); //Banana, Kiwi

// //This example slices out a portion of a string from position -12 to position -6:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12,-6)
//console.log(part); //Banana

////////////////////////////////////////////////////////////////////////
// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// Example
// let str = "Apple, Banana, Kiwi";
// console.log(str.substring(7,13)); //Banana

// If you omit the second parameter, substring() will slice out the rest of the string.

// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// Example
// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(7,6)); //Banana

// If you omit the second parameter, substr() will slice out the rest of the string.

// Example
// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(7)); //Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string.

// Example
// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(-4)); //Kiwi

//////////////////////////////////////////////////////////////////////
// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

// JavaScript String toUpperCase()
// Example

// let text1 = "Hello World!";
// console.log(text1.toUpperCase()); //HELLO WORLD!

//JavaScript String toLowerCase()
// //Example
// let text1 = "Hello World!";       // String
// console.log(text1.toLowerCase()); //hello world!

/////////////////////////////////////////////////////////////////////////

// JavaScript String concat()
// concat() joins two or more strings:

// Example

// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// console.log(text3); //Hello World!

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

//////////////////////////////////////////////////////////////////
// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// Example
// let text1 = "     Hello World!     ";
// let text2 = text1.trim();
// console.log("Length text1 = " + text1.length + " Length text2 = " + text2.length); //Length text1 = 22 Length text2 = 12
