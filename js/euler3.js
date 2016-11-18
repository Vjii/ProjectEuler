//1. Method 1 - push diving num to array and return the division result or argument's number if its no longer divisble 
	//1.1 Figure out a way to push the same number as many times as needed for their multiplication to be equal to the pre-division number 
//2. Method 2 - run method 1 on division result 
//3. Method 3 - loop the function with changing variable to have it run the next divided result with each iteration until it reaches prime numbers level 
function primeFactorization() { 

	number = document.getElementById("userNumber3").value;	
	console.log(number);

	divider = [];
	for (i = 2; i < 100000; i++) {
		divider.push(i);
	} 

	var check = []
	var factors = []
	var count = 0; 

	var findFactors = function(number) { 
		check = []
		
		for (i = 0; i < divider[i]; i++) {
			
			if (number % divider[i] === 0 && divider[i] != number) {
				if (number !== "" && number !== "0") {
				check.push(divider[i]);
				factors.push(divider[i]);
				count ++; 
				return number / divider[i];
				}	
			} 
		}

		if (check.length === 0 && count > 0) {
			factors.push(number);
			number = "end";
			return number;
		} else {
			factors.push("Your number already is a prime number. Try a different one!");
			number = "end";
			return number;
		}

	}	

	var loop = function(number) {
		var i = 0;
		while (number !== "end" && i < 10000) {
			i++;
			var number = findFactors(number);
		}
	}	

	loop(number);
	var answer = Math.max.apply(Math, factors);
	if (isNaN(answer) === true) {
		answer = "Not available"
	} 

	document.getElementById("multiplesAnswer3").innerHTML = "<h4> Prime factors of your	number are: "  + factors.toString() + " </h4>"  + "<h4> The largest prime factor of your number is: " + answer + " </h4>";
     return false;
}

