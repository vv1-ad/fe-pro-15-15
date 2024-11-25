const player = document.getElementById('player');
        const step = 10;
        let x = 180, y = 180;

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') y -= step;
            if (event.key === 'ArrowDown') y += step;
            if (event.key === 'ArrowLeft') x -= step;
            if (event.key === 'ArrowRight') x += step;

            // Keep player within bounds
            x = Math.max(0, Math.min(360, x));
            y = Math.max(0, Math.min(360, y));

            player.style.top = y + 'px';
            player.style.left = x + 'px';
        });