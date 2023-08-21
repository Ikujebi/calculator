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
calculate.addEventListener("click", ()=>{
    let indexOfPercent = inp.innerHTML.indexOf("%")
    let indexOfX = inp.innerHTML.indexOf("x")
    let posAfterPercent = (inp.innerHTML.indexOf("x")+1)
    
    let numBeforeMultiplication = (inp.innerHTML.slice(0,inp.innerHTML.indexOf("x")))
    let numAfterMultiplication = inp.innerHTML.slice(posAfterPercent,inp.innerHTML.length)
    if(inp.innerHTML.includes('x')){
       
        
         if(inp.innerHTML.includes('%')){
            if(indexOfX <indexOfPercent){
           let evaluatedPercentNum = eval( (inp.innerHTML.slice(posAfterPercent,((inp.innerHTML.length) -1)) ) / 100 )
             inp.innerHTML =  multiplication(numBeforeMultiplication,evaluatedPercentNum);
            }else if (indexOfX >indexOfPercent) {
                let secondEvaluatedPNum = eval((inp.innerHTML.slice(0,inp.innerHTML.indexOf("%"))) / 100)
                let posAfterPercent2 = inp.innerHTML.slice((inp.innerHTML.indexOf("x") + 1),inp.innerHTML.length)
                console.log(posAfterPercent2);
                inp.innerHTML = multiplication(secondEvaluatedPNum,posAfterPercent2)
            }
         } else{
                
                inp.innerHTML = multiplication(inp.innerHTML.replace(/x/g,","))
                console.log(inp);
                console.log(inp.innerHTML.replace(/x/g,","));
            console.log(multiplication(inp.innerHTML.replaceAll("x",",")));
            /* inp.innerHTML =  multiplication(numBeforeMultiplication,
            numAfterMultiplication); */
         } 
        
     }else{
        if(inp.innerHTML.includes('%')){
            let indexOfPercent = inp.innerHTML.indexOf("%")
            
            console.log((inp.innerHTML.slice(0,indexOfPercent)));
            console.log((inp.innerHTML.slice((indexOfPercent + 2),inp.innerHTML.lastIndexOf("x"))));
              inp.innerHTML = eval((inp.innerHTML.slice(0,indexOfPercent)) +
              (inp.innerHTML.slice((indexOfPercent + 1),inp.innerHTML.lastIndexOf("x")))) + "%"
        }else{
            inp.innerHTML =   eval(inp.innerHTML) 
        }
        };
          
     
     
}) 