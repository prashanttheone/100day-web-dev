//variable in js
//let is used to declare a variable. It allows you to create variables that are local to an entire block, scope of let is limited within the
// Variables declared inside a { } block cannot be accessed from outside the block:
let a=10;
console.log(a);//output: 10


/*In the above code, we have declared and initialized a variable named 'a' with value 10 using the keyword "let"*/

//var is used to declare a variable. it allows to you crate variables that are  accessible within the entire code base of your program./*
var b=10;
console.log(b); //output:10


function example() {
    console.log(x); // Output: undefined
    var x = 10;
    console.log(x); // Output: 10
}

example();
console.log(x); // Output: ReferenceError: x is not defined
