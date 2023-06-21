//break
console.log("Testing break:\n");
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log("The number is " + i) ;
  }

  //continue
console.log("\nTesting continue:\n")
  for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log("The number is " + i) ;
  }