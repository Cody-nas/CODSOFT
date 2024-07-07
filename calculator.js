document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            switch (value) {
                case 'C':
                    display.innerText = '';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    display.innerText += value;
            }
        });
    });
});
