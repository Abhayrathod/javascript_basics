function searchArray (arr, size, key) {
    let last = arr[size - 1]
    arr[size -1] = key
    let i=0;
    
    while (arr[i] != key)
        i++;
    
    arr[size - 1] = last;

    if (i<size) or (arr[size-1] = key) 
        document.write(key + "is present at index" + i);
    else {
        document.write("Element not found");
    }
}

let arr = [1,2,3,4,5,6]
const a = arr.length;
const key = 4

searchArray(arr, a, key)