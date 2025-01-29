// JavaScript Display Objects
// How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].

// Example

// Create an Object
const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

 console.log(person1);
// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

///////////////////////////////////////////////////////////////////////
// Displaying Object Properties
// The properties of an object can be displayed as a string:

// Example

// // Create an Object
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  console.log(person2.name + ", " + person2.age + ", " + person2.city); //John, 30, New York
  
//   Displaying Properties in a Loop
//   The properties of an object can be collected in a loop:
//Example

// Create an Object
const person3 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text1 = "";
for (let x in person3) {
  text1 += person3[x] + " ";
};

console.log(text1); //John 30 New York
// note:You must use person[x] in the loop.person.x will not work (Because x is the loop variable).

///////////////////////////////////////////////////////////////////////

// Using Object.values()
// Object.values() creates an array from the property values:

// Create an Object
const person4 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person4);

console.log(myArray); //[ 'John', 30, 'New York' ]

///////////////////////////////////////////////////////////////////
// Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

// Example

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + " ";
}

console.log(text); //Bananas: 300 Oranges: 200 Apples: 500 

//////////////////////////////////////////////////////////////////////
// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// JSON.stringify() is included in JavaScript and supported in all major browsers.

// Note:
// The result will be a string written in JSON notation:

// {"name":"John","age":50,"city":"New York"}

// Example

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display 
console.log(JSON.stringify(person)); //{"name":"John","age":30,"city":"New York"}
