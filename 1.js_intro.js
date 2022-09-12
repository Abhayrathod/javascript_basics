console.time('Your code Took');
console.log('Hello console');
console.log(4+34);
console.log(34);
console.log(true);
console.log([34,2,1,2]);
console.log({harry: 'this', marks:34});
console.table({harry: 'this', marks:34});
console.warn('This is a warning');
console.timeEnd('Your code Took');
// console.clear();
console.assert(566<189, 'Age >189 is not possible')
console.error('This is an error')

/*
this
is a
multiline comment
*/


// --------------------------------------------2022

alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(a)
}
else {
  document.write("Please allow me to write")
}