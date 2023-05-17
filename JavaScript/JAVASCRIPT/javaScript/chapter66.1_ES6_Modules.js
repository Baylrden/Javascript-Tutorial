// The idea behind a module that it's a file of reusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code more reusable and maintainable
// Think of modules as separate chapters of a book


import * as MathUtil from  "./chapter66.2_math_Util.js";

let pi = MathUtil.PI;
console.log(pi);

//HTML BODY:

//<script type="module" src="chapter66.1_ES6_Modules.js"></script>

// dont forget ` type = "module" `.