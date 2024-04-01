
// class Component {
//     constructor(selector) {
//         this.element = document.querySelector(selector);
//     }

//     blockHide() {
//         this.element.style.display = 'none';
//     }

//     editColor(color) {
//         this.element.style.color = color;
//     }
// }

// // Розширення класу Component класом Box, що додає додаткові параметри
// class Box extends Component {
//     constructor(selector, backgroundColor, width, height) {
//         super(selector); // Викликаємо конструктор батьківського класу
//         this.element.style.backgroundColor = backgroundColor;
//         this.element.style.width = width + 'px';
//         this.element.style.height = height + 'px';
//     }
// }

// // Створення кількох об'єктів класу Box з різними параметрами
// const box1 = new Box('#box1', 'blue', 100, 100);
// const box2 = new Box('#box2', 'red', 150, 150);
// const box3 = new Box('#box3', 'green', 200, 100);

// // Демонстрація використання методів з базового класу на об'єктах класу Box
// // Зачекайте 5 секунд, потім змініть колір тексту на білий для першого блоку і приховайте другий блок
// setTimeout(() => {
//     box1.editColor('white');
//     box2.blockHide();
// }, 5000);
class Person {
    constructor(name, age, occupation, nationality) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
    }

    // Метод для виведення інформації про особу
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}, Nationality: ${this.nationality}`;
    }
}

// Створення об'єктів класу Person
const person1 = new Person("John Doe", 30, "Software Engineer", "American");
const person2 = new Person("Anna Smith", 27, "Graphic Designer", "British");
const person3 = new Person("Ivan Ivanov", 35, "Project Manager", "Ukrainian");

// Додавання інформації про осіб на веб-сторінку
document.getElementById('box1').textContent = person1.displayInfo();
document.getElementById('box2').textContent = person2.displayInfo();
document.getElementById('box3').textContent = person3.displayInfo();
