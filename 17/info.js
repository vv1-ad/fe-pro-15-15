function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function updateHobbies() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedHobbies = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    document.getElementById('selected-hobbies').textContent = selectedHobbies.length ? selectedHobbies.join(', ') : 'немає';
}

function showCountryInfo(country) {
    const countryInfo = {
        'Україна': 'Столиця: Київ, Населення: ~41 млн',
        'США': 'Столиця: Вашингтон, Населення: ~331 млн',
        'Японія': 'Столиця: Токіо, Населення: ~126 млн'
    };
    document.getElementById('country-info').textContent = country ? countryInfo[country] : '';
}

function showRatingMessage(rating) {
    document.getElementById('rating-message').textContent = `Дякуємо за вашу оцінку ${rating}!`;
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (!task) return;
    
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `${task} <button onclick="removeTask(this)">Видалити</button>`;
    taskList.appendChild(li);
    
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
