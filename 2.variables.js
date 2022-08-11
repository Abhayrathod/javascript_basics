var name = 'abhay';
var channel;
channel = "abhay2";
var marks = 89;
marks = 9;
console.log(name, channel, marks);

//RULES FOR CREATING JAVASCRIPT
/* 1. cannot start with numbers 
 2. can start with letters, or_ $
 3. case sensitive */

 var _city ='delhiiiiii';
 console.log(_city);

 //AFTER MODERN JAVASCRIPT DEVLOPERS , USE OF VAR IS REDUCED AND CONST AND LET IS FREQUENTLY USED

const ownersName = 'hariram';
// ownersName = 'abhay';
console.log(ownersName);

// const fruits     /* variable cannot be left blank you have to assign  value in this or it will give error*/


{
    let _city = 'ahmedabad';        //LET HAVE BLOCK LEVEL SCOPE
    console.log(_city);
}

console.log(_city);


const arr = [34,35,36,37];
arr.push = [38,39];
// arr = [39,40];           /* CANNOT REDECLARE THE VALUE */
console.log(arr);

/*  MOST COMMON PROGRAMMING CASE TYPES
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/


// #-----------------------------------------------2022

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