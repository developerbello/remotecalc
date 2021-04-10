const container = document.querySelector('.calc-container');
const keys = container.querySelector('.calc-keys');
const display = document.querySelector('.screen-display');
const previousKeyType = container.dataset.previousKeyType;

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // Do Something

    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum =  display.textContent;

    if(!action) {
      
      if(displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if(
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed');

      // add custom attribute
      container.dataset.previousKeyType ='operator';
      

      container.dataset.firstValue = displayedNum;
      container.dataset.operator = action;
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if (action === 'clear') {
      console.log('clear key!');
    }

    const calculate = (n1, operator, n2) => {
      let result = '';

      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'division') {
        result = parseFloat(n1) / parseFloat(n2)
      }
      
      return result;
    }

    if (action === 'calculate') {
      const firstValue = container.dataset.firstValue;
      const operator = container.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    
  }
})






































// const calculator = document.querySelector('.calc-container');
// const keys = calculator.querySelector('.calc-keys');
// const display = document.querySelector('.screen-display');

// keys.addEventListener('click', e => {

//   if(e.target.matches('button')) {
//     // Do something

//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayNum = display.textContent;
//     // const previousKeyType = key.dataset.previous-key-type;

//     if(!action || previousKeyType === 'operator') {
//       if(displayNum === '0') {
//         display.textContent = keyContent;
//       } else {
//         display.textContent = displayNum + keyContent;
//       }
//     }

//     if(action === 'decimal') {
//       display.textContent = displayNum + '.';
//     }

//     if(
//       action === 'add' ||
//       action === 'subtract' ||
//       action === 'multiply' ||
//       action === 'divide'
//     ) {
//       key.classList.add('is-depressed')

//       calculator.dataset.previousKeyType = 'operator';
//     }

//     Array.from(key.parentNode.children)
//       .forEach(k => k.classList.remove('is-depressed'))
//   }
// })
