//1. Add current + previous number to make the new number
//2. Add the new number to the sequence (array); 
//3. Check whether the number is even-valued; if so - add it to sum (variable);


function evenFibonacci() {
	var input = document.getElementById("userNumber2"); 
	var i = 1;
	var y = 1;
	var c = i + y; 
	var arr = [];
	sum = 0; 

	while (c <= input.value) {
		arr.push(y);
		arr.push(c);
		i = c + y;
		y = i + c; 
		c = y + i; 
		arr.push(i);
	}

	console.log(arr);

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
		  sum += arr[i]; 
		}
	}

	document.getElementById("multiplesAnswer2").innerHTML = "<h3> Sum of even numbers: " + sum + "</h3>";
	return false;
};










	

	