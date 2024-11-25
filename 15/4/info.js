const container = document.getElementById('container');
        for (let i = 1; i <= 10; i++) {
            const div = document.createElement('div');
            div.className = 'element';
            div.textContent = `Element ${i}`;
            container.appendChild(div);
        }

        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('element')) {
                event.target.remove();
            }
        });