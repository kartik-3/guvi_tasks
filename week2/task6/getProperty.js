/*
Problem:
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
*/

var obj1 = {
	name: "kartik"
};
function getProperty(o, key) {
	return o[key];
}
console.log(getProperty(obj1, "name"));