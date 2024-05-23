//1 punkt
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  console.log(power(2, 3)); // 8
  console.log(power(5, 2)); // 25
  console.log(power(10, 0)); // 1
//2 punkt
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  console.log(gcd(12, 18)); // 6
  console.log(gcd(24, 36)); // 12
  console.log(gcd(100, 150)); // 50
//3 punkt
function findMaxDigit(number) {
    if (number < 10) {
      return number;
    }
    const remainingDigits = Math.floor(number / 10);
    const maxDigitInRemainingDigits = findMaxDigit(remainingDigits);
    const firstDigit = number % 10;
    return Math.max(maxDigitInRemainingDigits, firstDigit);
  }
  console.log(findMaxDigit(12345)); // 5
  console.log(findMaxDigit(987654321)); // 9
  console.log(findMaxDigit(100)); // 1
//4 punkt
function isPrime(number, divisor = 2) {
    if (number < 2) {
      return false;
    }
    if (divisor === number) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return isPrime(number, divisor + 1);
  }
  console.log(isPrime(2)); // true
  console.log(isPrime(7)); // true
  console.log(isPrime(10)); // false
  console.log(isPrime(17)); // true
//5 punkt
function findAllFactors(number) {
    const factors = [];
    function findFactorsRecursively(currentFactor = 1) {
      if (currentFactor > number) return;
      if (number % currentFactor === 0) {
        factors.push(currentFactor);
        findFactorsRecursively(currentFactor + 1);
      } else {
        findFactorsRecursively(currentFactor + 1);
      }
    }
    findFactorsRecursively();
    return factors;
  }
  const number = 12;
  const factors = findAllFactors(number);
  console.log(`Все множители числа ${number}: ${factors.join(", ")}`);
//6 punkt
function fibonacci(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  const position = 6;
  const fibonacciNumber = fibonacci(position);
  console.log(`Число Фибоначчи по порядковому номеру ${position}: ${fibonacciNumber}`);
  
  
  
  
  