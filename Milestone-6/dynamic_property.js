//Dynamic Properties

const variable  = "username"
const age  = 20
const prop1 = "AgeIsLessThan18"
const prop2 = "AgeIsMoreThan18"

const obj =  {
    [variable] : "Akash",                   // dynamically assign the variable value
    [age > 18 ?  prop2 : prop1] : true,
}
console.log(obj) 

//Output: {"username":"Akash","AgeIsMoreThan}
