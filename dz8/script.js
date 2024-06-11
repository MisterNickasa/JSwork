//1 zadanie
// Класс простого маркера
class SimpleMarker {
    constructor(color, inkLevel = 100) {
      this.color = color;
      this.inkLevel = inkLevel;
    }
  
    print(text) {
      for (let i = 0; i < text.length; i++) {
        if (this.inkLevel >= 0.5) {
          console.log("%c" + text[i], `color: ${this.color}`);
          this.inkLevel -= 0.5;
        } else {
          break;
        }
      }
    }
  }
  
  // Класс заправляющегося маркера
  class RefillableMarker extends SimpleMarker {
    constructor(color, inkLevel = 100) {
      super(color, inkLevel);
    }
  
    refill() {
      this.inkLevel = 100;
    }
  }
  
  // Демонстрация работы маркеров
  
  // Создание маркеров
  const simpleMarker = new SimpleMarker("red");
  const refillableMarker = new RefillableMarker("blue");
  
  // Печать текста с помощью простого маркера
  simpleMarker.print("Hello, world!");
  
  // Печать текста с помощью заправляющегося маркера
  refillableMarker.print("This is a refillable marker.");
  
  // Заправка заправляющегося маркера
  refillableMarker.refill();
  
  // Печать текста с помощью заправляющегося маркера после заправки
  refillableMarker.print("The marker has been refilled.");

//2 zadanie
class ExtendedDate extends Date {
    // Метод для вывода даты текстом
    getDateText() {
      const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];
  
      const day = this.getDate();
      const month = monthNames[this.getMonth()];
      return `${day} ${month}`;
    }
  
    // Метод для проверки – это прошедшая дата или будущая
    isFutureDate() {
      const now = new Date();
      return this.getTime() >= now.getTime();
    }
  
    // Метод для проверки – високосный год или нет
    isLeapYear() {
      const year = this.getFullYear();
      return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
  
    // Метод для получения следующей даты
    getNextDate() {
      const nextDate = new Date(this.getTime());
      nextDate.setDate(this.getDate() + 1);
      return nextDate;
    }
  }
  
  // Создание объекта ExtendedDate
  const date = new ExtendedDate(2024, 11, 25);
  
  // Демонстрация новых методов
  console.log("Дата текстом:", date.getDateText());
  console.log("Будущая дата:", date.isFutureDate());
  console.log("Високосный год:", date.isLeapYear());
  
  const nextDate = date.getNextDate();
  console.log("Следующая дата:", nextDate.getDateText());

//3 zadanie
class Employee {
    constructor(name, surname, position, salary) {
      this.name = name;
      this.surname = surname;
      this.position = position;
      this.salary = salary;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  }
  
  class EmpTable {
    constructor(employees) {
      this.employees = employees;
    }
  
    getHtml() {
      let html = `<table>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Должность</th>
          <th>Зарплата</th>
        </tr>`;
  
      for (const employee of this.employees) {
        html += `<tr>
          <td>${employee.name}</td>
          <td>${employee.surname}</td>
          <td>${employee.position}</td>
          <td>${employee.salary}</td>
        </tr>`;
      }
  
      html += `</table>`;
  
      return html;
    }
  }
  
  // Создание массива работников
  const employees = [
    new Employee("Иван", "Иванов", "Менеджер", 50000),
    new Employee("Петр", "Петров", "Программист", 70000),
    new Employee("Ольга", "Сидорова", "Бухгалтер", 45000),
  ];
  
  // Создание объекта EmpTable
  const empTable = new EmpTable(employees);
  
  // Получение HTML-кода
  const html = empTable.getHtml();
  
  // Вывод HTML-кода на экран
  console.log(html);

//4 zadanie
class StyledEmpTable extends EmpTable {
    constructor(employees) {
      super(employees);
    }
  
    getStyles() {
      return `<style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
  
        th, td {
          border: 1px solid black;
          padding: 10px;
        }
      </style>`;
    }
  
    getHtml() {
      return this.getStyles() + super.getHtml();
    }
  }
  
  // Создание массива работников
  const employees1 = [
    new Employee("Иван", "Иванов", "Менеджер", 50000),
    new Employee("Петр", "Петров", "Программист", 70000),
    new Employee("Ольга", "Сидорова", "Бухгалтер", 45000),
  ];
  
  // Создание объекта StyledEmpTable
  const styledEmpTable = new StyledEmpTable(employees1);
  
  // Получение HTML-кода
  const html2 = styledEmpTable.getHtml();
  
  // Вывод HTML-кода на экран
  console.log(html2);
  