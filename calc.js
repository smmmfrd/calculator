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
        } else if(input =='D'){
            DeletePressed();
        }else {
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
    } else {
        EqualsPressed();

        storedInput = currentInput.textContent;
    }

    currentInput.textContent = '0';

    currentOperand = operand;

    inputHistory.textContent = `${storedInput} ${currentOperand}`;
}

function ClearPressed(){
    storedInput = currentOperand = '';

    currentInput.textContent = '0';
    inputHistory.textContent = '\xa0';
}

function DeletePressed(){
    console.log('delete');

    let current = currentInput.textContent;

    if(current == '0'){
        if(currentOperand != ''){
            currentOperand = '';
            inputHistory.textContent = `${storedInput}\xa0\xa0`;
        } else {
            if(storedInput != ''){ 
                current = storedInput;
            } else {
                current = '0';
            }
            storedInput = '';
            inputHistory.textContent = '\xa0';
        }
    } else {
        current = current.slice(0, current.length - 1);
        if(current.length == 0) current = '0';
    } 

    currentInput.textContent = current;
}

function EqualsPressed(){
    if(storedInput === '') return;

    let a = Number(storedInput);
    let b = Number(currentInput.textContent);

    let current = '';

    if(currentOperand === '+') {
        current = add(a,b);
    } else if(currentOperand === '-') {
        current = subtract(a,b);
    } else if(currentOperand === '*') {
        current = multiply(a,b);
    } else if(currentOperand === '/') {
        if(b === 0){
            ClearPressed();
            inputHistory.textContent = 'nice try bucko';
            return;
        } else {
            current = divide(a,b);
        }
    }
    
    current = current.toString();
    if(current.length > 8){
        current = current.slice(0, 8);
    }
    currentInput.textContent = current;

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