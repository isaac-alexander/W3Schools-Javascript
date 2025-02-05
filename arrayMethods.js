// JavaScript Array Methods
// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()
///////////////////////////////////////////////////////////
// See Also:
// Search Methods
// Sort Methods
// Iteration Methods
//////////////////////////////////////////////////////////////

// JavaScript Array length
// The length property returns the length (size) of an array:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size); //4

/////////////////////////////////////////////////////////////////////////
// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.toString()); //Banana,Orange,Apple,Mango

// //////////////////////////////////////////////////////////////////////////
// JavaScript Array at()
// ES2022 intoduced the array method at():

// Examples
// Get the third element of fruits using at():
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit2 = fruits2.at(2);
console.log(fruit2); //Apple

// Get the third element of fruits using []:

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3[2];
console.log(fruit3); //Apple

// The at() method returns an indexed element from an array.

// The at() method returns the same as [].

// The at() method is supported in all modern browsers since March 2022:

// Note
// Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.

// This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

// The at() method was introduced in ES2022 to solve this problem.

///////////////////////////////////////////////////////////////////////
// JavaScript Array join()
// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

// Example
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.join(" * ")); //Banana * Orange * Apple * Mango

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:

//check*

// Example

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.pop()); //Mango
console.log(fruits5); //[ 'Banana', 'Orange', 'Apple' ]

//////////////////////////////////////////////////////////////////////

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):


//check*

// Example
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.push("Kiwi")); //5
console.log(fruits6); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//////////////////////////////////////////////////////////////////////////
// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

/////////////////////////////////////////////////////////////////////
// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

//check*

// Example
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7.shift()); //Banana
console.log(fruits7); //[ 'Orange', 'Apple', 'Mango' ]

/////////////////////////////////////////////////////////////////////////

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// Example
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let fruit8 = fruits8.unshift("Lemon");
console.log(fruits8); //[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits8.unshift("Lemon")); //6

//////////////////////////////////////////////////////////////////////
// Changing Elements
// Array elements are accessed using their index number:

// Array indexes start with 0:

// [0] is the first array element
// [1] is the second
// [2] is the third ...

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9[0] = "Kiwi");
console.log(fruits9); //[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

////////////////////////////////////////////////////////////////////
// JavaScript Array length
// The length property provides an easy way to append a new element to an array:

// Example
const fruits$ = ["Banana", "Orange", "Apple", "Mango"];
fruits$[fruits$.length] = "Kiwi";
