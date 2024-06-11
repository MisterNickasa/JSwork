//1 zadanie
class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(newRadius) {
      if (newRadius <= 0) {
        throw new Error("Radius must be positive.");
      }
  
      this._radius = newRadius;
    }
  
    get diameter() {
      return this._radius * 2;
    }
  
    calculateArea() {
      return Math.PI * this._radius * this._radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  // Создание объекта Circle
  const circle = new Circle(5);
  
  // Демонстрация свойств
  console.log("Радиус:", circle.radius);
  console.log("Диаметр:", circle.diameter);
  
  // Демонстрация методов
  console.log("Площадь:", circle.calculateArea());
  console.log("Длина окружности:", circle.calculateCircumference());
  
  // Изменение радиуса с помощью set-свойства
  circle.radius = 10;
  
  // Демонстрация свойств после изменения
  console.log("Радиус:", circle.radius);
  console.log("Диаметр:", circle.diameter);
  
  // Демонстрация методов после изменения
  console.log("Площадь:", circle.calculateArea());
  console.log("Длина окружности:", circle.calculateCircumference());
//2 zadanie
class HtmlElement {
    constructor(tagName, isSelfClosing = false) {
      this.tagName = tagName;
      this.isSelfClosing = isSelfClosing;
      this.textContent = "";
      this.attributes = [];
      this.styles = [];
      this.children = [];
    }
  
    setAttribute(name, value) {
      this.attributes.push({ name, value });
    }
  
    setStyle(name, value) {
      this.styles.push({ name, value });
    }
  
    addChild(element, position = "end") {
      if (position === "end") {
        this.children.push(element);
      } else if (position === "start") {
        this.children.unshift(element);
      }
    }
  
    getHtml() {
      let html = `<${this.tagName}`;
  
      // Добавление атрибутов
      for (const attribute of this.attributes) {
        html += ` ${attribute.name}="${attribute.value}"`;
      }
  
      // Добавление стилей
      if (this.styles.length > 0) {
        html += ` style="`;
        for (const style of this.styles) {
          html += `${style.name}: ${style.value};`;
        }
        html += '"';
      }
  
      // Добавление текстового содержимого
      if (this.textContent) {
        html += `>${this.textContent}`;
      } else if (this.isSelfClosing) {
        html += " />";
      } else {
        html += ">";
  
        // Добавление вложенных элементов
        for (const child of this.children) {
          html += child.getHtml();
        }
  
        html += `</${this.tagName}>`;
      }
  
      return html;
    }
  }
  
  // Создание элементов
  const div = new HtmlElement("div");
  const p = new HtmlElement("p");
  const span = new HtmlElement("span");
  
  // Установка атрибутов и стилей
  div.setAttribute("class", "container");
  div.setAttribute("id", "myDiv");
  div.setStyle("background-color", "#f0f0f0");
  p.setAttribute("class", "text");
  p.setStyle("font-size", "16px");
  span.setAttribute("class", "highlight");
  span.setStyle("color", "red");
  
  // Добавление текстового содержимого
  p.textContent = "Hello, world!";
  span.textContent = "This is important text.";
  
  // Добавление вложенных элементов
  div.addChild(p);
  p.addChild(span);
  
  // Получение HTML-кода
  const html1 = div.getHtml();
  
  // Добавление HTML-кода на страницу
  document.write(html1);

//3 zadanie
class CssClass {
    constructor(className) {
      this.className = className;
      this.styles = [];
    }
  
    setStyle(name, value) {
      const existingStyleIndex = this.styles.findIndex(
        (style) => style.name === name
      );
  
      if (existingStyleIndex !== -1) {
        this.styles[existingStyleIndex].value = value;
      } else {
        this.styles.push({ name, value });
      }
    }
  
    removeStyle(name) {
      const index = this.styles.findIndex((style) => style.name === name);
  
      if (index !== -1) {
        this.styles.splice(index, 1);
      }
    }
  
    getCss() {
      let css = `.${this.className} {`;
  
      for (const style of this.styles) {
        css += `${style.name}: ${style.value};`;
      }
  
      css += "}";
  
      return css;
    }
  }
  
  // Создание экземпляра класса
  const buttonClass = new CssClass("button");
  
  // Установка стилей
  buttonClass.setStyle("background-color", "#007bff");
  buttonClass.setStyle("color", "white");
  buttonClass.setStyle("padding", "10px 20px");
  
  // Удаление стиля
  buttonClass.removeStyle("padding");
  
  // Получение CSS-кода
  const css = buttonClass.getCss();
  
  // Вывод CSS-кода
  console.log(css);
//4 zadanie
class CssClass {
    // ... (код из предыдущего примера)
  }
  
  class HtmlElement {
    // ... (код из предыдущего примера)
  }
  
  class HtmlBlock {
    constructor() {
      this.styles = [];
      this.rootElement = new HtmlElement("div");
    }
  
    addStyle(cssClass) {
      this.styles.push(cssClass);
    }
  
    setRootElement(element) {
      this.rootElement = element;
    }
  
    getCode() {
      let html = "";
  
      // Добавление тегов style для всех стилей
      for (const style of this.styles) {
        html += `<style>${style.getCss()}</style>`;
      }
  
      // Добавление HTML-кода корневого элемента
      html += this.rootElement.getHtml();
  
      return html;
    }
  }
  
  // Создание экземпляров классов
  const block = new HtmlBlock();
  const buttonClass2 = new CssClass("button");
  const containerElement = new HtmlElement("div", true);
  const buttonElement = new HtmlElement("button");
  
  // Установка стилей для кнопки
  buttonClass2.setStyle("background-color", "#007bff");
  buttonClass2.setStyle("color", "white");
  buttonClass2.setStyle("padding", "10px 20px");
  
  // Добавление стилей в блок
  block.addStyle(buttonClass2);
  
  // Создание содержимого
  buttonElement.textContent = "Click me!";
  containerElement.addChild(buttonElement);
  
  // Установка корневого элемента
  block.setRootElement(containerElement);
  
  // Получение HTML-кода
  const html = block.getCode();
  
  // Добавление HTML-кода на страницу
  document.write(html);
    