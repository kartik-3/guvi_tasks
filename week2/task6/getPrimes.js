/*
Problem:
Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
*/

getPrimes(15, 100);
function getPrimes(nPrimes, startAt)
{
	let n = 1;
	let i = startAt;
	while (n <= nPrimes){
		if (isPrime(i)){
			console.log(n, "->", i);
			n++;
		}
		i++;
	}
}

function isPrime(n)
{
	for (let i = 2; i <= Math.sqrt(n); i ++){
		if (n%i == 0){
			return false;
		}
	}
	return true;
}