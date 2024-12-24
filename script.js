const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperation(operation) {
    display.value += ` ${operation} `;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}