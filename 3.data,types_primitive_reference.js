// Primitive data types

// String
let name1 = "harry";
console.log("My string is " + name1);
console.log("Data type is " + (typeof name1));

// Numbers
let marks = 34.4;
console.log("Data type of marks is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type of driver is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type on nullVar is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type of undef is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is of myarr is " + (typeof myarr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    'Rohan namuna': 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log("findname data type is " + typeof findName);

let date = new Date();
console.log("date type " + typeof date);

// #-------------------------------------------------------2022

// primitive data types in js
// nn bb ss u
// n - Number
// n - null
// b- byte 
// b - boolean
// s - string
// s - symbol
// u - undefined

let a = 345;
let b = null;
let c = true;
let d = BigInt("65") + BigInt("34");
let e = "abhay";
let f = Symbol("this is a symbol");
// let g = undefined;
let g;       // can also write this way to make it undefined

console.log(a, b, c, d, e, f, g)
console.log(typeof g)

// non-primitive or object in js

const newwe = {
    "age": 34,
    "name": "abhay",
    "height": 5.11,
    "personality": "none",
}
console.log(newwe["personality"])
console.log(newwe["age"])
console.log(newwe["name"])