/*
Problem:
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
*/

var obj1 = {
	name: "kartik",
	phone: 1234567890
};

function removeProperty(obj, key){
	delete obj[key];
}
removeProperty(obj1, "phone");
console.log(obj1);