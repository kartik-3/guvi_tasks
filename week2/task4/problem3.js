/*	PROBLEM 3	*/
/*
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
*/

var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
	let arr = new Array();

	for (let i in obj){
		let tempArr = new Array();
		tempArr.push(i, obj[i]);
		arr.push(tempArr);
	}
	return arr;
}

console.log(convertListToObject(obj));