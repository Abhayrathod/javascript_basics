console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

console.log('done');         


// #---------------------------------------------------2022 for loops

// // Program to add first n natural numbers
// let sum = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 0; i < n; i++) {
//   sum += (i + 1)
//   // console.log((i+1), "+")
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)
// // console.log(i)


// #--------------for loop in browser

// let num = prompt("enter the numbers")
// n = Number.parseInt(num)
// for (i = 0; i<500; i++){
//     console.log(i)
// }




// let obj = {
//   harry: 90,
//   shubh: 45,
//   shivika: 56,
//   ritika: 57,
//   shiv: 23
// }

// // For in loop
// for (let a in obj) {
//   console.log("Marks of " + a + " are " + obj[a])
// }

// For of loop
// for (let b of "Harry") {
//   console.log(b)
// }
