//primitive types are undefined, null, boolean, number, BigInt, string, and symbol

//1.Numnbers

let x = 250;
let y = 40.5;
console.log("Value of x=" + x);
console.log("Value of y=" + y);

//2.Strings

let str = 'Hello All';
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);

//3.undefined

//console.log("Value of z=" + udfnd);

//4.boolean

let bool = true;    
console.log("value of bool=" + bool);

//5.null

let q = null;
console.log("Value of q=" + q);

//6.BigInt represent 2^53-1

var bigNum = 123422222222222222222222222222222222222n
console.log(bigNum)

//7.symbol


var sym = Symbol("Hello")
console.log(typeof(sym));
console.log(sym);

console.log("---------------------------------------------------------------");

//Reference Tyes are Array, Object, and Function.

//Objects

// An empty object
var square = {};

// Here a and b are keys and
// 20 and 30 are values
var circle = {a: 20, b: 30};
console.log(circle);

//Array

// Call it with no arguments
var a = new Array();

// Call it with single numeric argument
var b = new Array(10);

// Explicitly specify two or
// more array elements
var d = new Array(1, 2, 3, "Hello");
console.log("value of a=" + a);
console.log("value of b" + b);
console.log("value of d=" + d);


