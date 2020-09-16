/*
Problem:
Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
*/

var obj1 = {
};
function addProperty(o, key, value) {
	o[key] = value;
}
addProperty(obj1, "name", "kartik");
addProperty(obj1, "phone", 1234567890);
console.log(obj1);