    //With strict mode, you can not, use undeclared variables.

    "use strict";
    pi = 3.14;  

    
    // Inside function

    "use strict";
    myFunction();
    function myFunction() {
    pi = 3.14;   // This will cause an error because pi is not declared
    }