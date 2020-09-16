/*	PROBLEM 0	*/
/*
Parsing two JSON objects and Compare:
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
*/

var expected = {foo: 5, bar: 6};
var actual = {bar: 6, foo: 5};
function assertObjectsEqual(actual, expected){
	let equal = false;
	for (let i in actual){
		equal = false;
		for (let j in expected){
			if (i === j) {
				if(actual[i] === expected[j]){
					equal = true;
					break;
				}
				else{
					return "Fail";
				}
			}
		}
		if (!equal){
			return "Fail";
		}
	}
	return "Pass"
}
console.log(assertObjectsEqual(actual,expected));