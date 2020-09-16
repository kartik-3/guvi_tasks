/*	PROBLEM 6	*/
/*
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
*/

var arr = 
		[
			[
				["firstName", "Vasanth"],
				["lastName", "Raja"],
				["age", 24],
				["role", "JSWizard"]
			],
			[
				["firstName", "Sri"],
				["lastName", "Devi"],
				["age", 28],
				["role", "Coder"]
			]
		];
function transformEmployeeData(arr) {
	var transformEmployeeList = [];
	for (let i in arr){
		let newobject = new Object();
		for (let j in arr[i]){
			newobject[arr[i][j][0]] = arr[i][j][1];
		}
		transformEmployeeList.push(newobject);
	}
	return transformEmployeeList;
}

console.log(transformEmployeeData(arr));