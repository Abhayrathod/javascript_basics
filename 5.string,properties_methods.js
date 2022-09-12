console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            


//------------------------------------2022

let name1 = "Harry"
// console.log(name.length)
console.log(name1[0])
console.log(name1[1])
let friend = 'Prakash'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
let fruit = "Bana\"na"
console.log(fruit)





// ---------------------strign methods

let name2 = "Harry"
// console.log(name.length)

// console.log(name2.toUpperCase())
// console.log(name2.toLowerCase())
// console.log(name2.slice(2, 4))
// console.log(name2.slice(2))
// console.log(name2.replace("Har", "Per"))
// let friend = "Naman"
// console.log(name2.concat(" is a friend of ", friend, " Ok"))
// let friend2 = "      Meena        "
// console.log(friend2)
// console.log(friend2.trim())
let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4]= "o" // This is not possible 
console.log(fr)
// QuickQuiz: Use a for loop to print a string