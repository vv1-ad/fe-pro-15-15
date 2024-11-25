const box = document.getElementById('resizeBox');

        box.ondblclick = () => {
            box.style.width = box.offsetWidth * 2 + 'px';
            box.style.height = box.offsetHeight * 2 + 'px';
        };