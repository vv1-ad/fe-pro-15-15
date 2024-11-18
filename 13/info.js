//1. Функція, яка об'єднує два масиви за допомогою оператора Spread
function mergeArrays(array1, array2) {
    const mergedArray = [...array1, ...array2];
    console.log(mergedArray);
    return mergedArray;
}

mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

//2. Функція з оператором Rest для збереження решти аргументів у масив
function logStringAndArray(firstArg, ...restArgs) {
    console.log(`Рядок: ${firstArg}`);
    console.log(`Масив:`, restArgs);
}
:
logStringAndArray("Привіт", 1, 2, 3, "ще щось"); 

//3. Функція для обчислення середнього значення чисел
function calculateAverage(...numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

console.log(calculateAverage(10, 20, 30, 40)); // 25

//4. Функція, що виводить тип аргументу
function logType(value) {
    console.log(`Тип аргументу: ${typeof value}`);
}

logType(42);
logType("Hello");
logType({});

//5. Функція для перевірки типу змінної
function checkType(value) {
    if (typeof value === "number") {
        console.log("Це число");
    } else if (typeof value === "string") {
        console.log("Це рядок");
    } else {
        console.log("Це інший тип");
    }
}

checkType(100);
checkType("Привіт");
checkType(true);

//  6.
const header = document.getElementById("main-header");
console.log(header);

const sections = document.getElementsByClassName("section-class");
console.log(sections);

const divs = document.getElementsByTagName("div");
console.log(divs);

const firstItem = document.querySelector("#list li:first-child");
const lastItem = document.querySelector("#list li:last-child");
const thirdItem = document.querySelector("#list li:nth-child(3)");

console.log(firstItem);
console.log(lastItem);
console.log(thirdItem);

const allItems = document.querySelectorAll("#list li");
console.log(allItems);

const itemsArray = Array.from(allItems);
console.log(itemsArray);




