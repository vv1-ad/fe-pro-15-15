const amountField = document.getElementById('amount');
        const rateField = document.getElementById('rate');
        const resultField = document.getElementById('result');
        const convertBtn = document.getElementById('convertBtn');

        convertBtn.onclick = () => {
            const amount = parseFloat(amountField.value);
            const rate = parseFloat(rateField.value);

            if (!isNaN(amount) && !isNaN(rate)) {
                const converted = amount * rate;
                resultField.textContent = `Converted Amount: ${converted.toFixed(2)}`;
            } else {
                alert('Please enter valid numbers.');
            }
        };