const buttonNumber = document.querySelectorAll('.btnNumber');
const btnOperator = document.querySelectorAll('.btnOperator');
const result = document.querySelector('.result');
const operators = document.querySelectorAll('.operator');
const equalResult = document.querySelector('.equalResult');
const clearBtn = document.querySelector('.clearBtn');
let number;
let op;
let resultValue = 0;

buttonNumber.forEach(button => {
    button.addEventListener('click', function () {
        number = this.textContent;
        if (result.textContent === '0') {
            result.textContent = number;
        } else {
            result.textContent += number;
        }
        console.log(result.textContent);
        resultValue = parseFloat(result.textContent);
    });
});

btnOperator.forEach(button => {
    button.addEventListener('click', function () {
        if (result.textContent !== '0') {
            op = this.textContent;
            result.textContent += ` ${op} `;
        }
    });
});
equalResult.addEventListener('click', function () {
    const parts = result.textContent.split(' ');
    if (parts.length === 3) {
        const num1 = parseFloat(parts[0]);
        const operator = parts[1];
        const num2 = parseFloat(parts[2]);

        switch (operator) {
            case '+':
                resultValue = num1 + num2;
                break;
            case '-':
                resultValue = num1 - num2;
                break;
            case '*':
                resultValue = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result.textContent = 'Error';
                    return;
                }
                resultValue = num1 / num2;
                break;
        }
        result.textContent = resultValue.toString();
    }
});
clearBtn.addEventListener('click', function () {
    result.textContent = '0';
    resultValue = 0;
});