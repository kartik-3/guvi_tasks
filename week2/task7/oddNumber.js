/*	Print odd numbers in an array	*/

var a = [1,2,3,4,5,6,7,8,9,10];

var odd = function (arr) {
	var o = arr.filter((num) =>{
		return (num % 2 != 0);
	})
	return o;
}
console.log(odd(a));