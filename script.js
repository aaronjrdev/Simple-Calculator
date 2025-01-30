// Get elements for numbers, operators, and input
let numbers = document.querySelectorAll(".num");
let input = document.getElementById("result");
let allOperator = document.querySelectorAll(".operator");

// Store numbers and operator
let firstNumber = null;
let secondNumber = null;
let currentInput = '';
let operator = null;

// Handle number input (Button click)
numbers.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.value;
        input.value = currentInput;
    });
});

// Handle number input using keyboard
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key)) {  // If the key pressed is a number (0-9)
        currentInput += key;
        input.value = currentInput;
    }

    // Handle operator input using keyboard
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
        } else {
            secondNumber = parseFloat(currentInput);
        }
        operator = key;
        currentInput = ''; // Reset current input for second number
        input.value = '';
    }

   
    if (key === 'Enter') {
        calculateResult();
    }

  
    if (key === 'Escape') {
        clearCalculator();
    }
});

// Handle operator input (Button click)
allOperator.forEach(op => { 
    op.addEventListener("click", () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
        } else {
            secondNumber = parseFloat(currentInput);
        }

        operator = op.value;
        currentInput = ''; 
        input.value = '';
    });
});

// Clear input and reset state
let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearCalculator();
});

// Function to clear the calculator
function clearCalculator() {
    input.value = '';
    currentInput = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

// Calculate result
let equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    calculateResult();
});

// Function to perform the calculation
function calculateResult() {
    if (firstNumber !== null && operator !== null && currentInput !== '') {
        secondNumber = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '/':
                result = divideNumber(firstNumber, secondNumber);
                break;
            case '*':
                result = multiplyNumber(firstNumber, secondNumber);
                break;
            case '-':
                result = minusNumber(firstNumber, secondNumber);
                break;
            case '+':
                result = addNumber(firstNumber, secondNumber);
                break;
            default:
                result = 'ERROR';
        }

        input.value = result;
        firstNumber = result; 
        secondNumber = null;                          
        operator = null; 
        currentInput = ''; 
    }
}

// Basic calculation functions
function divideNumber(num1, num2) {
    if (num2 === 0) {
        return 'ERROR'; // Handle division by zero
    }
    return num1 / num2;
}

function multiplyNumber(num1, num2) {
    return num1 * num2;
}

function minusNumber(num1, num2) {
    return num1 - num2;
}

function addNumber(num1, num2) {
    return num1 + num2;
}

