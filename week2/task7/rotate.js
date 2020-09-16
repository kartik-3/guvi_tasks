/*
Rotate an array by k times and return the rotated array
*/

var arr = [1,2,3,4,5,6,7,8];

let k = 4;

for (let i = 0; i < k; i ++){
	arr.splice(0, 0, arr[arr.length-1]);
	arr.splice(arr.length-1, 1);
}
console.log(arr);