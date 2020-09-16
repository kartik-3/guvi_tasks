/*
Problem:
Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
*/

function powersOfTwo (n){
	let arr = [];
	for (let i = 0; i <= n; i++){
		arr.push(2**i);
	}
	return arr;
}
console.log(powersOfTwo(8));