function factorial(n) {
	let product = 1;
	while (n > 1) {
		product *= n;
		n--;
	}
	return product;
}

// Expected output:
//
// > factorial(5)
// => 120
factorial(5);
