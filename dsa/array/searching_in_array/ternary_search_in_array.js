	//-------------------------------- JavaScript program to illustrate the iterative
	// approach to ternary search
	
	// Function to perform Ternary Search
	function ternarySearch(l, r, key, ar)

	{
		while (r >= l) {

			// Find the mid1 and mid2
			let mid1 = l + parseInt((r - l) / 3, 10);
			let mid2 = r - parseInt((r - l) / 3, 10);

			// Check if key is present at any mid
			if (ar[mid1] == key) {
				return mid1;
			}
			if (ar[mid2] == key) {
				return mid2;
			}

			// Since key is not present at mid,
			// check in which region it is present
			// then repeat the Search operation
			// in that region

			if (key < ar[mid1]) {

				// The key lies in between l and mid1
				r = mid1 - 1;
			}
			else if (key > ar[mid2]) {

				// The key lies in between mid2 and r
				l = mid2 + 1;
			}
			else {

				// The key lies in between mid1 and mid2
				l = mid1 + 1;
				r = mid2 - 1;
			}
		}

		// Key not found
		return -1;
	}
	
	let l, r, p, key;

	// Get the array
	// Sort the array if not sorted
	let ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	// Starting index
	l = 0;

	// length of array
	r = 9;

	// Checking for 5

	// Key to be searched in the array
	key = 5;

	// Search the key using ternarySearch
	p = ternarySearch(l, r, key, ar);

	// Print the result
	document.write("Index of " + key + " is " + p + "</br>");

	// Checking for 50

	// Key to be searched in the array
	key = 50;

	// Search the key using ternarySearch
	p = ternarySearch(l, r, key, ar);

	// Print the result
	document.write("Index of " + key + " is " + p);
	

	//--------------------------------------- JavaScript program to illustrate
	// recursive approach to ternary search
	
	// Function to perform Ternary Search
	function ternarySearch(l, r, key, ar)
	{
		if (r >= l) {

			// Find the mid1 and mid2
			let mid1 = l + parseInt((r - l) / 3, 10);
			let mid2 = r - parseInt((r - l) / 3, 10);

			// Check if key is present at any mid
			if (ar[mid1] == key) {
				return mid1;
			}
			if (ar[mid2] == key) {
				return mid2;
			}

			// Since key is not present at mid,
			// check in which region it is present
			// then repeat the Search operation
			// in that region

			if (key < ar[mid1]) {

				// The key lies in between l and mid1
				return ternarySearch(l, mid1 - 1, key, ar);
			}
			else if (key > ar[mid2]) {

				// The key lies in between mid2 and r
				return ternarySearch(mid2 + 1, r, key, ar);
			}
			else {

				// The key lies in between mid1 and mid2
				return ternarySearch(mid1 + 1, mid2 - 1, key, ar);
			}
		}

		// Key not found
		return -1;
	}
	
	let l, r, p, key;

	// Get the array
	// Sort the array if not sorted
	let ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

	// Starting index
	l = 0;

	// length of array
	r = 9;

	// Checking for 5

	// Key to be searched in the array
	key = 5;

	// Search the key using ternarySearch
	p = ternarySearch(l, r, key, ar);

	// Print the result
	document.write("Index of " + key + " is " + p + "</br>");

	// Checking for 50

	// Key to be searched in the array
	key = 50;

	// Search the key using ternarySearch
	p = ternarySearch(l, r, key, ar);

	// Print the result
	document.write("Index of " + key + " is " + p);
