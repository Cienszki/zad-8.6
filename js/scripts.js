var a = prompt('give me number'),
	b = prompt('one more'),
	value = (a * a) - (2 * a * b) - (b * b);
	isPositive = value < 0 ? ' Negative ' : ' Positive';

if(value == 0) {
	isPositive = 0;
}

console.log(value + ' ' + isPositive);


