//Identifiers

const SCORE = 0;         // capital letters
var over1 = 20;         // letters with ending number
var _six = 10;           // underscore and letters
let $four1 = 15;         // dollar with letter and number

function TotalScore() {    // identifier used in function
    let score = (_six*6) + ($four1* 4) ;
    return score;
}
console.log(TotalScore());