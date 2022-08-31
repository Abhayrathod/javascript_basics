console.log('This is tutorial 8');
// const age = 128;
const age = window.prompt("Enter your age: "); 
alert("Your age is " + age);
const doesDrive = false;
// const vari = 34;

if (age!=19){
    console.log('Age is not 19')
}

if(age !== 65){
    console.log('Age is not 65')
}

else{
    console.log('Age is not 19')
}

if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}

else{
    console.log('Vari is not defined');
}

if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}



// #-------------------------------------------------------------2022

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments


console.log("You can", (a<18? "not drive" :"drive"))    // this is ternary operator 

// #-----------------------------------------switch case

// const expr = 'Oranges';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }