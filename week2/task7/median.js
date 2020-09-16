/*
Return median of two sorted arrays of same size 
*/

var arr1 = [1,2,3,4,5,50,100,120];
var arr2 = [10,15,16,23,45,56,345];
let j = 0, k = 0;
let arr3 = new Array();

for (let i = 0; i < arr1.length+arr2.length; i ++){
	if (j == arr1.length){
		arr3.push(arr2[k++]);
	}
	else if (k == arr2.length){
		arr3.push(arr1[j++])
	}
	else if (arr1[j] <= arr2[k]){
		arr3.push(arr1[j++]);
	}
	else{
		arr3.push(arr2[k++]);
	}
}

console.log(arr3[Math.floor((arr1.length + arr2.length)/2)]);