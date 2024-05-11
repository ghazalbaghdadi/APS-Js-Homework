//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const firsPara = document.querySelector("p");
console.log(firsPara);
// ******
[one, two, three, four].forEach((getId) => {
  document.querySelector("#getId");
});
// ******
const allPara = document.querySelectorAll("p");
console.log(allPara);
// ******
for (let index = 0; index < allPara.length; index++) {
  console.log(allPara[index].textContent);
}
// ******
const fourth = document.querySelector("p:nth-child(4)");
fourth.textContent = "Mahie ozonboron !!!!";
// fourth.innerText='Mahie ozonboron !!!!';
// ******
allPara.forEach((elemId) => {
  elemId.setAttribute("id", "songs");
  elemId.classList.add("varzesh");
});
// console.log(allPara);
// ******
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Lato:300,400,700"
);
document.head.appendChild(link);
allPara.forEach((element) => {
  element.style.color = "white";
  element.style.background = "aliceblue";
  element.style.fontFamily = "Lato";
  element.style.fontSize = "1.5rem";
  element.style.fontStyle = "italic";
  element.style.border = "solid 3px #4169e1";
  element.style.borderRadius = "5px";
  element.style.padding = "10px 10px";
  element.style.boxShadow = "10px 10px 10px #ff00ff";
});
// ******
const colors = ["green", "red"];
allPara.forEach((element, i) => {
  if (i % 2 === 0) {
    element.style.color = colors[0];
  } else {
    element.style.color = colors[1];
  }
});