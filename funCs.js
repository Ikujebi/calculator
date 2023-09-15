const inp = document.querySelector("#screen")
const cancelAll = ()=>{
    
    console.log(inp);
    inp.innerHTML = ``
}
const cancelOne = ()=>{
    inp.innerHTML = inp.innerHTML.slice(0,-1)
}

const multiplication = (...variables)=>{
    let output = 1;
    for(let variable of variables){
        
        output *= variable
        console.log(output);
    }
   return output
   }

export {cancelAll, cancelOne, multiplication}

