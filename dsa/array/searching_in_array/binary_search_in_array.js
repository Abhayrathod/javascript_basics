// Program to implement iterative Binary Search


// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

// function binarySearch(arr, x)
// {	
// 	let l = 0;
// 	let r = arr.length - 1;
// 	let mid;
// 	while (r >= l) {
// 		mid = l + Math.floor((r - l) / 2);

// 		// If the element is present at the middle
// 		// itself
// 		if (arr[mid] == x)
// 			return mid;

// 		// If element is smaller than mid, then
// 		// it can only be present in left subarray
// 		if (arr[mid] > x)
// 			r = mid - 1;
			
// 		// Else the element can only be present
// 		// in right subarray
// 		else
// 			l = mid + 1;
// 	}

// 	// We reach here when element is not
// 	// present in array
// 	return -1;
// }

// 	arr =new Array(2, 3, 4, 10, 40);
// 	x = 10;
// 	n = arr.length;
// 	result = binarySearch(arr, x);
	
// (result == -1) ? document.write("Element is not present in array")
// 			: document.write ("Element is present at index " + result);


// // ------------------------------------Another iterative approach


// function binarySearch(v,To_Find)
// {
// 	let lo = 0;
// 	let hi = v.length - 1;
// 	let mid;
	
// 	// This below check covers all cases , so need to check
// 	// for mid=lo-(hi-lo)/2
// 	while (hi - lo > 1) {
// 		let mid = (hi + lo) / 2;
// 		if (v[mid] < To_Find) {
// 			lo = mid + 1;
// 		}
// 		else {
// 			hi = mid;
// 		}
// 	}
// 	if (v[lo] == To_Find) {
// 		console.log( "Found At Index " + lo);
// 	}
// 	else if (v[hi] == To_Find) {
// 		console.log("Found At Index " + hi);
// 	}
// 	else {
// 		console.log("Not Found");
// 	}
// }
// v = [ 1, 3, 4, 5, 6 ];
// let To_Find = 1;
// binarySearch(v, To_Find);
// To_Find = 6;
// binarySearch(v, To_Find);
// To_Find = 10;
// binarySearch(v, To_Find);



// ------------------------------------Recursive approach 


// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(arr, l, r, x){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}
let main = () => {
let arr = [ 2, 3, 4, 10, 40 ];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? document.write( "Element is not present in array")
				: document.write("Element is present at index " +result);
console.log(result)
}
main()