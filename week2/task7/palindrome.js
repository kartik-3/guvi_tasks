/*
Return all the palindromes in an array
*/

var s = ["asa", "aaa", "qwe", "nonon", "oppo"]
var p = function (arr){
	let res = new Array();
	for (let k in arr){
		let pal = true;
		for (let i = 0, j = arr[k].length-1; i < arr[k].length/2; i ++, j --){
			if (arr[k][i] != arr[k][j]){
				pal = false;
				break;
			}
		}
		if (pal){
			res.push(arr[k]);
		}
	}
	return res;
}

console.log(p(s));