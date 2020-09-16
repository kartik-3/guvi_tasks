/*
Sum of all numbers in an array
*/

var a = [1,2,3,4,5,6,7,8,9,10];

let sum = function (arr){
	let s = arr.reduce((currentTotal, num) => {
		return currentTotal + num;
	});
	return s;
};

console.log(sum(a));