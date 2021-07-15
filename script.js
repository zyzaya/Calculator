let first_operand = null;
let second_operand = null;
let operator = null;

let output = document.getElementById('output');
output.textContent = null;

function setDisplay(element) {
    console.log(element.textContent);
    output.innerText = output.textContent + element.textContent;
}

function deleteLastInput() {
    output.innerText = output.textContent.slice(0, -1);
}

function setOperator(element) {
    let display = output.innerText;
    if (output.textContent.slice(output.textContent.length - 1) === ".")
        deleteLastInput();
    if (first_operand === null && element.id !== 'equals') {
        first_operand = output.textContent;
        operand = element.id;
        output.innerText = null;
    } else {
        first_operand = parseFloat(first_operand);
        second_operand = parseFloat(output.textContent);
        let result = 0;
        switch (operand) {
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


