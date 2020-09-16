/*
Problem:
Fill in your code that takes an number minutes and converts it to seconds.
*/

var min = 5;
function toSeconds(min) {
	let n = parseInt(min);
	return n*60;
}
var secs = toSeconds(min);
console.log(secs);