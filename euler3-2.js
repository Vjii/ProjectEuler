//1. Method 1 - push diving num to array and return the division result or argument's number if its no longer divisble 
	//1.1 Figure out a way to push the same number as many times as needed for their multiplication to be equal to the pre-division number 
//2. Method 2 - run method 1 on division result 
//3. Method 3 - loop the function with changing variable to have it run the next divided result with each iteration until it reaches prime numbers level 
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73]
number = 600851475143
var check = []
var factors = []

var findFirst = function(number) { 
	check = []
	for (i = 0; i < primes[i]; i++) {
		if (number % primes[i] === 0 && primes[i] !== number) {
			check.push(primes[i]);
			factors.push(primes[i]);
			return number / primes[i];
		} 
	}
	if (check.length === 0) {
		factors.push(number);
		number = "end";
		return number;
	} 
}	

var continued = function(number) {
	var i = 0;
	while (number !== "end") {
		i++;
		var number = findFirst(number);
	}
	console.log(factors);
}	

continued(number);

var answer = Math.max.apply(Math, factors);
console.log(answer);