// Метод splice
//Завдання 1: Видалення елементів з середини масиву
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(3, 3); // Видаляємо 3 елементи, починаючи з індексу 3
console.log(array); // [1, 2, 3, 7, 8, 9]

///Завдання 2: Функція для видалення елементів за допомогою splice
function removeElements(arr, index, count) {
    arr.splice(index, count);
    return arr;
}

console.log(removeElements([10, 20, 30, 40, 50], 1, 2)); // [10, 40, 50]

//Метод map
//Завдання 1: Створення нового масиву з квадратами чисел
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

//Завдання 2: Функція з map для додавання рядка до кожного елемента
function transformArray(arr, transformer) {
    return arr.map(transformer);
}

console.log(transformArray([1, 2, 3], num => `Число: ${num}`)); // ["Число: 1", "Число: 2", "Число: 3"]

//Метод filter
//Завдання 1: Фільтрація парних чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]

//Завдання 2: Функція для фільтрації елементів за умовою
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([10, 15, 20, 25], num => num > 15)); // [20, 25]

//Заміна var на let і const
// Замість var
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Замість var
const message = 'test';
function example() {
    if (true) {
        const message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'test'
}


//Використання for...in для виведення значень об'єкта
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const key in person) {
    console.log(person[key]); 
}


//Використання for...of та for...in для об'єктів у масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (const student of students) {
    for (const key in student) {
        console.log(student[key]); // Виведе значення кожного ключа для кожного студента
    }
}
