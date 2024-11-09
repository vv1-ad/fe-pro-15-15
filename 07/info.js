let month = prompt("Введіть номер місяця (від 1 до 12):");

month = parseInt(month);

let season;

if (month === 12 || month === 1 || month === 2) {
    season = "Зима";
} else if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Літо";
} else if (month >= 9 && month <= 11) {
    season = "Осінь";
} else {
    season = "Неправильний номер місяця";
}

console.log("Сезон: " + season);