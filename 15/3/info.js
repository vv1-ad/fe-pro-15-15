const button = document.getElementById('incrementBtn');
        const counter = document.getElementById('counter');
        let count = 0;

        function incrementCounter() {
            count++;
            counter.textContent = count;
            if (count > 10) {
                button.removeEventListener('click', incrementCounter);
            }
        }

        button.addEventListener('click', incrementCounter);