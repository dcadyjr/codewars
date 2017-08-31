
function divisions(n, divisor){

	var count = 0;
	var currentAnswer = 0;

	var divide = n / divisor;
	currentAnswer = divide;
	if (n > divisor){
		count++
	}
	
	for (i = 0; currentAnswer >= divisor; i++ ) {
		
		currentAnswer = currentAnswer / divisor;
		count++
	}
	console.log(count);
}

divisions(2,3);

