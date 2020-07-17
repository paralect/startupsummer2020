function isPrime(num) {
  if (num < 1) return false;
  
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
  return num !== 1;
}

function nthPrime(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) res.push(i);    
  }

  return res;
}

module.exports = nthPrime;
