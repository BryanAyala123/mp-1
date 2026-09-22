
function addition() {
    let firstNumber = Number(document.getElementById('first-number').value);
    let secondNumber = Number(document.getElementById('second-number').value);
    result = firstNumber + secondNumber;
    document.getElementById('output').innerHTML = String(result);
    isNegative(result);
}

function subtraction() {
    let firstNumber = Number(document.getElementById('first-number').value);
    let secondNumber = Number(document.getElementById('second-number').value);
    result = firstNumber - secondNumber;
    document.getElementById('output').innerHTML = String(result);
    isNegative(result);
}

function multiplication() {
    let firstNumber = Number(document.getElementById('first-number').value);
    let secondNumber = Number(document.getElementById('second-number').value);
    result = firstNumber * secondNumber;
    document.getElementById('output').innerHTML = String(result);
    isNegative(result);
}

function division() {
    let firstNumber = Number(document.getElementById('first-number').value);
    let secondNumber = Number(document.getElementById('second-number').value);  
    result = firstNumber / secondNumber;
    document.getElementById('output').innerHTML = String(result);
    isNegative(result);
}

function power() {
    let firstNumber = Number(document.getElementById('first-number').value);
    let secondNumber = Number(document.getElementById('second-number').value);
    result = 1;
    for (let i = 0; i < secondNumber; i++){
        result = result * firstNumber
    }
    document.getElementById('output').innerHTML = String(result);
    isNegative(result);
}

function clearOutput() {
    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
    document.getElementById('output').innerHTML = '';
}

function isNegative(num){
    if (num < 0) {
        document.getElementById('output').style.color = 'red';
    }
    else {
        document.getElementById('output').style.color = '#F0F0DB';
    }
}