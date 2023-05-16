document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.calculator__display');
  const keys = document.querySelector('.calculator__keys');
  let firstValue = 0;
  let operator = '';
  let awaitingNextValue = false;

  keys.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
      const key = event.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;

      if (!action) {
        if (displayedNum === '0' || awaitingNextValue) {
          display.textContent = keyContent;
          awaitingNextValue = false;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }

      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.';
        }
      }

      if (action === 'clear') {
        display.textContent = '0';
        firstValue = 0;
        operator = '';
        awaitingNextValue = false;
      }

      if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        operator = action;
        firstValue = displayedNum;
        awaitingNextValue = true;
      }

      if (action === 'calculate') {
        const secondValue = displayedNum;
        display.textContent = calculate(firstValue, operator, secondValue);
        awaitingNextValue = true;
      }

      if (action === 'squareRoot') {
        display.textContent = Math.sqrt(parseFloat(displayedNum));
      }

      if (action === 'square') {
        display.textContent = parseFloat(displayedNum) ** 2;
      }

      if (action === 'percentage') {
        display.textContent = (parseFloat(displayedNum) / 100) * parseFloat(firstValue);
      }
    }
  });

  function calculate(first, operator, second) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    if (operator === 'add') {
      return num1 + num2;
    }
    if (operator === 'subtract') {
      return num1 - num2;
    }
    if (operator === 'multiply') {
      return num1 * num2;
    }
    if (operator === 'divide') {
      return num1 / num2;
    }
  }
});
