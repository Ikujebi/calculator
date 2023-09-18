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
            // Check if the input contains the percentage symbol "%"
            if (cleanedInput.includes("%")) {
                // Split the input by the percentage symbol "%"
                const parts = cleanedInput.split("%");
    
                // If there are two parts (number and "%"), calculate the percentage
                if (parts.length === 2) {
                    const number = parseFloat(parts[0]);
                    if (!isNaN(number)) {
                        const percentageValue = number / 100;
                        console.log(percentageValue);
                        const updatedInput = percentageValue  + parts[1];
                    inp.innerHTML = eval(updatedInput);
                        return;
                    }
                }
            } else if (cleanedInput.includes("x")) {
                // Split the input by the "x" symbol
                const parts = cleanedInput.split("x");
    
                // If there are two parts (number and "x"), check if one is a percentage
                if (parts.length === 2) {
                    const num1 = parseFloat(parts[0]);
                    const num2 = parseFloat(parts[1]);
    
                    // Check if either num1 or num2 is a percentage
                    if (!isNaN(num1) && !isNaN(num2)) {
                        if (parts[0].includes("%")) {
                            const result = (num1 / 100) * num2;
                            inp.innerHTML = result;
                        } else if (parts[1].includes("%")) {
                            const result = num1 * (num2 / 100);
                            inp.innerHTML = result;
                        } else {
                            const result = num1 * num2;
                            inp.innerHTML = result;
                        }
                        return;
                    }
                }
            }
    
            // If it's neither a percentage nor multiplication calculation, evaluate the expression as before
            const result = eval(cleanedInput);
    
            // Check if the result is a number (not NaN)
            if (!isNaN(result)) {
                inp.innerHTML = result;
            } else {
                inp.innerHTML = "Error";
            }
        } catch (error) {
            inp.innerHTML = "Error";
        }
    });
    
    
          
     
     
