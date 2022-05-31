//🥇🥇
/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved
to the top of their scope before code execution.
Hoisting allows functions to be safely used in code before they are declared.
*/
//function hoisting : 🥇🥇
//One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tommy");
function catName(name) {
    console.log("My cat's name is " + name);  //My cat's name is Tommy
}

//without using function hoisting
function catName(name) {
    console.log("My cat's name is " + name);
}
catName("Tommy"); //My cat's name is Tommy//

// 💯💯💯💯 Using Let 💯💯💯💯

let greet = function() {
    console.log('Hi, there.💯💯💯💯');
}
greet(); // Output : Hi, there.💯💯💯💯

// meet();
// let meet = function() {
//     console.log('Hi, there.💯💯💯💯');
// }
//Output : ReferenceError: Cannot access 'meet' before initialization


//Variable Hoisting 🥇🥇🥇🥇
//Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 8055;
console.log(num); // Returns 8055 after the line with initialization is executed.

/*
Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
An exception will be thrown if a variable declared with let or const is read before it is initialized.
*/

//console.log(numb); // Throws ReferenceError exception - the interpreter doesn't know about `numb`.
//let numb = 6; // Initialization

let numb = 6;
console.log(numb);

const n = 60;
console.log(n);