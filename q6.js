//? look at the code in html file and say how we can attach an event to all of the buttons without actually giving it to them and selecting the button tag? write it's code .
//Note: your code should log the text content of the clicked button to the console.

// ! answer ===========================================

const parent = document.querySelector(".parent");

parent.addEventListener("click", (event) => {
  event.target = console.log(event.target.textContent);
});
