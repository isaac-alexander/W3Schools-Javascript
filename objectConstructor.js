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
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add nationality to first object
  myFather.nationality = "English";
  
  // Display nationality 
  console.log("My father is " + myFather.nationality); //My father is English

//   note:The new property will be added to myFather. Not to any other Person Objects.
  
///////////////////////////////////////////////////////////////////

// Adding a Property to a Constructor
// You can NOT add a new property to an object constructor:

// Example