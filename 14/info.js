// 2. Створення header елемента з заданими стилями
const header = document.createElement('header');
header.style.padding = '50px';
header.style.backgroundColor = 'yellow';
header.style.textAlign = 'center';
document.body.appendChild(header);

// 3. Створення меню в хедері
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    { name: 'Контакти', url: '/contact' },
];

menuData.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.url;
    header.appendChild(link);
    link.style.margin = '0 10px';
});

// 4. Додавання атрибута target="_blank" до всіх <a>
const links = header.querySelectorAll('a');
links.forEach(link => {
    link.setAttribute('target', '_blank');
});

// 5. Створення блоку з 50 div елементами
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
document.body.appendChild(container);

for (let i = 0; i < 50; i++) {
    const circle = document.createElement('div');
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.backgroundColor = 'blue';
    circle.style.borderRadius = '50%';
    circle.style.margin = '5px';
    container.appendChild(circle);
}

// 6. Додавання класу "circle-element" до всіх div
const circles = container.querySelectorAll('div');
circles.forEach(circle => {
    circle.classList.add('circle-element');
});

// 7. Створення блоку контейнера та розміщення елементів перед або після нього
const elementsArray = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true },
];

const mainContainer = document.createElement('div');
mainContainer.style.border = '1px solid black';
mainContainer.style.padding = '20px';
mainContainer.style.margin = '20px 0';
document.body.appendChild(mainContainer);

elementsArray.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item.text;
    if (item.usePrepend) {
        mainContainer.insertAdjacentElement('beforebegin', p);
    } else {
        mainContainer.insertAdjacentElement('afterend', p);
    }
});
