const container = document.querySelector('.blockContainer');

        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('button')) {
                alert(`You clicked on: ${event.target.className}`);
            }
        });