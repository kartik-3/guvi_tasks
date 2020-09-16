/*	PROBLEM 2	*/
/*
Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllKeys(obj) {
	let arr = new Array();
	for (let i in obj){
		arr.push(i);
	}
	return arr;
}

console.log(printAllKeys(obj));