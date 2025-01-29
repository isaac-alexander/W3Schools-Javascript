// JavaScript Objects
// Real Life Objects
// In real life, objects are things like: houses, cars, people, animals, or any other subjects.

// Here is a car object example:

// Car Object	        Properties	        Methods

//                      car.name = Fiat     car.start()

//                      car.model = 500     car.drive()

//                      car.weight = 850kg  car.brake()

//                      car.color = white	car.stop()
/////////////////////////////////////////////////////////////////////////

// Object Properties
// A real life car has properties like weight and color:

// car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.

// Car objects have the same properties, but the values differ from car to car.
//////////////////////////////////////////////////////////////////////////

// Object Methods
// A real life car has methods like start and stop:

// car.start(), car.drive(), car.brake(), car.stop().

// Car objects have the same methods, but the methods are performed at different times.
/////////////////////////////////////////////////////////////////////////

// JavaScript Variables
// JavaScript variables are containers for data values.

// This code assigns a simple value (Fiat) to a variable named car:
// Example
let car1 = "Fiat";
console.log("Car:" + car1); //Car:Fiat
///////////////////////////////////////////////////////////////////////


// JavaScript Objects
// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to an object named car:

// Example
const car2 = { type: "Fiat", model: "500", color: "white" };
console.log("The car type is " + car2.type); //The car type is Fiat
////////////////////////////////////////////////////////////////////

// JavaScript Object Definition
// How to Define a JavaScript Object
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// JavaScript Object Literal
// An object literal is a list of name:value pairs inside curly braces {}.

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// Note:
// name:value pairs are also called key:value pairs.

// object literals are also called object initializers.
////////////////////////////////////////////////////////////////////////

// Creating a JavaScript Object
// These examples create a JavaScript object with 4 properties:
// Examples
// Create an Object
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// Spaces and line breaks are not important. An object initializer can span multiple lines:

// Create an Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person1.firstName + " is " + person1.age + " years old."); //John is 50 years old.
////////////////////////////////////////////////////////////////

// This example creates an empty JavaScript object, and then adds 4 properties:

// Create an Object
const human = {};

// Add Properties
human.firstName = "John";
human.lastName = "Doe";
human.age = 50;
human.eyeColor = "blue";

console.log(human.firstName + " is " + human.age + " years old."); //John is 50 years old.
//////////////////////////////////////////////////////////////////////////

// Using the new Keyword
// This example create a new JavaScript object using new Object(), and then adds 4 properties:

// Example
// Create an Object
 const person2 = new Object();

// // Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

console.log(person2.firstName + " is " + person2.age + " years old.");

// note:The examples above do exactly the same.But, there is no need to use new Object().For readability, simplicity and execution speed, use the object literal method.
// Object Properties
//The named values, in JavaScript objects, are called properties.

// Property 	Value
// firstName	John
// lastName 	Doe
// age	        50
// eyeColor	    blue
//////////////////////////////////////////////////////////////////////

// Accessing Object Properties
// You can access object properties in two ways:

// objectName.propertyName
// objectName["propertyName"]


// Create an Object:
const person3 = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };

  console.log("The last name is " + person3.lastName); //The last name is Doe
// Display lastName from the Object:

// Create an Object:
const person4 = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
console.log("The last name is " + person4["lastName"]); //The last name is Doe
//   // Display lastName from the Object:
///////////////////////////////////////////////////////////////////////

// JavaScript Object Methods
// Methods are actions that can be performed on objects.

// Methods are function definitions stored as property values.

// Property	Property Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}
// // Example
const person5 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person5.fullName()); //John Doe

// In the example above, this refers to the person object:

// this.firstName means the firstName property of person.

// this.lastName means the lastName property of person.

// In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// Objects are containers for Properties and Methods.

// Properties are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// JavaScript Primitives
// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:

// string
// number
// boolean
// null
// undefined
// symbol
// bigint
//////////////////////////////////////////////////////////////////////

// Immutable
// Primitive values are immutable (they are hardcoded and cannot be changed).

// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

// Value	    Type	        Comment
// "Hello"	    string	        "Hello" is always "Hello"
// 3.14     	number	         3.14 is always 3.14
// true     	boolean	         true is always true
// false    	boolean	         false is always false
// null     	null (object)	 null is always null
// undefined	undefined	     undefined is always undefined
/////////////////////////////////////////////////////////////////////

// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// If person is an object, the following statement will not create a copy of person:

// const x = person;
// The object x is not a copy of person. The object x is person.

// The object x and the object person share the same memory address.

// Any changes to x will also change person:

// Example
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10;

console.log(person.firstName + " is " + person.age + " years old.");
