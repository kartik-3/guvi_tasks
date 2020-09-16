/*
Problem:
Reverse a string
*/

function reverseString(s)
{
	let str = "";
	for (let j = s.length-1; j > -1; j--){
		str += s[j];
	}
	return str;
}
console.log(reverseString("JavaScript"));