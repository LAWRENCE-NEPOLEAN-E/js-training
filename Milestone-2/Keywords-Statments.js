//Keywords:

/*
var, let, const: Used to declare variables with different scoping rules.
if, else if, else: Used for conditional branching in code execution.
for, while, do while: Used for looping and iteration.
switch, case, break: Used for multi-branch decision making.
function: Used to define a function.
return: Used to specify the value to be returned from a function.
class, constructor, extends: Used in object-oriented programming to define classes and inheritance.
try, catch, finally: Used for exception handling and error catching.
import, export: Used for module import and export in JavaScript modules.

*/

//Statements:

//Variable declaration statements
let name;
const age = null;
// Variable assignment statements
let name1 = 'Alise';
const age1 = 25;
//Conditional statements
if (age1>18) {
    console.log('acces granted');
  } else if (age1 <=18 ) {
    console.log('One Year left for authorization');
  } else {
    console.log('Access Denied');
  }
  //Looping statements
  for (let i = 0; i <= 5; i++) {
    console.log('prints 0 to 5 :' +i);
  }
  
  while (age1>=18) {
    console.log('Acces Grented');
  }
  
  do {
    console.log('Acces Grented');
  } while (age1>=18);

  //Switch statements
  const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid day');
    break;
}

