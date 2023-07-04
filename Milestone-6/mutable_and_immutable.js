// Mutable Example : Mutability is the state where values are mutable (that is,  able to be changed).

console.log("JavaScript objects are mutable.");

const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue"
  };
  
  const x = person;
  x.age = 10;
  
 console.log( person.firstName + " is " + person.age + " years old.");

 // Immutable Example : Immutability is the state where values are immutable (that is, not able to be changed).
 
 let student1 = "Halina";

 let student2 = student1;

 student1 = "Brookes"

 console.log(student1);

 console.log(student2)

 /* Changing student1 to Brookes does not change the initial value on student2. 
 This proves that in primitive data types, actual values are copied, so both have their own.
Wher student1 and student2 are distinct. */