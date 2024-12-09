let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

startButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startButton.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
        startButton.textContent = "Pause";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimerDisplay();
    startButton.textContent = "Start";
    isRunning = false;
});

updateTimerDisplay();
