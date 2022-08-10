// three ways to declare a variable in js
// 1 var -- kind of obsolete
// 2 let
// 3 const -- used mostly

let a = "abhay"
// let a = 54     // cannot redeclare same variable in js ,gives error 
a = 54          // this is possible because this time we are not redeclaring variable

const abc = 34       // this variable cannot be changed because 'const' cannot let you change the value of variable
// let abc = 54
// Note - const and let are block level keywords while var is global

// const falana;   // throws error because value is not intialized, you have to give value
let falana;         // however this will not throw error 
var newss;          // this also will not throw any error

// Note - try to use the 'const' as much as possible and if need arises use let 

{
    const falana = 56
    console.log(falana)
}

console.log(falana)