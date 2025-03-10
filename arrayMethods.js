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

/////////////////////////////////////////////////////////////////////
// JavaScript Array delete()
// Warning !
// Using delete() leaves undefined holes in the array.

// Use pop() or shift() instead.

//check*
// Example
// const fruits1a = ["Banana", "Orange", "Apple", "Mango"];
// console.log(delete fruits1a[0]);


/////////////////////////////////////////////////////////////////////////
// Merging Arrays (Concatenating)
// In programming languages, concatenation means joining strings end-to-end.

// Concatenation "snow" and "ball" gives "snowball".

// Concatenating arrays means joining arrays end-to-end.

// JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:

// Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// Note
// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

// Example (Merging Three Arrays)
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const myChildren1 = array1.concat(array2, array3); 
console.log(myChildren1); //[ 'Cecilie', 'Lone', 'Emil',  'Tobias', 'Linus',   'Robin',  'Morgan' ]

// The concat() method can also take strings as arguments:

// Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr1.concat("Peter");
console.log(myChildren2); //[ 'Emil', 'Tobias', 'Linus', 'Peter' ]

////////////////////////////////////////////////////////////////////////

// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:

// Examples
// Copy to index 2, all elements from index 0:

const fruits1b = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1b.copyWithin(2, 0)); //[ 'Banana', 'Orange', 'Banana', 'Orange' ]


// Copy to index 2, the elements from index 0 to 2:

const fruits1c = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits1c.copyWithin(2, 0, 2)); //[ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi', 'Papaya' ]

////////////////////////////////////////////////////////////////////////
// Note
// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.

// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.

// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

// JavaScript Array flat()
// ES2019 Introduced the Array flat() method.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// Example
const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
console.log(newArr); //[ 1, 2, 3, 4, 5, 6 ]

///////////////////////////////////////////////////////////////////////
// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

// Example
const myArr2 = [1, 2, 3, 4, 5,6];
const newArr2 = myArr2.flatMap(x => [x, x * 10]);
console.log(newArr2);

// [
//     1, 10,  2, 20,  3,
//    30,  4, 40,  5, 50,
//     6, 60
//  ]

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:

// Example
const fruits1a = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1a);
fruits1a.splice(2, 0, "Lemon", "Kiwi"); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(fruits1a); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const fruits1d = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array:  " + fruits1d); //Original Array:  Banana,Orange,Apple,Mango

let removed = fruits1d.splice(2, 2, "Lemon", "Kiwi"); 
console.log("New Array: " + fruits1d); //New Array: Banana,Orange,Lemon,Kiwi

console.log("Removed Items:  " + removed); //Removed Items:  Apple,Mango

//////////////////////////////////////////////////////////////////////
// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// Example
const fruits1e = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1e); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits1e.splice(0, 1);
console.log(fruits1e); //[ 'Orange', 'Apple', 'Mango' ]

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.

//////////////////////////////////////////////////////////////////////////
// JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

// Example
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced); //[ 'Feb', 'Mar', 'Apr' ]

///////////////////////////////////////////////////////////////////////

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array:

// Example
// Slice out a part of an array starting from array element 1 ("Orange"):

const fruits1f = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1f.slice(1);
console.log(fruits1f + "  " + citrus); //Banana,Orange,Lemon,Apple,Mango  Orange,Lemon,Apple,Mango

// Note
// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

// Example
// Slice out a part of an array starting from array element 3 ("Apple"):
const fruits1g = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1g = fruits1g.slice(3);

console.log(fruits1g + "  " + citrus1g); //Banana,Orange,Lemon,Apple,Mango  Apple,Mango

// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.

// Example
const fruits1h = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1h = fruits1h.slice(1,3);

console.log(fruits1h + "  " + citrus1h); //Banana,Orange,Lemon,Apple,Mango  Orange,Lemon

// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

// Example
const fruits2a = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2a = fruits2a.slice(2);
console.log(fruits2a + "  " + citrus2a); //Banana,Orange,Lemon,Apple,Mango  Lemon,Apple,Mango

// ////////////////////////////////////////////////////////////////////
// Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

// This is always the case when you try to output an array.


// Example
const fruits2b = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2b.toString()); //Banana,Orange,Apple,Mango

