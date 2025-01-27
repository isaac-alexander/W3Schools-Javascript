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
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index); //7

// Note
// JavaScript counts positions from zero.

/////////////////////////////////////////////////////////////////////////
// 0 is the first position in a string, 1 is the second, 2 is the third, ...

// JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index); //21

// ////////////////////////////////////////////////////////////////////
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("John")
// console.log(index); //-1

// Both methods accept a second parameter as the starting position for the search:

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate",15);
// console.log(index); //21

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

// Example
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate", 15);
// console.log(index); //7

///////////////////////////////////////////////////////////////////
// JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// // Examples
// let text = "Please locate where 'locate' occurs!";
// let index = text.search("locate");
// console.log(index); //7

/////////////////////////////////////////////////////////
// let text = "Please locate where 'locate' occurs!";
// let index = text.search(/locate/);
// console.log(index); //7

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

// let text = "The rain in SPAIN stays mainly in the plain";
// const myArr = text.match("ain");
// console.log(myArr.length + " " + myArr);  //1 ain

/////////////////////////////////////////////////////////////
//Perform a search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain"; 
// const myArr = text.match(/ain/);
// console.log(myArr.length + " " + myArr); //1 ain

/////////////////////////////////////////////////////
//Perform a global search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain"; 
// const myArr = text.match(/ain/g);
// console.log(myArr.length + " " + myArr); //3 ain,ain,ain

/////////////////////////////////////////////////////////
// Perform a global, case-insensitive search for "ain":

// let text = "The rain in SPAIN stays mainly in the plain"; 
// const myArr = text.match(/ain/gi);
// console.log(myArr.length + " " + myArr); //4 ain,AIN,ain,ain

// Note
// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.

//////////////////////////////////////////////////////////////////////
// JavaScript String matchAll()
// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

// Example
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// console.log(Array.from(iterator)); //Cats,Cats*

//////////////////////////////////////////////////////////////
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
//Example


