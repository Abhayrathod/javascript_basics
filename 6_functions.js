console.log('this is tut 10');

if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)
// const mygreet = function(name, thank='Thank You'){
//     let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
//     return msg;

// }


// let name = 'SkillF';
// let name2 ='Rohan';

// let val = mygreet(name, 'Thanks a lot');
// console.log(val);


// const myobj = {
//     name: "SkillF",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game())

// arr = ['fruit', 'vegetable', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index)
// });         


// -----------------arrow function 


console.log("ARROW FUNCTION");

// function abhay() {
//     console.log("this is also abhay");
// }

// const abhay = function (){
//     console.log("this is also abhay");
// }
// abhay();

//CREATING INTO ARROW FUNCTION

// const abhay = () =>{
//     console.log("displaying by arrow function");
// }
// abhay();

// const greet = function() {
//     return "gm";
// }
// console.log(greet());

// const greet1 = () =>  "gm";
// console.log(greet1());

// const greet2 = () => ({name:"abhay"});
// console.log(greet2());

// const greet3 = name => "gm" + " " + name;
// console.log(greet3("abhay"));

// const greet4 = (name,last) => "gm" + " " + name + " " + last;
// console.log(greet4("Abhay","tata"));




// #----------------------------------------2022
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  let v = hello();
  console.log(typeof v)
  console.log(v)
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  console.log(sum(9, 7))