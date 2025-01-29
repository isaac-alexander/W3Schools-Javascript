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
const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); //26

/////////////////////////////////////////////////////////
// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays


//////////////////////////////////////////////////////////////////////

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

// Example
const text2 = "HELLO WORLD";
console.log(text2.charAt(0)); //H

////////////////////////////////////////////////////////////////////
// JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

// Example
const text3 = "HELLO WORLD";
console.log(text3.charCodeAt(0)); //72

//////////////////////////////////////////////////////////////////
// JavaScript String at()
// ES2022 introduced the string method at():

// Examples
// Get the third letter of name:
const name1 = "W3Schools";
let letter1 = name1.at(2);
console.log(letter1); //S

//Get the third letter of name:

const name2 = "W3Schools";
let letter2 = name2[2];
console.log(letter2); //S

// The at() method returns the character at a specified index (position) in a string.

// Note:
// The at() method is a new addition to JavaScript.

// It allows the use of negative indexes while charAt() do not.

// Now you can use myString.at(-2) instead of charAt(myString.length-2).

////////////////////////////////////////////////////////////////////

// Property Access [ ]
// Example
const text4 = "HELLO WORLD";
console.log(text4[0]); //H

// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
// Example

const text5 = "HELLO WORLD";
text5[0] = "A";  // Does not work
console.log(text5); //HELLO WORLD
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
const text6 = "Apple, Banana, Kiwi";
const part1 = text6.slice(7, 13);
console.log(part1); //Banana

// Note
// JavaScript counts positions from zero.

// First position is 0.

// Second position is 1.

// Examples
// // If you omit the second parameter, the method will slice out the rest of the string:
const text7 = "Apple, Banana, Kiwi";
const part2 = text7.slice(7)
console.log(part2); //Banana, Kiwi

// //If a parameter is negative, the position is counted from the end of the string:
const text8 = "Apple, Banana, Kiwi";
const part3 = text8.slice(-12);
console.log(part3); //Banana, Kiwi

// //This example slices out a portion of a string from position -12 to position -6:
const text9 = "Apple, Banana, Kiwi";
const part4 = text9.slice(-12, -6)
console.log(part4); //Banana

////////////////////////////////////////////////////////////////////////
// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

// Example
const str1 = "Apple, Banana, Kiwi";
console.log(str1.substring(7, 13)); //Banana

// If you omit the second parameter, substring() will slice out the rest of the string.

// JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

// Example
const str2 = "Apple, Banana, Kiwi";
console.log(str2.substr(7, 6)); //Banana

// If you omit the second parameter, substr() will slice out the rest of the string.

// Example
const str3 = "Apple, Banana, Kiwi";
console.log(str3.substr(7)); //Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string.

// Example
const str5 = "Apple, Banana, Kiwi";
console.log(str5.substr(-4)); //Kiwi

//////////////////////////////////////////////////////////////////////
// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// A string is converted to lower case with toLowerCase():

// JavaScript String toUpperCase()
// Example

const text1 = "Hello World!";
console.log(text1.toUpperCase()); //HELLO WORLD!

//JavaScript String toLowerCase()
// //Example
const text$ = "Hello World!";       // String
console.log(text$.toLowerCase()); //hello world!

/////////////////////////////////////////////////////////////////////////

// JavaScript String concat()
// concat() joins two or more strings:

// Example

const text1_ = "Hello";
const text2_ = "World!";
const text3_ = text1_.concat(" ", text2_);
console.log(text3_); //Hello World!
// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

//////////////////////////////////////////////////////////////////
// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

// Example
const text4_ = "     Hello World!     ";
const text5_ = text4_.trim();
console.log("Length text4_ = " + text4_.length + " Length text5_ = " + text5_.length); //Length text4_ = 22 Length text5_ = 12

///////////////////////////////////////////////////////////////////////////

// JavaScript String trimEnd()
// ECMAScript 2019 added the string method trimEnd() to JavaScript.

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// Example
const text6_ = "     Hello World!     ";
const text7_ = text6_.trimEnd();
console.log("Length text6_ = " + text6_.length + " Length text7_ = " + text7_.length); //Length text6_ = 22 Length text7_ = 17

//////////////////////////////////////////////////////////////////////
// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

// Examples
// Pad a string with "0" until it reaches the length 4:
let text8_ = "5";
text8_ = text8_.padStart(4, "0");
console.log(text8_); //0005

/////////////////////////////////////////////////////////
const text9_ = "5";
console.log(text9_.padStart(4, "x")); //xxx5

// Note
// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

// // Example
let numb = 5;
let text9$ = numb.toString();
console.log(text9$.padStart(4, 0)); //0005

////////////////////////////////////////////////////////////////////
// JavaScript String padEnd()
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

// Examples

let text8$ = "5";
text8$ = text.padEnd(4, "0");
console.log(text8$); //5000


let text7$ = "5";
console.log(text7$.padEnd(4, "x")); //5xxx

// Note
// The padEnd() method is a string method.

// To pad a number, convert the number to a string first.

// See the example below.

// Example

const number = 5;
const text6$ = number.toString();
console.log(text6$.padEnd(4, "x")); //5xxx

//////////////////////////////////////////////////////////////////////////
// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.

// The repeat() method returns a new string.

// The repeat() method does not change the original string.

// Examples
// Create copies of a text:

let text5$ = "Hello world!";
let result5$ = text5$.repeat(2);
console.log(result5$); //Hello world!Hello world!

const text4$ = "Hello world!";
const result = text4$.repeat(4);
console.log(result); //Hello world!Hello world!Hello world!Hello world!

// Syntax
// string.repeat(count)


// Parameters
// Parameter	Description
// count	    Required.
//              The number of copies wanted.


// Return Value
// Type	    Description
// String	A new string containing the copies.

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// // Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// By default, the replace() method replaces only the first match:

////////////////////////////////////////////////////////////////
// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():

// Example

let text1$_ = "I love cats. Cats are very easy to love. Cats are very popular."
text1$_ = text1$_.replaceAll("Cats", "Dogs");
text1$_ = text1$_.replaceAll("cats", "dogs");
console.log(text1$_); //I love dogs. Dogs are very easy to love. Dogs are very popular.

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// Example

let text2$_ = "I love cats. Cats are very easy to love. Cats are very popular";
text2$_ = text2$_.replaceAll(/Cats/g, "Dogs");
text2$_ = text2$_.replaceAll(/cats/g, "dogs");
console.log(text2$_); //I love dogs. Dogs are very easy to love. Dogs are very popular

//////////////////////////////////////////////////////////////////////////
// Converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.

// JavaScript String split()
// A string can be converted to an array with the split() method:

// Example
let text3$_ = "a,b,c,d,e,f";
myArray = text3$_.split(",");
console.log(myArray[0]); //a
// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

// Example


let text4$_ = "Hello";
const myArr = text4$_.split("");

text4$_ = "";
for (let i = 0; i < myArr.length; i++) {
    text4$_ += myArr[i] + " "
}
console.log(text4$_); //H e l l o 
