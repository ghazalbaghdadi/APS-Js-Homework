// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const span = document.querySelectorAll(".circle");
for (const items of span) {
  if (items.classList.contains("blue")) {
    items.classList.remove("blue");
    items.classList.add("purple");
  } else if (items.classList.contains("purple")) {
    items.classList.remove("purple");
    items.classList.add("blue");
  }
}
