// -------------------------Iterative approach

function reverseArray (arr, start, end) {
    while (start<end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp
        start ++;
        end --;
    }

}

function printArr (arr, size) {
    for (let i=0; i<size; i++){
        console.log(arr[i]);
    }
}

a = [1,2,3,4,5,6]
b = reverseArray(a, 0, 5)
console.log(b)
console.log(a)
console.log(printArr(a,5))

// ---------------------------Recursive approach

// const reverseArrayR = (arr, start, end) => {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
    
//     if (start+1<end-1) {
//         reverseArrayR(arr, start+1, end-1);
//     }
// }

// a = [1,2,3,4,5,6]
// reverseArrayR(a, 0, 5)
// console.log(a)