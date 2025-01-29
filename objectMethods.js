// Object methods are actions that can be performed on objects.

// A method is a function definition stored as a property value.

// Property     Value
// firstName    John
// lastName     Doe
// age          50
// eyeColor    	blue
// fullName    	function() {return this.firstName + " " + this.lastName;}

// Example
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person1.fullName());

//In the example above, this refers to the person object:

//this.firstName means the firstName property of person.

//this.lastName means the lastName property of person.

///////////////////////////////////////////////////////////////////
//Accessing Object Methods
//You access an object method with the following syntax:

//objectName.methodName()
//If you invoke the fullName property with (), it will execute as a function:

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person2.fullName());

//If you access the fullName property without (), it will return the function definition:

const person3 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(this.firstName + " " + this.lastName); //console.log( return this.firstName + " " + this.lastName);

////////////////////////////////////////////////////////////////////
// Adding a Method to an Object
// Adding a new method to an object is easy:

// Example

//Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log("My father is " + person.name()); //My father is John Doe

//////////////////////////////////////////////////////////////////////
//Using JavaScript Methods
//This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

//Example

// Create an Object
const person$ = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
person$.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log("My father is " + person$.name()); //My father is JOHN DOE
