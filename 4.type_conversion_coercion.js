//TYPE CONVERSION
console.log("its coercion");
let myVar = String(34);
console.log(myVar, typeof(myVar));


let booleanVar = Array(true);
console.log(booleanVar, typeof(booleanVar));


let date = new Date();
console.log(date, typeof(date));


let arr = String([1,2,3,4,5,6]);
console.log(arr.length, (typeof arr));

let i = 10;
console.log(i.toString());

let stri = Number("12345gv");
stri = Number(true);
stri = Number(false);
console.log(stri, (typeof stri))


let number = parseInt('45.2156');
number = Number('45.2156');
console.log(number, (typeof number));


let number1 = parseFloat('45.2156');
console.log(number.toFixed(2), typeof(number1));

//TYPE COERCION

let mystr = "327";
let mynum  = 386;
console.log(mystr + mynum);