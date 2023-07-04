// copying objects copies the reference only and modifying them modifies the original object

var object = {
    name: "alwin",
    age: 20,
    address: {
        line1: "2nd cross",
        line2: "5th street"
    },
};

var objectCopy = object;

console.log("Original & Copied Object (before modification):");
console.log(object);
console.log(objectCopy);

// modifying copied object
objectCopy.name = "santhosh";
objectCopy.age = 20;

console.log("Original & Copied Object (after modification):");
console.log(object);
console.log(objectCopy);

// copy an object with three method spread, object.assign() and JSON.parse(). That does not modify the original objects.

var cloneobj = {...object};                       //using spread
var object1 = Object.assign({}, object);          //using object.assign()
var object2 = JSON.parse(JSON.stringify(object)); //using JSON.parse()

cloneobj.name = "Jane Doe"
cloneobj.age = 15;
object1.name = "John";
object1.age = 18;
object1.address.line1 = "1st Street";
object1.address.line2 = "2nd cross";
object2.name = "Jack";
object2.age = 25;

console.log("\nOriginal Object:");
console.log(object);
console.log("\nSpread Copy:");
console.log(cloneobj);
console.log("\Object assign Copy:");
console.log(object1);
console.log("\Json parse Copy:");
console.log(object2);