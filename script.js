const cancel = document.querySelector("#c")
const inp = document.querySelector("#screen")
const deleteOne = document.querySelector("#delete")
const calculate = document.querySelector("#calculate")
import {cancelAll, cancelOne, multiplication} from "./funCs.js"
const keys = document.querySelector(".buttons")


keys.addEventListener("click",(e)=>{
    const inp = document.querySelector("#screen")
    const key = e.target
    const action = key.dataset.action
  
    switch (action) {
        case 'add':

            inp.innerHTML += `+`
            break;
            case 'subtract':
            inp.innerHTML += `-`
            break;
            case 'multiply':
            inp.innerHTML += `x`
            break;
            case 'divide':
            inp.innerHTML += `/`
            break;
            case 'decimal':
            inp.innerHTML += `.`
            break;
            case 'percent':
            inp.innerHTML += `%`
            break;
    
        default:
            break;
    }
   
    
    
})

keys.addEventListener("click", (e)=>{
    if (inp.innerHTML ==="0") {
        inp.innerHTML = e.target.value
    }
    const key = e.target.value
    if (key === "7") {
        
            inp.innerHTML += `7`
        
        
    }if (key === "8") {
      
            inp.innerHTML += `8`
        
    }if (key === "9") {
        
            inp.innerHTML += `9`
        
    }if (key === "4") {
       
            inp.innerHTML += `4`
        
    }if (key === "5") {
        
            inp.innerHTML += `5`
        
    }if (key === "6") {
        
            inp.innerHTML += `6`
        
    }if (key === "1") {
        
            inp.innerHTML += `1`
        
    }if (key === "2") {
        
            inp.innerHTML += `2`
        
    }if (key === "3") {
        
            inp.innerHTML += `3`
        
    }if (key === "0") {
       
            inp.innerHTML += `0`
        
    }
})

deleteOne.addEventListener("click", cancelOne)

cancel.addEventListener("click",cancelAll)

const add = (a,b)=> a+b

    console.log(inp.innerHTML.indexOf("5"));
    

    calculate.addEventListener("click", () => {
        const input = inp.innerHTML;
    
        // Replace "x" with "*" for multiplication
        const cleanedInput = input.replace(/x/g, '*');
    
        try {
            // Use regular expressions to match and extract the parts of the expression
            const match = cleanedInput.match(/([\d.]+%?)([+\-*/]?)([\d.]+%?)/);
    
            if (match) {
                const num1 = parseFloat(match[1]);
                const operator = match[2];
                const num2 = parseFloat(match[3]);
    
                if (!isNaN(num1) && !isNaN(num2)) {
                    const percentage1 = match[1].includes("%") ? num1 / 100 : num1;
                    const percentage2 = match[3].includes("%") ? num2 / 100 : num2;
    
                    let result;
    
                    switch (operator) {
                        case '+':
                            result = percentage1 + percentage2;
                            break;
                        case '-':
                            result = percentage1 - percentage2;
                            break;
                        case '*':
                            result = percentage1 * percentage2;
                            break;
                        case '/':
                            result = percentage1 / percentage2;
                            break;
                        default:
                            result = "Error";
                            break;
                    }
    
                    inp.innerHTML = result;
                    return;
                }
            }
    
            // If it's not a percentage calculation, evaluate the expression as before
            const finalResult = eval(cleanedInput);
    
            // Check if the result is a number (not NaN)
            if (!isNaN(finalResult)) {
                inp.innerHTML = finalResult;
            } else {
                inp.innerHTML = "Error";
            }
        } catch (error) {
            inp.innerHTML = "Error";
        }
    });
    
    
          
     
     
