// 1 punkt
const userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "!");
// 2 punkt
const yearN = 2024;
const yearUser = prompt("Укажите год рождения");
const age = yearN - yearUser;
alert("Вам " + age +" год");
// 3 punkt
const sideS = prompt("Напишите сторону квадрата ");
const p = 4* sideS;
alert("Периметр квадрата ="+ p);
//4 punkt
const side = prompt("Напишите радиус окружности ");
const pi = 3.14;
const plosh = pi * (side ** 2);
alert("Площадъ окружности "+ plosh);
//5 punkt
const distance = prompt("Введите расстояние между городами в км:");
const time = prompt("Введите время в часах, за которое вы хотите добраться:");
const speed = distance / time;
alert("Вам необходимо двигаться со скоростью " + speed + " км/час, чтобы добраться вовремя.");
//6 punkt
const EUR_RATE = 0.92;
const amountInUSD = prompt("Введите сумму в долларах:");
const amountInEUR = amountInUSD * EUR_RATE;
alert(amountInUSD + " долларов = " + amountInEUR.toFixed(2) + " евро");
//7 punkt
const flashDriveSize = prompt("Введите объем флешки в Гб:");
const flashDriveSizeInMb = flashDriveSize * 1024;
const fileSize = prompt("Введите размер файла в Мб:");
const numberOfFiles = Math.floor(flashDriveSizeInMb / fileSize);
alert("На флешку объемом " + flashDriveSize + " Гб поместится " + numberOfFiles + " файлов размером " + fileSize + " Мб.");
//8 punkt
const money = prompt("Введите сумму денег в кошельке:");
const chocolatePrice = prompt("Введите цену одной шоколадки:");
const numberOfChocolates = Math.floor(money / chocolatePrice);
const change = money % chocolatePrice;
alert("Вы можете купить " + numberOfChocolates + " шоколадок, и у вас останется " + change + " сдачи.");
//9 punkt
const number = prompt("Введите трехзначное число:");
const firstDigit = Math.floor(number / 100);
const secondDigit = Math.floor((number % 100) / 10);
const thirdDigit = number % 10;
const reversedNumber = thirdDigit * 100 + secondDigit * 10 + firstDigit;
alert("Число " + number + " задом наперед: " + reversedNumber);
//10 punkt
const num = prompt("Введите целое число:");
const isEven = num % 2 === 0;
alert(isEven ? "Число четное" : "Число нечетное");