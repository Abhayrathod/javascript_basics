// create a varaible of type string and add a number to it

let a = "abhay";
let b = 34;
console.log(a+b)

//use typeof operator to find datatype of above question

console.log(typeof (a+b))

// create a const object in js. can you change it to hold a number later?

const abc = {
    name: "abhay",
    section: 2,
}
abc["name"] = "newuser"
abc["friend"] = "null"
console.log(abc)
// abc = 34         // cannot add a string or number to this variable because it is now linked to object

// create a word meaning dictionary of 5 words in js program

const dict = {
    appreciate: "to be grateful and bla bla",
    new: "the new object",
    old: "the olf object",
}

console.log(dict.appreciate)
console.log(dict["appreciate"])
