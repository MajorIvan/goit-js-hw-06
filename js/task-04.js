const plus = document.querySelector('button[data-action="increment"]'); 
const minus = document.querySelector('button[data-action="decrement"]'); 

let counterValue = 0; 

function counterPlus() { 
    counterValue += 1; 
    value.innerText = counterValue; 
}

function counterMinus() { 
    counterValue -= 1; 
    value.innerText = counterValue; 
}

plus.addEventListener('click', counterPlus); 
minus.addEventListener('click', counterMinus);