/*
Create a calculator that performs four basic operations.
The styling should be something like calculator.png
*/
const count = document.getElementById('cal');
const all = document.querySelectorAll('input');
all.forEach(element => {
    element.onclick =()=>{
    count.value+=element.value
    }
});
const equal = document.querySelector('.equal');
equal.onclick=()=>{
    count.value = eval(count.value)
};
const clear = document.querySelector('.clear');
clear.onclick=()=>{
    count.value = '';
};



