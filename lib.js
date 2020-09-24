
const calculator = {
    calculator : (first,operator,second)=>{
        
        let result

       switch(operator){
           case '+':
           result = first + second
           break

           case '-':
           result = first - second
           break

           case '*':
           result = first * second
           break

           case '/':
           result = first / second
           break

       }
       return result
    },
   
}

export default calculator