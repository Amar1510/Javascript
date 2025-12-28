//Immediately Invoked Function Expression (IIFE)
// used to remove global scope variables pollution

//Named IIFE
(function test() {
    console.log("DB connected");
})(); // semi-colon used to stop context after invoked

// ()(); // first parenthesis-> func definition, second -> func execution, semi-colon

//can be written like arrow function
//Unamed IIFE or Simple IIFE
(() => {
    console.log("DB connected TWO");
})();

//IIFE with parameters
((name) => { // parameter for declaration
    console.log(`DB connected TWO, ${name}`);
})("amar"); // argument for execution

