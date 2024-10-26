let userAge = prompt("Введіть ваш вік:");

userAge = parseInt(userAge);

if (userAge < 18) {
    alert("Вам заборонено використовувати цей ресурс, оскільки вам менше 18 років.");
} else {
    alert("Ви можете використовувати цей ресурс.");
}