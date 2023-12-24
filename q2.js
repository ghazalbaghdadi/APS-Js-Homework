/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========

let div = document.querySelector("#hover");
div.addEventListener("mouseover",function () {
  let r = Math.floor(Math.random() * 254 +1);
  let g = Math.floor(Math.random() * 254 +1);
  let b = Math.floor(Math.random() * 254 +1);
  let bckColor = `rgb(${r},${g},${b})`;
  div.style.backgroundColor = bckColor ;
});


