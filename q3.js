// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const bilbilak = document.querySelector(".ri-close-line");

bilbilak.onclick = () => {
  bilbilak.parentElement.style.visibility = "hidden";
};
