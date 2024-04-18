// printing anything  to the console using a function.
console.log("hello world");   //output hello world
 




// to check the datatypes we can {typeof}  keyword in javascript.

//data types in js

/*
Primitive Data Types:
Number: Represents numeric values (e.g., 10, 3.14, -5).
String: Represents textual data enclosed in quotes (e.g., 'Hello', "JavaScript").
Boolean: Represents a logical value (true or false).
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents an intentional absence of any value.
Special Data Type:
Symbol: Introduced in ECMAScript 6 (ES6), represents a unique and immutable value, often used as object property keys.
Composite Data Types:
Object: Represents a collection of key-value pairs (e.g., { name: 'John', age: 30 }).
Array: Represents an ordered list of values (e.g., [1, 2, 3]).
*/

// Number data type
let age = 25;
let price = 9.99;


// String data type
let names = 'Alice';
let message = "Welcome to JavaScript!";

// Boolean data type
let isActive = true;
let isLoggedOut = false;

// Undefined data type (variable declared but not assigned)
let x;
console.log(typeof x);  // Output: "undefined"

// Null data type (intentional absence of value)
let car = null;

// Symbol data type (ES6+ feature, unique and immutable)
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');

// Object data type (collection of key-value pairs)
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isActive: true
};

// Array data type (ordered list of values)
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// Output values and their types
console.log(age);        // Output: 25
console.log(typeof age); // Output: "number"

console.log(names);       // Output: "Alice"
console.log(typeof names);// Output: "string"

console.log(isActive);   // Output: true
console.log(typeof isActive);  // Output: "boolean"

console.log(x);          // Output: undefined
console.log(typeof x);   // Output: "undefined"

console.log(car);        // Output: null
console.log(typeof car); // Output: "object" (a known quirk in JavaScript)

console.log(sym1);       // Output: Symbol(key1)
console.log(typeof sym1);// Output: "symbol"

console.log(person);     // Output: { firstName: 'John', lastName: 'Doe', age: 30, isActive: true }
console.log(numbers);    // Output: [1, 2, 3, 4, 5]
console.log(fruits);     // Output: ["apple", "banana", "orange"]
