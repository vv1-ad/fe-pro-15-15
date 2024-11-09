Завдання 1: Створення класу та об'єкта 
class Person { 
    constructor(name, age) { 
        this.name = name; 
        this.age = age; 
    } 
} 
const john = new Person("John", 30); 
console.log("Об'єкт Person:", john); 
 
// Завдання 2: Методи класу 
Person.prototype.sayHello = function() { 
    console.log(`Привіт, мене звуть ${this.name}!`); 
}; 
john.sayHello(); 
 
// Завдання 3: Наслідування 
class Student extends Person { 
    constructor(name, age, studentId) { 
        super(name, age); 
        this.studentId = studentId; 
    } 
 
    study() { 
        console.log(`${this.name} зараз вчиться. ID студента: ${this.studentId}`); 
    } 
} 
const studentJohn = new Student("John", 30, "S12345"); 
studentJohn.sayHello(); 
studentJohn.study(); 
 
// Завдання для Math.min та Math.max 
function getMin(a, b) { 
    return Math.min(a, b); 
} 
function getMax(a, b) { 
    return Math.max(a, b); 
} 
console.log("Менше з двох чисел:", getMin(10, 20)); 
console.log("Більше з двох чисел:", getMax(10, 20)); 
 
// Завдання для Math.pow 
function power(base, exponent) { 
    return Math.pow(base, exponent); 
} 
console.log("Число піднесене до степеня:", power(2, 3)); 
 
// Завдання для Math.floor та Math.ceil 
function floorNumber(num) { 
    return Math.floor(num); 
} 
function ceilNumber(num) { 
    return Math.ceil(num); 
} 
console.log("Округлення вниз:", floorNumber(4.7)); 
console.log("Округлення вгору:", ceilNumber(4.3)); 
 
// Завдання для Date.getYear 
function getBirthYear(age) { 
    const currentYear = new Date().getFullYear(); 
    return currentYear - age; 
} 
console.log("Рік народження:", getBirthYear(23)); 
 
// Завдання для Date.toLocaleString 
const currentDate = new Date(); 
console.log("Поточна дата та час:", currentDate.toLocaleString()); 
 
// Завдання для String.split та toUpperCase 
const sentence = "Код на JavaScript для Prog Academy"; 
const wordsArray = sentence.split(" "); 
const upperCaseWords = wordsArray.map(word => word.toUpperCase()); 
console.log("Масив слів у верхньому регістрі:", upperCaseWords); 
 
// Додаткове завдання: Гра "камень, ножницы, бумага" 
function playGame() { 
    const options = ["камень", "ножницы", "бумага"]; 
    const userChoice = prompt("Введите ваш выбор: камень, ножницы или бумага").toLowerCase(); 
    const computerChoice = options[Math.floor(Math.random() * options.length)]; 
 
    if (!options.includes(userChoice)) { 
        alert("Неправильно. Введите камень, ножницы или бумага."); 
        return; 
    } 
 
    alert(`Вы ввели: ${userChoice}\nКомютер ввел: ${computerChoice}`); 
 
    if (userChoice === computerChoice) { 
        alert("Ничья!"); 
    } else if ( 
        (userChoice === "камень" && computerChoice === "ножницы") || 
        (userChoice === "ножницы" && computerChoice === "бумага") || 
        (userChoice === "бумага" && computerChoice === "камень") 
    ) { 
        alert("Вы выиграли!"); 
    } else { 
        alert("Вы проиграли!"); 
    } 
} 
 
// Запустити гру 
playGame();