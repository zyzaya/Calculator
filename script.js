// visuals

let first_operand = null;
let second_operand = null;
let operator = null;

let output = document.getElementById('output');
output.textContent = "0";

function addDecimal(id) {
    if ((first_operand === null && !output.innerText.includes('.')
        || (operator !== null && !output.innerText.split(operator)[1].includes('.')))) {
        setDisplay(id);
    }
}

function setDisplay(id) {
    if (output.innerText === '0' && id !== '.')
        output.innerText = "";
    output.innerText = output.innerText + id;
}

function deleteLastInput() {
    output.innerText = output.innerText.slice(0, -1)
    if (output.innerText.length === 0)
        output.innerText = '0';
}

function setOperator(id) {
    operator = id;
    if (first_operand === null) { 
        first_operand = parseFloat(output.textContent);
        output.innerText = first_operand + operator
    }
}

function clearEntry() {
    output.textContent = '0';
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
        console.log(output.textContent.split(operator)[1])
        second_operand = parseFloat(output.textContent.split(operator)[1]);
        console.log(second_operand)
        switch (operator) {
            case '/':
                result = first_operand / second_operand;
                break;
            case '*':
                result = first_operand * second_operand;
                break;
            case '-':
                result = first_operand - second_operand;
                break;
            case '+':
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

function onClick (id) {
    switch (id) {
        case 'CE':
            clearEntry();
            break;
        case 'C':
            clear();
            break;
        case 'Backspace':
            deleteLastInput();
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            setOperator(id);
            break;
        case 'Enter':
        case '=':
            calculate();
            break;
        case '.':
            addDecimal(id);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            setDisplay(id);
            break;
        default:
            
            break;
    }
}

let input = document.getElementById('input')
let buttons = input.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        onClick(button.id)
    });
});

document.addEventListener('keydown', (event) => {
    onClick(event.key);
})