let currentNum = '';
let previousNum = '';
let operator = '';

let currentDisplay = document.querySelector(".currentNumber"); 
let previousDisplay = document.querySelector(".previousNumber"); 
let equal = document.querySelector(".equal");
equal.addEventListener("click", calcul);
let numcurrentNumbers = document.querySelectorAll(".numbers"); 
let signs = document.querySelectorAll(".signs");
let clear = document.querySelector(".C"); 
clear.addEventListener("click", () => {
    currentNum = '';
    currentDisplay.textContent = currentNum;
})
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
    if (operator.length <= 1) {
        operator = op;
        previousNum = currentNum;
        previousDisplay.textContent = previousNum + " " + operator;
        currentNum = '';
        currentDisplay.textContent = '';
    }
}

function calcul() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "*") {
        previousNum *= currentNum;
    } else if (operator === "/") {
        if (currentNum === 0) { 
            previousNum = "Error: Cannot divide by zero";
            previousDisplay.textContent = "";
            currentDisplay.textContent = previousNum;
            currentNum = '';
            operator = '';
            return;
        }
        previousNum /= currentNum;
    }
    previousNum = previousNum.toString();
    Dispayresult();
    
    currentNum = '';
    operator = '';
}

function Dispayresult() {
    previousDisplay.textContent = "";
    currentDisplay.textContent = previousNum;
}
