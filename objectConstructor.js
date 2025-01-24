// JavaScript Object Constructors

// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.

//////////////////////////////////////////////////////////////////
// Object Type Person
//constructor function for person objects
// function Person(first, last, age, eye) {
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyecolor = eye;
// }

// //Create a Person object 
// const myFather = new Person("John", "Doe", 50, "blue");

// //Display age
// console.log("My father is " + myFather.age + "."); //My father is 50.

// note:
// In the constructor function, this has no value.The value of this will become the new object when a new object is created.
// See Also:
// The JavaScript this Tutorial
// Now we can use new Person() to create many new Person objects

//Example


// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create two Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

//   // Display age
//   console.log("My father is " + myFather.age + ". My mother is " + myMother.age + "."); //My father is 50. My mother is 48.

/////////////////////////////////////////////////////////////////////////
// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor:

// Example
// Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
// }

// // Create 2 Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Display nationality

// console.log("My father is " + myFather.nationality + ". My mother is " + myMother.nationality); //My father is English. My mother is English

//////////////////////////////////////////////////////////////////////

// Adding a Property to an Object
// Adding a property to a created object is easy:

// Example
// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }

//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

//   // Add nationality to first object
//   myFather.nationality = "English";

//   // Display nationality 
//   console.log("My father is " + myFather.nationality); //My father is English

//   note:The new property will be added to myFather. Not to any other Person Objects.

///////////////////////////////////////////////////////////////////

// Adding a Property to a Constructor
// You can NOT add a new property to an object constructor:

// Example

// // Constructor function for Person Objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create 2 Person Objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Will Not Work
// Person.nationality = "English";

// // Display Nationality
// console.log("The nationality of my father is " + myFather.nationality); //The nationality of my father is undefined

// To add a new property, you must add it to the constructor function prototype:

// Example

// Constructor function for Person Objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create 2 Person Objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Add a new Property
// Person.prototype.nationality = "English";

// // Display new Property
// console.log("The nationality of my father is " + myFather.nationality); //The nationality of my father is English

//////////////////////////////////////////////////////////////////////
//   Constructor Function Methods
// A constructor function can also have methods:

// Example

// Constructor Function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.fullName = function () {
//         return this.firstName + " " + this.lastName
//     };
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display full name
// console.log("My father is " + myFather.fullName()); //My father is John Doe

////////////////////////////////////////////////////////////////////////
// Adding a Method to an Object
// Adding a method to a created object is easy:

// Example

// // Constructor function for Person Objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   // Add a Name Method
//   myMother.changeName = function (name) {
//     this.lastName = name;
//   }
  
//   // Change Name
//   myMother.changeName("Doe");
  
//   // Display fullName
//   console.log("My mother's last name is " + myMother.lastName); //My mother's last name is Doe

  //Note:
//The new method will be added to myMother. Not to any other Person Objects.

//////////////////////////////////////////////////////////////
// Adding a Method to a Constructor
// You cannot add a new method to an object constructor function.

// This code will produce a TypeError:

// Example

// Person.changeName = function (name) {
//     this.lastName = name;
//   }
  
//   myMother.changeName("Doe");

//TypeError: myMother.changeName is not a function
  
//Adding a new method must be done to the constructor function prototype:
  
//Example

// Constructor Function for Person Objects
function Person(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
  }
  
  // Create a Person Object
  const myMother = new Person("Sally","Rally",48,"green");
  
  Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
  
  // Change Name
  myMother.changeName("Doe");
  
  // Display Name
  console.log("My mother's last name is " + myMother.lastName); //My mother's last name is Doe

//   note:The changeName() function assigns the value of name to the person's lastName property, substituting this with myMother.
  
////////////////////////////////////////////////////////////////////////
