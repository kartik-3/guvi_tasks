/*
Problem
Convert Hours into Seconds
Write a function that converts hours into seconds.
*/

var hour = 3;
function hourToSeconds(hour) {
	let n = parseInt(hour);
	return n*3600;
}
var data = hourToSeconds(hour);

console.log(data);