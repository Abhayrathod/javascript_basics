// ----------------Linear search Iterative approach

// function searchArray(arr, n, x){
//     let i;
//     for (i=0;i<n;i++)
//         if (arr[i] == x)
//             return i;
//         return -1;
// }

// let arr = [1,2,3,4,5,6]
// let x = 6;
// let n = arr.length;

// let result = searchArray(arr, n, x);
// (result==-1) ? document.write("Element not present in the arrray") : document.write("Element is present at index" + result);


// -----------------------Linear search recursive approach

let linearSearch = (arr, size, key) => {
    if (size==0) {
        return -1;
    }
    else if (arr[size - 1] == key)
    {
        return size -1;
    }
    else
    {
        let ans = linearSearch(arr, size -1, key);
        return ans;
    }
};

let main = () => {
    let arr = [5,15,6,9,4];
    let key = 4;
    let ans = linearSearch(arr, 5, key);
    if (ans == -1){
        console.log(`The element ${key} is not found.`)
    } else {
        console.log(`The element ${key} is found at ${ans}th index of the given array.`)
    };
    return 0;
}
main();