$(document).ready(function() {
	function fizzBuzz() {
		for (var i = 1; i <= 100; i++) {
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
	fizzBuzz();
});