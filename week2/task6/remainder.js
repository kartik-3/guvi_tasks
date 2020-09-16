/*
Problem
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
*/

function remainder(num1,num2) {
	return num1%num2;
}
var res = remainder(1,3);
console.log(res);