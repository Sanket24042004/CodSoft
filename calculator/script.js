let display = document.getElementById('calcInput');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;
        if (buttonValue === 'Del') {
            string = string.slice(0, -1);
            display.value = string || '0';
        } 
        else if (buttonValue === 'Clear') {
            string = '';
            display.value = '0';
        } 
        else if (buttonValue === '=') {
            try {
                string = eval(string).toString();
                display.value = string;
            } catch {
                display.value = "Error";
                string = "";
            }
        } 
        else {
            if (display.value === '0') {
                string = buttonValue;
            } else {
                string += buttonValue;
            }
            display.value = string;
        }
    });
});