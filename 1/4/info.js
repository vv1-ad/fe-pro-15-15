let price = prompt("Введіть ціну товару:");

let quantity = prompt("Введіть кількість товару:");

price = parseFloat(price);
quantity = parseInt(quantity);

let totalCost = price * quantity;

console.log("Загальна вартість товару: " + totalCost);
