//1 punkt
let start = parseInt(prompt("Введите начало диапазона:"));
let end = parseInt(prompt("Введите конец диапазона:"));

// Проверка корректности ввода
if (start > end) {
  alert("Начало диапазона не может быть больше конца.");
} else {
  // Подсчет суммы
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  // Вывод результата
  alert(`Сумма чисел в диапазоне от ${start} до ${end}: ${sum}`);
}
//2 punkt
let num1 = parseInt(prompt("Введите 1 число: "));
let num2 = parseInt(prompt("Введите 2 число:"));
let a = num1;
let b = num2;
while(b){
    let temp = b;
    b = a % b;
    a = temp;
}
alert("НОД = " + a);
//3 punkt
let chisl = parseInt(prompt("Введите число"));
let delitels = [];
for (let i=1; i <= chisl;i++){
    if(chisl % i === 0){
        delitels.push(i);
    }
}
alert("Делители числа " + chisl+" " + delitels);
//4 punkt
let jumber = parseInt(prompt("Введите число мин 3-х значное: "));
let num_digits = 0;
let ok = jumber;
while (jumber > 0) {
  jumber = Math.floor(jumber / 10);
  num_digits++;
}
alert("В числе " + ok + " " + num_digits + " цифр");
//5 punkt
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Введите число: "));

  if (num > 0) {
    positiveCount++;
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  } else if (num < 0) {
    negativeCount++;
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  } else {
    zeroCount++;
  }
}
alert("Число Положительных чисел: "+ positiveCount + " Отрицательных: " + negativeCount + " Нулей: " + zeroCount + " Четных: " + evenCount + " Нечетных: " + oddCount);
//6 punkt
let continueCalculation = 1;

while (continueCalculation == 1) {
  let number1 = parseFloat(prompt("Введите первое число:"));
  let number2 = parseFloat(prompt("Введите второе число:"));
  let operation = prompt("Введите знак операции (+, -, *, /):");

  let result = 0;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        alert("Деление на ноль невозможно!");
        continue;
      }
      result = number1 / number2;
      break;
    default:
      alert("Неизвестная операция.");
      continue;
  }

  alert(`Результат: ${result}`);

  continueCalculation = prompt("Хотите решить еще один пример? Введите 1 если да, 0 если нет");
}
//7 punkt
let chislo = parseInt(prompt("Введите число: "));
let sdvig =  parseInt(prompt("Введите сдвиг: "));
let NumberString = chislo.toString();
let NumberLength = NumberString.length;
let NewIndex = (index) => (index + sdvig) % NumberLength;
let ShiftedNumber = "";
for (let i = 0;i < NumberLength;i++){
    ShiftedNumber += NumberString[NewIndex(i)];
}
ShiftedNumber = parseInt(ShiftedNumber);
alert("Сдвинутое число: " + ShiftedNumber);
//8 punkt 
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let currentDayIndex = 0;

while (confirm(`День недели: ${daysOfWeek[currentDayIndex]}. Хотите увидеть следующий день?`)) {
  currentDayIndex = (currentDayIndex + 1) % daysOfWeek.length;
}

alert("9 Пункт!");
//9 punkt
alert("Таблица умножения в console log");

// Цикл по числам от 2 до 9
for (let i = 2; i <= 9; i++) {
  // Заголовок столбца
  console.log(`\n${i} |`);

  // Цикл по числам от 1 до 10
  for (let j = 1; j <= 10; j++) {
    // Вывод результата умножения
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
//10 punkt
let min = 0;
let max = 100;

while (true) {
  let guess = Math.floor((min + max) / 2);

  let answer = prompt(`Ваше число > ${guess}, < ${guess} или == ${guess}?`);

  if (answer === ">") {
    min = guess + 1;
  } else if (answer === "<") {
    max = guess - 1;
  } else if (answer === "==") {
    alert(`Угадал! Ваше число: ${guess}`);
    break;
  } else {
    alert("Неверный ответ. Введите '>', '<' или '=='");
  }
}