// let counterVal = document.querySelector('#counter');
let counterVal = document.getElementById('counter');

function increment() {
    let val = parseInt(counterVal.innerText);
    val = val + 1;
    counterVal.innerText = val;
    console.log("value incremented by 1")
}


function decrement() {
    let val = parseInt(counterVal.innerText);
    val = val - 1;
    counterVal.innerText = val;
    console.log("value decremented by 1")
}