// object literals
const person = {
    name: "John Doe",
    age: 30,
    cars: [
      {
        make: "Toyota",
        model: "Corolla"
      },
      {
        make: "Honda",
        model: "Civic"
      }
    ]
    
  };

  console.log(person.name); 
  console.log(person.age); 

// object constructor
const currentDate = new Date();         // using in-built Date object


// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an object using the constructor
  const person1 = new Person('Alies', 25);
  console.log(person1.name); 
  console.log(person1.age); 