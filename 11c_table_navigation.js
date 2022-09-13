let t = document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)            // this will show null because it is simply not present
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)