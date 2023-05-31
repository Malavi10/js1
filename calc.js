// const display = document.querySelector('.display')
// var buttons = document.querySelector('.btn')
// let operand1 = '';
// let operand2= '';
// let operator = null;

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.value;
//         if (value === 'C') {
//             clear()            
//         }
//         else if (value === '=') {
//             calculator();            
//         } else if (isOperator(value)) {
//             setOperator(value);            
//         } else {
//             appendNumber(value)            
//         }        
        
//     })    
// });

// function appendNumber(number){
//     if (operator === null) {
//         operand1 += number;
//         display.value = operand1;        
//     } else {
//         operand2 += number;
//         display.value = operand2;
//     }
// }

// function setOperator(opr){
//     if (operator === null) {
//         operator = opr;        
//     } else {
//         calculate();
//         operator=opr;
//     }
// }

// function isOperator(value){
//     return ['+','-','*','/'].includes(value)    
// }

// function calculate(){
//     const num1 = parseFloat(operand1);
//     const num2 = parseFloat(operand2);

//     if (operator === '+') {
//         display.value = num1 + num2        
//     } else if (operator === '-') {
//         display.value = num1 - num2        
//     } else if (operator === '*') {
//         display.value = num1 * num2        
//     } else if (operator === '-') {
//         display.value = num1 / num2        
//     }
// }






// const display = document.querySelector('.display');
// const keys = document.querySelectorAll('.keys button');

// keys.forEach(key => {
//   key.addEventListener('click', event => {
//     const keyValue = event.target.value;
//     const displayValue = display.value;

//     if (keyValue === 'clear') {
//       display.value = '';
//     } else if (keyValue === '=') {
//       const result = eval(displayValue);
//       display.value = result;
//     } else {
//       display.value = displayValue + keyValue;
//     }
//   });
// });