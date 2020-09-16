/*
Remove duplicates from an array
*/

let arr = [1,1,1,2,3,4,44,4,55,55,5,5,55,5,6];

let map = new Array();
let len = arr.length;

for (let i = 0; i < len; i ++){
	if (!(map.includes(arr[i]))){
		map.push(arr[i]);

	}
}
console.log(map);