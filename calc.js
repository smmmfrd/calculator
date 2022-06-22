const currentInput = document.querySelector('#current-input');
const inputHistory = document.querySelector('#input-history');

var storedInput = '';
var currentOperand = '';

function InputPressed(input){
    if(input.match(/\d/)){
        NumberPressed(input);
    } else {
        if(input == 'C'){
            ClearPressed();
        } else if(input == '='){
            EqualsPressed();
        } else {
            OperandPressed(input);
        }
    }

}

function NumberPressed(number){
    let current = currentInput.textContent;

    if(current == '0'){
        current = number;
    } else if(current.length == 8){
        current = current.slice(1) + number;
    } else {
        current += number;
    }

    currentInput.textContent = current;
}

function OperandPressed(operand){
    let current = currentInput.textContent;
    if(current == '0') return;

    if(storedInput == '') {
        storedInput = current;
        currentInput.textContent = '0';
    }

    currentOperand = operand;

    inputHistory.textContent = `${storedInput} ${currentOperand}`;
}

function ClearPressed(){
    storedInput = currentOperand = '';

    currentInput.textContent = '0';
    inputHistory.textContent = '\xa0';
}

function EqualsPressed(){
    let current = currentInput.textContent;
    let a = Number(storedInput);
    let b = Number(current);

    if(currentOperand === '+') {
        currentInput.textContent = add(a,b);
    } else if(currentOperand === '-') {
        currentInput.textContent = subtract(a,b);
    } else if(currentOperand === '*') {
        currentInput.textContent = multiply(a,b);
    } else if(currentOperand === '/') {
        currentInput.textContent = divide(a,b);
    }

    storedInput = currentOperand = '';

    inputHistory.textContent = '\xa0';
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}