import cal from './lib.js'

document.getElementById('result').addEventListener('click', () => {

   let firstNumber = document.getElementById('first_number').value
   let secondNumber = document.getElementById('second_number').value
   let operator = document.getElementById('operator').value
   
   let result = cal.calculator(Number(firstNumber),operator,Number(secondNumber))
   
   document.getElementById('display').value=result
    
})

