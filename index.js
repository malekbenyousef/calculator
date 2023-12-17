let currentNum = '';
let previousNum = '';
let result = '';
let operator = '';

let currentDisplay = document.querySelector(".currentNumber");
let previousDisplay = document.querySelector(".previousNumber");
let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (previousNum !== '' && currentNum !== "") {
        calcul();
        Dispayresult();
    }
});
let numcurrentNumbers = document.querySelectorAll(".numbers");
let signs = document.querySelectorAll(".signs");
let clear = document.querySelector(".C");
clear.addEventListener("click", () => {
    currentNum = '';
    previousNum = '';
    result = '';
    operator = '';
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
});
let deleteButton = document.querySelector(".Delete");
deleteButton.addEventListener("click", deleteLastDigit);

function deleteLastDigit() {
    currentNum = currentNum.slice(0, -1);
    currentDisplay.textContent = currentNum;
}

let decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", addDecimal);

function addDecimal() {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        currentDisplay.textContent = currentNum;
    }
}

numcurrentNumbers.forEach(currentNumBtn => {
    currentNumBtn.addEventListener("click", (e) => {
        handleNumcurrentNumber(e.target.textContent);
    });
});

function handleNumcurrentNumber(numcurrentNumber) {
    if (currentNum.length <= 9) {
        currentNum += numcurrentNumber;
        currentDisplay.textContent = currentNum;
        
    }
}

signs.forEach(sign => {
    sign.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        
    });
});

function handleOperator(op) {
    if (previousNum !== '' && currentNum !== "") {
        calcul();
    }
    if (result!== "") {
        previousNum = result;
        result = "";
    } else {
        previousNum = currentNum;
    }
    operator = op;

    previousDisplay.textContent = previousNum + " " + operator;
    currentNum = '';
    currentDisplay.textContent = '';
    result=previousNum+currentNum;
}

function calcul() {
    previousNum = Number(result !== '' ? result : previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        result = previousNum + currentNum;
    } else if (operator === "-") {
        result = previousNum - currentNum;
    } else if (operator === "*") {
        result = previousNum * currentNum;
    } else if (operator === "/") {
        if (currentNum === 0) {
            result = "Error: Cannot divide by zero";
            
            return;
        }
        result = previousNum / currentNum;
    }
    result
    result = roundNumber( result.toString());

    currentNum = '';
    operator = '';
}
function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
  }
function Dispayresult() {
    previousDisplay.textContent = "";
    currentDisplay.textContent = result;
}
