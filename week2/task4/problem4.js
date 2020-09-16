/*	PROBLEM 4	*/
/*
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
*/

var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
	let newObject = {};
	newObject[arr[0]] = arr[arr.length-1];
	return newObject;
}

console.log(transformFirstAndLast(arr));