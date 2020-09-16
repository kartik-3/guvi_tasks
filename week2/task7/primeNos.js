/*
Return all the prime numbers in an array
*/

let arr = [1,2,3,4,5,6,7,8,9,10];

(function (arr){
	let str = "";
	for (let i = 0; i < arr.length; i ++){
		let isPrime = true;
		if (arr[i] > 1){
			for (let j = 2; j <= Math.sqrt(arr[i]); j ++){
				if (arr[i] % j == 0){
					isPrime = false;
					break;
				}
			}
			if (isPrime){
				str += arr[i] + " ";
			}
		}
	}
	console.log(str.trim());
})(arr)