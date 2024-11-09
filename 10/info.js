// push 
// Завдання 1 
let arrayPush = []; 
arrayPush.push(1, 2, 3, "тест"); 
console.log("Завдання push 1:", arrayPush); 
 
// Завдання 2 
function addElementToArray(arr, element) { 
    arr.push(element); 
    return arr; 
} 
console.log("Завдання push 2:", addElementToArray([1, 2, 3], 4)); 
 
// pop 
// Завдання 1 
let arrayPop = [1, 2, 3, 4]; 
arrayPop.pop(); 
console.log("Завдання pop 1:", arrayPop); 
 
// Завдання 2 
function removeLastElement(arr) { 
    arr.pop(); 
    return arr; 
} 
console.log("Завдання pop 2:", removeLastElement([1, 2, 3, 4])); 
 
// unshift 
// Завдання 1 
let arrayUnshift = [2, 3, 4]; 
arrayUnshift.unshift(0, 1); 
console.log("Завдання unshift 1:", arrayUnshift); 
 
// Завдання 2 
function addElementToStart(arr, element) { 
    arr.unshift(element); 
    return arr; 
} 
console.log("Завдання unshift 2:", addElementToStart([2, 3, 4], 1)); 
 
// shift 
// Завдання 1 
let arrayShift = [1, 2, 3, 4]; 
arrayShift.shift(); 
console.log("Завдання shift 1:", arrayShift); 
 
// Завдання 2 
function removeFirstElement(arr) { 
    arr.shift(); 
    return arr; 
} 
console.log("Завдання shift 2:", removeFirstElement([1, 2, 3, 4])); 
 
// fill 
// Завдання 1 
let arrayFill = new Array(5); 
arrayFill.fill("заповнення"); 
console.log("Завдання fill 1:", arrayFill); 
 
// Завдання 2 
function fillArray(arr, value, start, end) { 
    arr.fill(value, start, end); 
    return arr; 
} 
console.log("Завдання fill 2:", fillArray([1, 2, 3, 4, 5], "заповнено", 1, 4)); 
 
// Сортування та заміна 
function sortAndReplace(arr) { 
    arr.sort((a, b) => b - a); 
    arr.fill(10, 0, 3); 
    return arr; 
} 
console.log("Функція сортування та заміна:", sortAndReplace([5, 1, 7, 3, 9])); 
 
// Додаткове завдання 1 
function uniqueSortRemoveMax(arr) { 
    let uniqueArr = Array.from(new Set(arr)); 
    uniqueArr.sort((a, b) => b - a); 
    uniqueArr.shift(); // видаляє найбільший елемент 
    return uniqueArr; 
} 
console.log("Функція унікалізації, сортування та видалення:", uniqueSortRemoveMax([5, 3, 7, 3, 9, 9, 1])); 
 
// Додаткове завдання 2 
function mergeAndTrim(arr1, arr2) { 
    let mergedArray = arr1.concat(arr2); 
    mergedArray.sort((a, b) => a - b); 
    mergedArray.splice(-4); // видаляє останні 4 елементи 
    return mergedArray; 
} 
console.log("Функція об'єднання, сортування та видалення:", mergeAndTrim([7, 3, 9], [5, 1, 2, 6, 8]));