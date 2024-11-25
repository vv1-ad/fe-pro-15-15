const button = document.getElementById('toggleBtn');
        const menu = document.getElementById('menu');

        button.onclick = () => {
            if (menu.classList.contains('visible')) {
                menu.classList.remove('visible');
                button.textContent = 'Відкрити меню';
            } else {
                menu.classList.add('visible');
                button.textContent = 'Закрити меню';
            }
        };