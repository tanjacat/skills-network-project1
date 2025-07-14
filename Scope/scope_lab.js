// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
  // Block scope
  var blockVar = "I'm a variable with block scope";
  let blockLet = "I'm a let with block scope";
  const blockConst = "I'm a const with block scope";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
console.log(blockLet);

function show() {
    var functionVar = "I'm a variable with function scope";
    let functionLet = "I'm a let with block scope";
    const functionConst = "I'm a const with block scope";
  }
  show();
  
  console.log(functionVar);   // Generates ReferenceError
  console.log(functionLet);   // Generates ReferenceError
  console.log(functionConst); // Generates ReferenceError
  
//console.log(blockVar);
//console.log(blockLet);