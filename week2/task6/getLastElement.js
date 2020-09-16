/*
Problem:
Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
*/

function getLastElement(arr){
	return arr[arr.length-1];
}
console.log(getLastElement([1,3,5,6]));