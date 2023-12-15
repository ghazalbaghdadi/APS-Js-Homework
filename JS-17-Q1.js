// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
const bodyBackGround = (document.body.style.background = "#0a122d");
const img = document.querySelector("#strangeFish");
img.style.cssText = "margin: 4rem 0 ;border-radius: 1 rem;";
const tagUp = document.querySelector(".hero__title");
tagUp.style.cssText = "top: 5rem ;left: 2rem;";
tagUp.style.fontFamily = "sans-serif";
const tagDown = document.querySelector(".hero__subtitle");
tagDown.style.cssText = "top: 7rem ;left: 2rem;";
tagDown.style.fontFamily = "sans-serif";
body.append(tagUp, tagDown);
