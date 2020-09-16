/*
Problem:
Print the first 100 prime numbers
*/

printPrimes(100);
function printPrimes(nPrimes)
{
	var n = 1;
	var i = 2;
 
	while(n <= nPrimes)
	{
		if (isPrime(i))
		{
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