//1. Підрахунок суми парних чисел в діапазоні
let start = 1;
let end = 20;
let sum = 0;
let i = start;

while (i <= end) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

//2. Таблиця множення для конкретного числа 
console.log("Сума парних чисел:", sum);

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

//3. Зворотний лічильник від 10 до 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//4. Перевірка числа на парність чи непарність
let num = 7;

if (num % 2 === 0) {
    console.log(`${num} є парним числом.`);
} else {
    console.log(`${num} є непарним числом.`);
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ділення на нуль неможливе";
    }
    return a / b;
}

//5. Калькулятор з використанням switch
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Ділення на нуль неможливе";
    }
    return a / b;
}

function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Невідома операція";
    }
}

console.log(calculator('+', 10, 5)); // 15

//6. Перетворення стрілкової функції на звичайну
function multiplyValues(a, b, c) {
    return a * b * c;
}

//Додаткова робота 1
function hiUser(user) {
    console.log(`Вітаю ${user}`);
}

function wellcomUser(users, callback) {
    for (let user of users) {
        callback(user);
    }
}

wellcomUser(['Анна', 'Олег', 'Марія'], hiUser);

//Додаткова робота 2
const hiUser = user => console.log(`Вітаю ${user}`);

const wellcomUser = (users, callback) => {
    for (let user of users) {
        callback(user);
    }
};

wellcomUser(['Анна', 'Олег', 'Марія'], hiUser);


