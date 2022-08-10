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