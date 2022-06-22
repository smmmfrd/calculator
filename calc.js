const currentInput = document.querySelector('#current-input');
const inputHistory = document.querySelector('#input-history');

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

function EqualsPressed(){
    console.log('need to solve!');
}

function OperandPressed(operand){
    console.log(`Pressed: ${operand}`);
    inputHistory.textContent = operand;
}

function ClearPressed(){
    currentInput.textContent = '0';
    inputHistory.textContent = '\xa0';
}