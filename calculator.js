 const calculator={
    displayValue:'0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator:null
}

function updateDisplay(){
const display = document.querySelector('.calculator-screen');
display.value = calculator.displayValue;
}

 function inputDigit(digit) {
     //calculator.displayValue;
     const { displayValue, waitingForSecondOperand } = calculator;

if(waitingForSecondOperand === true){
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
}else{
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

console.log(calculator);


 }
 function inputDecimal(dot) {
     // If the `displayValue` property does not contain a decimal point
     if (!calculator.displayValue.includes(dot)) {
         // Append the decimal point
         calculator.displayValue += dot;
     }
 }

 function handleOperator(nextOperator){
    const {firstOperand, displayValue, operator} = calculator
     const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if(firstOperand === null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue;
    }else if(operator){
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
 }

 function calculate(firstOperand, secondOperand, operator) {
     if (operator === '+') {
         return firstOperand + secondOperand;
     } else if (operator === '-') {
         return firstOperand - secondOperand;
     } else if (operator === '*') {
         return firstOperand * secondOperand;
     } else if (operator === '/') {
         return firstOperand / secondOperand;
     }

     return secondOperand;
 }

//updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click',(event)=>{
    const {target} = event;
    //const target = event.target;
    //const target = event.target;

    if(!target.matches('button')){
        console.log('not a button');
        return;
    }
    if (target.classList.contains('operator')){
        handleOperator(target.value);
        updateDisplay();
        console.log('operator', target.value);
        return;
    }
    if (target.classList.contains('decimal')){
        inputDecimal(target.value);
        updateDisplay();
        console.log('decimal', target.value);
        return;
    }
    if (target.classList.contains('all-clear')){
        console.log('all clear', target.value);
        return;
    }


    inputDigit(target.value);
    updateDisplay();
    console.log('digit',target.value);


});











//
// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
// };
//
// function updateDisplay() {
//     // select the element with class of `calculator-screen`
//     const display = document.querySelector('.output');
//     // update the value of the element with the contents of `displayValue`
//     display.value = calculator.displayValue;
// }
//
// updateDisplay();
//
// const keys = document.querySelector('.calculator-keys');
// keys.addEventListener('click', (event) => {
//     // Access the clicked element
//     const { target } = event;
//
//     // Check if the clicked element is a button.
//     // If not, exit from the function
//     if (!target.matches('button')) {
//         return;
//     }
//
//     if (target.classList.contains('operator')) {
//         console.log('operator', target.value);
//         return;
//     }
//
//     if (target.classList.contains('decimal')) {
//         console.log('decimal', target.value);
//         return;
//     }
//
//     if (target.classList.contains('all-clear')) {
//         console.log('clear', target.value);
//         return;
//     }
//
//     console.log('digit', target.value);
// });
//
// //const { target } = event;
// // is equivalent to
// const target = event.target;































//
// class Calculator{
//     constructor(previousOperationElement,currentOperationElement) {
//         this.currentOperationElement = currentOperationElement
//         this.previousOperationElement = previousOperationElement
//         this.clear()
//     }
//
//     clear(){
//         this.currentOperation = '';
//         this.previousOperation = '';
//         this.operation = undefined
//     }
//
//     delete(){
//
//     }
//
//     appendNumber(number){
//     this.currentOperation = number;
//     }
//
//     chooseOperation(operation){
//
//     }
//     compute(){
//
//     }
//     updateDisplay(){
//
//     this.currentOperationElement.innerText = this.currentOperation;
// console.log(this.currentOperationElement.innerText);
//     }
// }
//
//
// const numberBtns = document.querySelectorAll(['.number']);
// const operatorBtn = document.getElementsByClassName('operator');
// const equalBtn = document.getElementsByClassName('equal');
// const deletBtn = document.getElementsByClassName('delete');
// const allclearBtn = document.getElementsByClassName('all-clear');
// const prevOperation = document.getElementsByClassName('previous-operation');
// const currtOperation = document.getElementsByClassName('current-operation');
//
//
// const calculator = new Calculator(prevOperation, currtOperation);
// numberBtns.forEach( button=>{
//     button.addEventListener('click', ()=>{
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
//     }
//
// )


// let calculate = {
//
//     addNumber(firstNumber, secondNumber){
//         let answer = firstNumber+secondNumber;
//         return answer;
//     },
//     subtractNumber(firstNumber, secondNumber){
//         let answer = firstNumber-secondNumber;
//         return answer;
//     },
//     divideNumber(firstNumber, secondNumber){
//         let answer = firstNumber/secondNumber;
//         return answer;
//     },
//     multiplyNumber(firstNumber, secondNumber){
//         let answer = firstNumber*secondNumber;
//         return answer;
//     }
// }
//
// function calculator(number1, operator, number2){
//     let answer;
//     if(operator === '+'){
//         answer = calculate.addNumber(number1,number2);
//     }
//     else if(operator === '-'){
//         answer = calculate.subtractNumber(number1,number2);
//     }else if(operator === '*'){
//         answer = calculate.multiplyNumber(number1,number2);
//     }else if(operator === '/'){
//         answer = calculate.divideNumber(number1,number2);
//     }else{
//         answer = 0;
//     }
//     return answer;
//
// }

// function operatorClick(){
//     operator = document.querySelector('.operator');
//     operator.addEventListener('click',alert('testing function'));
//}

// document.querySelector('.numbera').innerHTML = numbera;
//
// document.querySelector('.numberb').innerHTML = numberb;


// console.log(calculate.addNumber(2,3));

// console.log(calculator(numbera,operator,numberb));
//
// let name = 'mary';
// // ASSIGNMENT OPERATORS
//
// name === 'amaka';
// if(name !== 'amaka'){
//     alert('who is there');
// }else{
//     alert('abeg amaka is that you');
// }
// let number = 5;
//
// if(number < 5){
//     alert('lesser than 5')
// }else{
//     alert('greather than 5');
// }

// ASSIGNMENT OPERATORS


// = ASSIGN TO;
// === EQUAL TO;
// !== NOT EQUAL TO;
// < LESSER THAN;
// > GREATER THAN;
//     += ADD TO THE VARIABLE;
//     -= SUBTRACT FROM THE VARIABLE;

// let name = 'student';// is an initializer coming from the programme
// name = 'gabriella';// this is coming from the user
// //console.log(name);
//
// let number = 5;
// //number = number + 5; // log way of adding to the value of a vaiable
//
// number += 5; // shorter way of adding to the value of a variable
// console.log(number);


//EVENTS

//onclick
//onkeydown
//onchange
//onload
//onmouseover
//onmouseout


// function testingEventsOnclick(){
//     alert('this is been clicked');
// }
//
// function testingEventOnkeyhold(){
//     alert('the key is been hold');
// }
//
// function testingEventOnload(){
//     alert('page is loading');
// }
//
// function testingEventOnmouseout(){
//     alert('mouse is out');
// }
//
// function testingEventMousehover(){
//     alert('mouse is hovered on me');
// }
// function testingEventOnkeydown(){
//     alert('mouse is hovered on me');
// }








// let humanBeing;
// let humanBeingAge;
// let currentAge;
// let deathAge;
//
//
// function lazyYouth(){
//     for(humanBeingAge = currentAge; humanBeingAge < deathAge; humanBeingAge++ ){
//
//     }
// }


// CONDITIONAL STATEMENTS IN JAVASCRIPT
//
// if(a == b){
//     // do something
// }else{
//     // do something
// }
//
//
// if(a == b){
//     // do something
// } else if(d==c){
//     // do something
// }else if(e == f){
//     // do something
// }else{
//     // do something
// }



// let answer = 0;
//
// answer = 1+1;
// console.log(answer);





























// switch(number1, operator, number2){
//     case operator === '+':
//         answer = calculate.addNumber(number1,number2);
//         break;
//     case operator === '-':
//         answer = calculate.subtractNumber(number1,number2);
//         break;
//     case operator === '*':
//         answer = calculate.multiplyNumber(number1,number2);
//         break;
//     case operator === '/':
//         answer = calculate.divideNumber(number1,number2);
//         break;
//     default:
//         answer = 0;
//
// }