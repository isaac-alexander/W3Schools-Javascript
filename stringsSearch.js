// JavaScript String Search
// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

///////////////////////////////////////////////////////////////////
// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// Example
let text$ = "Please locate where 'locate' occurs!";
let index$ = text$.indexOf("locate");
console.log(index$); //7

// Note
// JavaScript counts positions from zero.

/////////////////////////////////////////////////////////////////////////
// 0 is the first position in a string, 1 is the second, 2 is the third, ...

// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// Example
const text1 = "Please locate where 'locate' occurs!";
const index1 = text1.lastIndexOf("locate");
console.log(index1); //21

// ////////////////////////////////////////////////////////////////////
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Example
const text2 = "Please locate where 'locate' occurs!";
const index2 = text2.indexOf("John")
console.log(index2); //-1

// Both methods accept a second parameter as the starting position for the search:

// Example
const text3 = "Please locate where 'locate' occurs!";
const index3 = text3.indexOf("locate", 15);
console.log(index3); //21

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// Example
const text4 = "Please locate where 'locate' occurs!";
const index4 = text4.lastIndexOf("locate", 15);
console.log(index4); //7

///////////////////////////////////////////////////////////////////
// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// Examples
const text5 = "Please locate where 'locate' occurs!";
const index5 = text5.search("locate");
console.log(index5); //7
/////////////////////////////////////////////////////////
const text6 = "Please locate where 'locate' occurs!";
const index6 = text6.search(/locate/);
console.log(index6); //7

// Did You Notice?
// The two methods, indexOf() and search(), are equal?

// They accept the same arguments (parameters), and return the same value?

// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


//////////////////////////////////////////////////////////////////////////
// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

// Examples
// Perform a search for "ain":

const text1$ = "The rain in SPAIN stays mainly in the plain";
const myArr1$ = text1$.match("ain");
console.log(myArr1$.length + " " + myArr1$);  //1 ain

/////////////////////////////////////////////////////////////
//Perform a search for "ain":

const text2$ = "The rain in SPAIN stays mainly in the plain";
const myArr2$ = text2$.match(/ain/);
console.log(myArr2$.length + " " + myArr2$); //1 ain

/////////////////////////////////////////////////////
//Perform a global search for "ain":

const text3$ = "The rain in SPAIN stays mainly in the plain";
const myArr3$ = text3$.match(/ain/g);
console.log(myArr3$.length + " " + myArr3$); //3 ain,ain,ain

/////////////////////////////////////////////////////////
// Perform a global, case-insensitive search for "ain":

const text4$ = "The rain in SPAIN stays mainly in the plain";
const myArr4$ = text4$.match(/ain/gi);
console.log(myArr4$.length + " " + myArr4$); //4 ain,AIN,ain,ain
// Note
// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

//////////////////////////////////////////////////////////////////////
// JavaScript String matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

// Example
const text7 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator1 = text7.matchAll("Cats");
console.log(Array.from(iterator1)); //Cats,Cats*

//////////////////////////////////////////////////////////////
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
//Example

const text8 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator2 = text8.matchAll(/Cats/g);
console.log(Array.from(iterator2));

// If you want to search case insensitive, the insensitive flag (i) must be set:

const text9 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator3 = text9.matchAll(/Cats/gi);
console.log(Array.from(iterator3));

/////////////////////////////////////////////////////////////////////////

// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.

// Otherwise it returns false.
// Examples
//Check if a string includes "world":

const text$4 = "Hello world, welcome to the universe.";
console.log(text$4.includes("world"));

// Check if a string includes "world". Start at position 12:

const text$5 = "Hello world, welcome to the universe.";
console.log(text$5.includes("world", 12));

////////////////////////////////////////////////////////////////////////
// JavaScript String startsWith()
// The startsWith() method returns true if a string begins with a specified value.

// Otherwise it returns false:

// Examples
// Returns true:

text$6 = "Hello world, welcome to the universe.";
console.log(text$6.startsWith("Hello"));

// Returns false:

const text$7 = "Hello world, welcome to the universe.";
console.log(text$7.startsWith("world"));

//A start position for the search can be specified:

//Returns false:

const text$8 = "Hello world, welcome to the universe.";
console.log(text$8.startsWith("world", 5));

// Returns true:

const text$0 = "Hello world, welcome to the universe.";
console.log(text$0.startsWith("world", 6));

////////////////////////////////////////////////////////////////////////
// JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value.

// Otherwise it returns false:

// Examples
// Check if a string ends with "Doe":

const text1_ = "John Doe";
console.log(text1_.endsWith("Doe")); // Returns true:


// Check if the 11 first characters of a string ends with "world":

const text2_ = "Hello world, welcome to the universe.";
console.log(text2_.endsWith("world", 11)); // Returns true:

