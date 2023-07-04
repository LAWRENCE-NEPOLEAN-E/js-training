//No Block Level Scope

console.log("Testing No Block Level Scope");

// global function scope

var name = 'Alex';
function displayName() {                    
    if(name == 'Alex'){
        var age = 18;
    }
    console.log("Global scope :", name );            // displaying global scope
    console.log("Functin Scope : ", age);           // displaying function scope_does not thrwo any error
}

// Block level scope

let blockScopeVariable = "Block Scope Variable";
if (blockScopeVariable == "Block Scope Variable") {
    const BLOCK_SCOPE_CONSTANT = "Block Scope Constant";
    console.log(blockScopeVariable);                // won't throw error, still in context
    console.log(BLOCK_SCOPE_CONSTANT);              // block level constant identifier
}
console.log(BLOCK_SCOPE_CONSTANT);                  // will throw error
