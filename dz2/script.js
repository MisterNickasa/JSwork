//1 punkt
let age = prompt("Сколько вам лет? ");
if (age < 0) {
  alert("Возраст должен быть неотрицательным.");
} else if (age <= 2) {
  alert("Вы ребенок.");
} else if (age <= 12) {
  alert("Вы подросток.");
} else if (age <= 18) {
  alert("Вы подросток.");
} else if (age <= 60) {
  alert("Вы взрослый.");
} else {
  alert("Вы пенсионер.");
}
//2 punkt
let number = prompt("Введите число 0-9 ");
if (number == 0){
    alert(")");
} else if (number == 1){
    alert("!");
} else if (number == 2){
    alert("@");
} else if (number == 3){
    alert("#");
} else if (number == 4){
    alert("$");
} else if (number == 5){
    alert("%");
} else if (number == 6){
    alert("^");
} else if (number == 7){
    alert("&");
} else if (number == 8){
    alert("*");
} else {
    alert("(");
}
//3 punkt
let num = prompt("Введите 3-х значное число: ");
num = num.toString().split('');
switch (num.length){
    case 3:
        if(num[0] == num[1] | num[1] == num[2] | num[0] == num[2]){
            alert("Число содержит одинаковые цифры");
        } else {
            alert("Число не содержит повторений");
        }        
}
//4 punkt
let year = prompt("Введите год: ")
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("Год високосный!");
} else {
    alert("Год не високосный!");
}
//5 punkt
let number1 = prompt("Введите пятиразрядное число: ");
number1 = number1.toString().split('');
if (number1[0] == number1[4]|number1[1] == number1[3]){
    alert("Число является палиндромом");
} else{
    alert("Число не является палиндромом");
}
//6 punkt
let USD = prompt("Введите сумму USD которую хотите перевести: ");
let value = prompt("Введите валюту в которую хотите конвертировать: ");
const EUR = 0.94;
const UAN = 28.48;
const AZN = 1.7;
if (value == "EUR"){
    USD = USD * 0.94;
    alert("Итого EUR = "+ USD);
} else if (value == "UAN"){
    USD = USD * 28.48;
    alert("Итого UAN = "+ USD);
} else {
    USD = USD * 1.7;
    alert("Итого AZN = "+ USD);
}
//7 punkt
let check = promt("Введите сумму покупки:");
if (200 < check < 300){
    check = check - ((check * 3)/100);
    alert("Сумма после скидки в 3%"+ check);
} else if (300<check<500){
    check = check -((check * 5)/100);
    alert("Сумма после скидки в 5%"+ check);
} else if (500< check){
    check = check - ((check * 7)/100);
    alert("Сумма после скидки в 7%"+ check);
} else{
    alert("Неверный чек");
}
//8 punkt
let dlina = prompt("Введите длину окружности: ");
let perimetr = prompt("Введите периметр квадрата: ");
const radius = dlina / (2 * Math.PI);
const squareside = perimetr / 4;
if (radius*2 <= squareside) { 
    alert("Поместиться");
} else {
    alert("Не поместиться");
}
//9 punkt
function displayQuestions() {
    const questions = [
      {
        question: "Какая из этих стран не имеет выхода к морю?",
        options: ["Казахстан", "Боливия", "Монголия"],
        correctAnswer: "Монголия",
      },
      {
        question: "Какая из этих рек самая длинная?",
        options: ["Амазонка", "Нил", "Миссисипи"],
        correctAnswer: "Амазонка",
      },
      {
        question: "Какой из этих городов является столицей Франции?",
        options: ["Берлин", "Париж", "Рим"],
        correctAnswer: "Париж",
      },
    ];
  
    let score = 0;
  
    // Отображение вопросов и обработка ответов
    for (const question of questions) {
      const answer = prompt(question.question + "\n" + question.options.join("\n"));
      if (answer === question.correctAnswer) {
        score += 2;
        alert("Правильно! Вы получаете 2 балла.");
      } else {
        alert("Неправильно. Правильный ответ: " + question.correctAnswer);
      }
    }
  
    // Отображение результатов
    alert("Тест завершен. Вы набрали " + score + " баллов.");
  }
  displayQuestions();
  //10 punkt
  function getNextDate(day, month, yea) {
    // Проверка на високосный год
    const isLeapYear = (yea % 4 === 0 && yea % 100 !== 0) || yea % 400 === 0;
  
    // Дни в каждом месяце
    const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Проверка на конец месяца
    if (day === daysInMonth[month - 1]) {
      // Переход на следующий месяц
      day = 1;
      month++;
    }
  
    // Проверка на конец года
    if (month === 12) {
      // Переход на следующий год
      month = 1;
      yea++;
    }
  
    // Возврат следующей даты
    return { day, month, yea };
  }
  
  // Ввод даты пользователем
  const day = parseInt(prompt("Введите день:"));
  const month = parseInt(prompt("Введите месяц:"));
  const yea = parseInt(prompt("Введите год:"));
  
  // Получение следующей даты
  const nextDate = getNextDate(day, month, yea);
  
  // Вывод результата
  alert(`Следующая дата: ${nextDate.day}.${nextDate.month}.${nextDate.yea}`);