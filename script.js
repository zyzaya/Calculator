let first_operand = null;
let second_operand = null;
let operator = null;

let output = document.getElementById('output');
output.textContent = null;

function addDecimal(element) {
    if (!output.innerText.includes('.')) {
        setDisplay(element);
    }
}

function setDisplay(element) {
    output.innerText = output.innerText + element.textContent;
}

function deleteLastInput() {
    output.innerText = output.innerText.slice(0, -1)
    current_display = output.innerText;
}

function setOperator(element) {
    operator = element.id;
    if (first_operand === null) {
        first_operand = parseFloat(output.textContent);
        output.textContent = null;
    }
}

function clearEntry() {
    output.textContent = null;
}

function clear() {
    first_operand = null;
    second_operand = null;
    operator = null;
    clearEntry();
}

function calculate() {
    if (operator && first_operand) {
        let result = null;
        second_operand = parseFloat(output.textContent);
        switch (operator) {
            case 'divide':
                result = first_operand / second_operand;
                break;
            case 'multiply':
                result = first_operand * second_operand;
                break;
            case 'minus':
                result = first_operand - second_operand;
                break;
            case 'plus':
                result = first_operand + second_operand;    
                break;
            default:
                break;
        }
        first_operand = null;
        second_operand = null;
        output.innerText = result;
    }
}

function onClick () {
    switch (this.id) {
        case 'CE':
            clearEntry();
            break;
        case 'C':
            clear();
            break;
        case 'delete':
            deleteLastInput();
            break;
        case 'divide':
        case 'multiply':
        case 'minus':
        case 'plus':
            setOperator(this);
            break;
        case 'equals':
            calculate();
            break;
        case 'dot':
            addDecimal(this);
            break;
        default:
            setDisplay(this);
            break;
    }
}

let input = document.getElementById('input')
let buttons = input.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', onClick)
});


