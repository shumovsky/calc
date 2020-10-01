"use strict"

let numbers = document.querySelectorAll(".number");

let operations = document.querySelectorAll(".operator");

let clearBtns = document.querySelectorAll(".clear-btn");

let decimalBtn = document.getElementById("decimal");

let resultBtn = document.getElementById("result");

let display = document.getElementById("display");

let MemoryCurrentNumber = 0;

let MemoryNewNumber = false;

let MemoryPendingOperation = "";

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function (e) {
        numberPress(e.srcElement.innerText);
    });
}

for (let i = 0; i < operations.length; i++) {
    let operatorBtn = operations[i];
    operatorBtn.addEventListener("click", function (e) {
        operation(e.srcElement.innerText);
    });
}

for (let i = 0; i < decimalBtn.length; i++) {
    let decimal = decimalBtn[i];
    decimal.addEventListener("click", operation);
}

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener("click", function (e) {
        clear(e.srcElement.id);
    });
}

decimalBtn.addEventListener("click", decimal);

resultBtn.addEventListener("click", result);

function numberPress(number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function operation(op) {
    let localOperationMemory = display.value;


    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
        display.value = MemoryCurrentNumber;
    }
    else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        }
        else if (MemoryPendingOperation === 'x2') {
            MemoryCurrentNumber = Math.pow(localOperationMemory, 2);
        }
        else if (MemoryPendingOperation === '√') {
            MemoryCurrentNumber = Math.sqrt(localOperationMemory);
        }
        else if (MemoryPendingOperation === '+/-') {
            MemoryCurrentNumber =
                parseFloat(MemoryCurrentNumber) * -1;
        }
        else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        if (MemoryPendingOperation === 'x2') {
            MemoryCurrentNumber = Math.pow(localOperationMemory, 2)
        }
        else if (MemoryPendingOperation === '√') {
            MemoryCurrentNumber = Math.sqrt(localOperationMemory);
        }
        else if (MemoryPendingOperation === '+/-') {
            MemoryCurrentNumber =
                parseFloat(MemoryCurrentNumber) * -1;
        }


        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };

};

// function Neg(op)
// if (MemoryNewNumber && MemoryPendingOperation !== '=') {
//     display.value = MemoryCurrentNumber;
// }
// else {
//     MemoryNewNumber = true;
//     if (MemoryPendingOperation === '+') {
//         MemoryCurrentNumber += parseFloat(localOperationMemory);
//     }
// }

function decimal(argument) {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        };
    };

    display.value = localDecimalMemory;
};

function Neg(get) {
    let localBtn = display.value
    if (MemoryNewNumber = true && MemoryPendingOperation === '+/-')
        display.value = localBtn;
    localBtn = parseFloat(localBtn) * -1;
    display.value = localBtn;
    MemoryPendingOperation = get;
}


function clear(id) {
    if (id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
}

