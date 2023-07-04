//curring function
console.log("Testing Curring Function:");

let cfunc = (msg1) => {
    return(msg2) => {
        return (msg3) => {
            return `${msg1} ${msg2} ${msg3} `;
        }
    }
}

let  cfun = cfunc("Hello")("World")("!")
console.log(cfun);
 
//other ways

    const food = item1 => item2 => item3 =>
    `\nI like to eat: ${item1} ${item2} ${item3}`;

    const dish = food("Chicken") ("Tikka") ("Sandwich");
    console.log(dish);