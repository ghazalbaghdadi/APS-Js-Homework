// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll(".fa-star");

stars.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});
