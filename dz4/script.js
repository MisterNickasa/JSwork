//1 punkt 
let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));
function ravnator(a,b){
    if (a<b){
        return "-1";
    } else if(a>b){
        return "1"; 
    } else {
        return "0"; 
    }
}
let result = ravnator(a,b);
alert("Итого: " + result);
//2 punkt 
let num = parseInt(prompt("Введите число для которого хотите найти факториал: "));
function factorial(num){
    if (num === 0){
        return 1;
    } else {
        return num* factorial(num-1);
    }
}
let result1 = factorial(num);
alert("Факториал числа: " + num + " равен " + result1);
//3 punkt
let n1 = prompt("Введите 1 число: ");
let n2 = prompt("Введите 2 число: ");
let n3 = prompt("Введите 3 число: "); 
function summachisel(n1,n2,n3){
    return n1 + n2 + n3;
}
let result2 = summachisel(n1,n2,n3);
alert("Итого: "+ result2);
//4 punkt
function rectangArea(length,width){
    if (width === undefined ){
        width = length;
    }
    return length * width;
}
let length = parseInt(prompt("Введите длину: "));
let width = parseInt(prompt("Введите ширину: "));
let result3 = rectangArea(length,width);
alert("Площадъ: "+ result3);
//5 punkt
let number1 = parseInt(prompt("Введите число: "));
function isPerfectNumber(number1) {
    if (number1 <= 1) {
        return false;
    } 
    let sumOfDivisions = 1;
    for (let i = 2; i<=Math.sqrt(number1);i++){
        if(number1 % i === 0){
            sumOfDivisions += i + number1 / i;
        }
    }
    return sumOfDivisions === number1;
}
alert("Введенное число является совершенным: "+ isPerfectNumber());
//6 punkt
let min = parseInt(prompt("Введите минимальное: "));
let max = parseInt(prompt("Введите максимальное: "));

function isPerfectNumber(number) {
    if (number <= 1) {
        return false;
    }
  
    let sumOfDivisors = 1; 
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sumOfDivisors += i + number / i;
        }
    }
  
    return sumOfDivisors === number;
}

function findPerfectNumbersInRange(min, max) {
    const perfectNumbers = [];
  
    for (let number = min; number <= max; number++) {
        if (isPerfectNumber(number)) {
            perfectNumbers.push(number);
        }
    }
  
    return perfectNumbers;
}

const perfectNumbers = findPerfectNumbersInRange(min, max);

if (perfectNumbers.length > 0) {
    alert("Совершенные числа из диапазона: " + min + " -> " + max + ":\n" + perfectNumbers.join(", "));
} else {
    alert("В этом диапазоне нет совершенных чисел.");
}
//7 punkt
let hours = parseInt(prompt("Введите часы (0-23): "));
let minutes = parseInt(prompt("Введите минуты (0-59): "));
let seconds = parseInt(prompt("Введите секунды (0-59): "));

function formatTime(hours, minutes, seconds) {
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    throw new Error("Некорректные значения времени.");
  }
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

try {
  alert("Точное время: " + formatTime(hours, minutes, seconds));
} catch (error) {
  alert(error.message);
}
//8 punkt
function timeToSeconds(hours, minutes, seconds) {
    if (hours < 0 || minutes < 0 || seconds < 0) {
      throw new Error("Некорректные значения времени.");
    }
  
    return hours * 3600 + minutes * 60 + seconds;
  }
  alert("Точное время в секундах: " + timeToSeconds(hours,minutes,seconds));
  //9 punkt
  let seconds1 = parseInt(prompt("Введите секунды: "));
  function secondsToTime(seconds1) {
    if (seconds1 < 0) {
      throw new Error("Количество секунд не может быть отрицательным.");
    }

    const hours = Math.floor(seconds1 / 3600);
    const minutes = Math.floor((seconds1 % 3600) / 60);
    const remainingSeconds = seconds1 % 60;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  alert("Исходя из секунд время: " + secondsToTime(seconds1));
  //10 punkt
  function calculateTimeDifference(hours1, minutes1, seconds3, hours2, minutes2, seconds2) {
    // Преобразование введенных значений в секунды
    const seconds6 = timeToSeconds(hours1, minutes1, seconds3);
    const seconds7 = timeToSeconds(hours2, minutes2, seconds2);
  
    // Вычисление разницы в секундах
    const differenceInSeconds = Math.abs(seconds6 - seconds7);
  
    // Преобразование разницы в "чч:мм:сс"
    return secondsToTime(differenceInSeconds);
  }
  
  // Ввод данных пользователем
  const hours1 = parseInt(prompt("Введите часы для первой даты:"));
  const minutes1 = parseInt(prompt("Введите минуты для первой даты:"));
  const seconds3 = parseInt(prompt("Введите секунды для первой даты:"));
  const hours2 = parseInt(prompt("Введите часы для второй даты:"));
  const minutes2 = parseInt(prompt("Введите минуты для второй даты:"));
  const seconds2 = parseInt(prompt("Введите секунды для второй даты:"));
  
  // Вычисление и вывод разницы во времени
  const timeDifference = calculateTimeDifference(hours1, minutes1, seconds3, hours2, minutes2, seconds2);
  alert("Разница во времени: " + timeDifference);
  
  
  

  