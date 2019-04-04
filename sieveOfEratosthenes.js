const sieveOfEratosthenes = (num) => {
  let primes = new Array(num).fill(true);

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i < Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i)
    }
  }

  return result;
}

sieveOfEratosthenes(10)