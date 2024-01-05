// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

let heart = document.querySelector(".ri-heart-3-line");
let counter = document.getElementById("counter");

heart.addEventListener("click", () => {
  heart.style.color = "red";
  counter.innerText++;
});
