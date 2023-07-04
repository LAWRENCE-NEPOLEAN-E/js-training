//  Argument passing to functions:
//      1. primitives are passed by value
//      2. objects are passed by reference

console.log("Passing primitives to functions Test:");

function addOne(x) {
    x++;
    return x;
}

let number = 5;
console.log("Before Calling the Function:");
console.log(number); // Output: 5
console.log("Calling the Function:");
console.log(addOne(number)); // Output: 6
console.log("After Calling the Function:");
console.log(number); // Output: 5

console.log("\nPassing references to functions Test:");

function addToArray(array) {
    array.push(4);
    return array;
}

let myArray = [1, 2, 3];
console.log("\nBefore Calling the Function:");
console.log(myArray);
console.log("Calling the Function:");
console.log(addToArray(myArray)); // Output: [1, 2, 3, 4]
console.log("After Calling the Function:");
console.log(myArray); // Output: [1, 2, 3, 4]