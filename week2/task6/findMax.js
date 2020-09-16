/*
Problem:
Find the maximum number in an array of numbers
*/

function findMax(ar)
{
	let max = -2;
	ar.forEach((i) => {
		max = max<i ? i : max;
	});
	return max;
}
var ar = [-5, 10, -3, 12, 900, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);