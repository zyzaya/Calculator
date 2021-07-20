let first_operand = null;
let second_operand = null;
let operator = null;
let result = null;

let output = document.getElementById('output');
output.textContent = null;

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

function calculate() {
    if (operator && first_operand) {
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
            break;
        case 'C':
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


