const text = document.getElementById('text');
        const button = document.getElementById('colorBtn');

        function getRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }

        button.onclick = () => {
            text.style.color = getRandomColor();
        };