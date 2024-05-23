//1 zadanie
let car = {
    label: "Honda", model: "Cr-v", year: "2022", averageSpeed: "80",
};

function displayCarInfo(){
    alert(`Всё о машине: \nПроизводитель:${car.label} \nМодель:${car.model} \nГод:${car.year} \nСредняя скорость в км/ч:${car.averageSpeed}`);
}
displayCarInfo();
function calculateTime(distance){
let drivingTime = distance / car.averageSpeed;
let breakHours = Math.floor(drivingTime / 4);
let BreakNum = breakHours * 1;
let totalTime = drivingTime + BreakNum;
return totalTime;
}
let distance = 500;
let travelTime = calculateTime(distance);
alert(`Время в пути для расстояния ${distance} км: ${travelTime} часов`);
//2 zadanie
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  Fraction.prototype.add = function(otherFraction) {
    const newNumerator = this.numerator * otherFraction.denominator + this.denominator * otherFraction.numerator;
    const newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  };
  Fraction.prototype.subtract = function(otherFraction) {
    const newNumerator = this.numerator * otherFraction.denominator - this.denominator * otherFraction.numerator;
    const newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  };
  Fraction.prototype.multiply = function(otherFraction) {
    const newNumerator = this.numerator * otherFraction.numerator;
    const newDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(newNumerator, newDenominator);
  };
  Fraction.prototype.divide = function(otherFraction) {
    const newNumerator = this.numerator * otherFraction.denominator;
    const newDenominator = this.denominator * otherFraction.numerator;
    return new Fraction(newNumerator, newDenominator);
  };
  Fraction.prototype.reduce = function() {
    const gcd = this._gcd(this.numerator, this.denominator);
    this.numerator /= gcd;
    this.denominator /= gcd;
  };
  Fraction.prototype._gcd = function(a, b) {
    if (b === 0) {
      return a;
    } else {
      return this._gcd(b, a % b);
    }
  };
  const fraction1 = new Fraction(1, 2);
  const fraction2 = new Fraction(3, 4);
  
  const sum = fraction1.add(fraction2);
  const difference = fraction1.subtract(fraction2);
  const product = fraction1.multiply(fraction2);
  const quotient = fraction1.divide(fraction2);
  
  console.log(`Сумма: ${sum.numerator}/${sum.denominator}`);
  console.log(`Разность: ${difference.numerator}/${difference.denominator}`);
  console.log(`Произведение: ${product.numerator}/${product.denominator}`);
  console.log(`Частное: ${quotient.numerator}/${quotient.denominator}`);
  
  fraction1.reduce();
  console.log(`Сокращенная дробь 1: ${fraction1.numerator}/${fraction1.denominator}`);
  
  fraction2.reduce();
  console.log(`Сокращенная дробь 2: ${fraction2.numerator}/${fraction2.denominator}`);
//3 zadanie
function Time(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  Time.prototype.displayTime = function() {
    console.log(`${this.hours.toString().padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`);
  };
  Time.prototype.addSeconds = function(secondsToAdd) {
    this.seconds += secondsToAdd;
    this._normalizeTime();
  };
  Time.prototype.addMinutes = function(minutesToAdd) {
    this.minutes += minutesToAdd;
    this._normalizeTime();
  };
  Time.prototype.addHours = function(hoursToAdd) {
    this.hours += hoursToAdd;
    this._normalizeTime();
  };
  Time.prototype._normalizeTime = function() {
    while (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes++;
    }
    while (this.seconds < 0) {
      this.seconds += 60;
      this.minutes--;
    }
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
    while (this.hours >= 24) {
      this.hours -= 24;
    }
    while (this.hours < 0) {
      this.hours += 24;
    }
  };
  const time = new Time(20, 30, 45);
  time.displayTime(); // 20:30:45
  time.addSeconds(30);
  time.displayTime(); // 20:31:15
  time.addMinutes(15);
  time.displayTime(); // 20:46:15
  time.addHours(2);
  time.displayTime(); // 22:46:15
  
  