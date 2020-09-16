/*	PROBLEM 1	*/
/*
Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
	let arr = new Array();
	for (let i in obj){
		arr.push(obj[i]);
	}
	return arr;
}

console.log(printAllValues(obj));