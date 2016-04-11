$(document).ready(function() {

	function fizzBuzz(countTo) {
		var countTo = prompt('Count to: ');
		if (countTo % 1 != 0) {
			$('#numList').append('<li>Please input an integer.</li>');
		} else {
			for (var i = 1; i <= parseInt(countTo); i++) {
				var value;
				if ((i % 3 === 0) && (i % 5 === 0)) {
					value = 'FizzBuzz';
				} else if (i % 3 === 0) {
					value = 'Fizz';
				} else if (i % 5 === 0) {
					value = 'Buzz';
				} else {
					value = i;
				}
				$('#numList').append('<li>' + value + '</li>');
			}
		}
	}	
	fizzBuzz();
});