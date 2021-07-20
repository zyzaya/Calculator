let first_operand = null;
let second_operand = null;
let operator = null;
let result = null;

let output = document.getElementById('output');
output.textContent = null;

function setDisplay(element) {
    if (result !== null && parseFloat(output.innerText) === result) {
        result = null;
        output.innerText = null;
        output.innerText = element.textContent;
    } else {
        output.innerText = output.textContent + element.textContent;
    }
}

function deleteLastInput() {
    output.innerText = output.textContent.slice(0, -1);
}

function setOperator(element) {
    if (first_operand === null && element.id !== 'equals') {
        first_operand = output.textContent;
        operator = element.id;
        output.innerText = null;
    } else if (element.id === 'equals') {
        first_operand = parseFloat(first_operand);
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
        first_operand = result;
        second_operand = null;
        output.innerText = result;
        operator = element.id === 'equals' ? null : element.id;
    } else {
        operator = element.id;
    }
    console.log(element);
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
        case 'equals':
        case 'plus':
            setOperator(this);
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


