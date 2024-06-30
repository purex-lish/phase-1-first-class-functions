function receivesAFunction(callback) {
    callback();
}

 // Define the function returnsANamedFunction
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Inside named function");
    };
}

// Assign the returned function to a variable
const myFunction = returnsANamedFunction();

// Call the function returned by returnsANamedFunction
myFunction(); // Output: "Inside named function"

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Inside anonymous function");
    };
}
