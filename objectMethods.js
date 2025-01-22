// Object methods are actions that can be performed on objects.

// A method is a function definition stored as a property value.

// Property     Value
// firstName    John
// lastName     Doe
// age          50
// eyeColor    	blue
// fullName    	function() {return this.firstName + " " + this.lastName;}

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
