// An Object is an Unordered Collection of Properties
// Properties are the most important part of JavaScript objects.

// Properties can be changed, added, deleted, and some are read only.

// Accessing JavaScript Properties
// The syntax for accessing the property of an object is:

// // objectName.property
// // let age = person.age;
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
//   };
// console.log(person.firstname + " is " + person.age + " years old."); //John is 50 years old.

// or

// //objectName["property"]
// let age = person["age"];
// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue"
// };
// console.log(person["firstname"] + " is " + person["age"] + " years old."); //John is 50 years old

// or

// //objectName[expression]
// // let age = person[x];
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      :  50
// };

// let x = "firstName";
// let y = "age";
// console.log( person[x] + " is " + person[y] + " years old."); //John is 50 years old.
//////////////////////////////////////////////////////////////////////

// Adding New Properties
//You can add new properties to an existing object by simply giving it a value:

// //Example
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50,
//     eyecolor: "blue"
// };

// person.nationality = "English";
// console.log(person.firstname + " is " + person.nationality + "."); //John is English.

////////////////////////////////////////////////////////////////////
// Deleting Properties
// The delete keyword deletes a property from an object:

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
console.log(person.firstName + " is " + person.age + " years old."); //John is undefined years old.
// note:The delete keyword deletes both the value of the property and the property itself.After deletion, the property cannot be used before it is added back again.
// //////////////////////////////////////////////////////////////////////

// Nested Objects
// Property values in an object can be other objects:

Example
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

// You can access nested objects using the dot notation or the bracket notation:

// // Create nested Objects
// const myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat"
//   }
// }
// console.log(myObj.myCars.car2); //BMW

// // Create nested Objects
// const myObj = {
//   name: "John",
//   age: 30,
//   myCars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat"
//   }
// }
// console.log(myObj.myCars["car2"]); //BMW

// Create nested Objects
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}
console.log(myObj["myCars"]["car2"]); //BMW
