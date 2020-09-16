/*	
Problem:
Write a function called “getOpposite”.
Given a number, return its opposite	*/

var num = -25;
function getOpposite(num) {
	let n = parseInt(num);
	return n - 2*n;
}
var result = getOpposite(num);
console.log(result);