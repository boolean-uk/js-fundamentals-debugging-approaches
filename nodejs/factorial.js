function factorial(n) {
  let product = 1
  while (n > 0) {

    product *= n;
    n -= 1;
    
  }
  console.log('product'+product);
  return product
}

// Expected output:
//
factorial(5)
// => 120
