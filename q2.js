//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const btn = document.querySelector("button");

btn.onclick = () => {
  let btnText = btn.children[1];
  let none = btn.children[0];
  btnText.innerText = "Added to Cart";
  btn.disabled = false;
  none.classList.remove("ri-handbag-line");
  btn.style.backgroundColor = "#ffffff7d";
  btn.style.paddingRight = "1.6rem";
};
