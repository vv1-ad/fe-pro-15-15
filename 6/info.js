let number1 = prompt("number1");
let number2 = prompt("number2:");
let number3 = prompt("number3:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);

let maxNumber = Math.max(number1, number2, number3);

console.log("Найбільше число: " + maxNumber);
