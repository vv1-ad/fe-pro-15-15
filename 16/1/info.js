const hoverArea = document.getElementById('hoverArea');

        hoverArea.onmouseover = () => {
            hoverArea.style.backgroundColor = 'lightblue';
        };

        hoverArea.onmouseout = () => {
            hoverArea.style.backgroundColor = 'lightgray';
        };