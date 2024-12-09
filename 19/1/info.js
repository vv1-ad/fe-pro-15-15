function saveToSession() {
    const input = document.getElementById('textInput').value;
    sessionStorage.setItem('userInput', input);
    alert('Input saved to sessionStorage!');
}

function displayFromSession() {
    const savedInput = sessionStorage.getItem('userInput');
    document.getElementById('displayArea').textContent = savedInput ? savedInput : 'No data saved.';
}

// LocalStorage (Settings)
function saveSettings() {
    const bgColor = document.getElementById('backgroundColor').value;
    localStorage.setItem('backgroundColor', bgColor);
    applySettings();
}

function applySettings() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('backgroundColor').value = savedColor;
    }
}

// To-Do List
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskInput);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('taskInput').value = '';
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Apply settings and load tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    applySettings();
    loadTasks();
});