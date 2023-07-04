//Scope Chain Augmentation

console.log("Testing Scope Chain Augmentation");

// global scope

var name = 'Alex';
function displayName() {                    // this is the lexcial parent for displayAge
    console.log(name);
    var age = 18;
    function displayAge () {                // this is the lexical parent for displaysubject
        console.log(age);
        var subject = 'JavaScript';
        function displaysubject () {
            console.log(subject);           // it search for the 'subject' 1st in lexcial parent. and floowed by its parent.
        }
        displaysubject();
    }
    displayAge();
}
displayName();s