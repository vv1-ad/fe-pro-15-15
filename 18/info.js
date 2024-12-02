function changeBackgroundColor() {
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--color1').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--color2').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--color3').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--color4').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--color5').trim(),
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

//Знаходження всіх великих літер у тексті
let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let uppercaseLetters = textStr.match(/[A-Z]/g);
console.log(uppercaseLetters);

//Вибір числових значень з рядка
let operation = "5 плюс 7 = 3";

let numbers = operation.match(/\d+/g).map(Number);
console.log(numbers);

//Знаходження слів із певною кількістю символів (5 літер)
let textStr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let fiveLetterWords = textStr.match(/\b\w{5}\b/g);
console.log(fiveLetterWords);


