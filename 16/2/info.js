const image = document.getElementById('image');

        image.onmouseover = () => {
            image.style.transform = 'scale(1.2)';
            image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        };

        image.onmouseout = () => {
            image.style.transform = 'scale(1)';
            image.style.boxShadow = 'none';
        };