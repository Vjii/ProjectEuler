
	
	function addMultiples() {
		var input = document.getElementById("userInput"); 
	   	sum = 0
			for (i = 0; i < input.value; i++) { 
				if (i % 3 === 0) {
					sum += i; 
				} else if (i % 5 === 0) {
					sum += i;
				}
			}
		document.getElementById("multiplesAnswer").innerHTML = "<h4> Sum of multiples: " + sum + "</h4>";
		return false;
	};


//========================================================================================


//1. Add two previous terms to make the new number
//2. Add the new number to the sequence (variable)
//3. Check whether the number is even-valued; if so - add it to sum (another variable);
  	











	

	