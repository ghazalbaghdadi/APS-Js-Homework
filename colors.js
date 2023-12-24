/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/
const colored = (document.getElementById("green").style.background =
"rgba(31, 127, 102, 1)");
const colored1 = (document.getElementById("yellow").style.background =
  "rgba(255, 200, 0, 1)");
const colored2 = (document.getElementById("orange").style.background =
  "rgba(255, 123, 0, 1)");
const colored3 = (document.getElementById("red").style.background =
  "rgba(216, 1, 1, 1)");
const colored4 = (document.getElementById("pink").style.background =
  "rgba(223, 4, 70, 1)");
const colored5 = (document.getElementById("purple").style.background =
  "rgba(127, 31, 85, 1)");
const colored6 = (document.getElementById("lavender").style.background =
  "rgba(93, 18, 199, 1)");

const buttonAll = document.querySelectorAll("div.circles button");
const inputs = document.querySelectorAll(".opacityChange");
const opacity = [1, 0.8, 0.6, 0.4, 0.2];
for (let i = 0; i < buttonAll.length; i++) {
  buttonAll[i].onclick = () => {
    inputs.forEach((ele, index) => {
      let currentColor = getComputedStyle(buttonAll[i]).backgroundColor;
      let newColor = currentColor
        .replace("rgb", "rgba")
        .replace(")", `, ${opacity[index]}`);
      ele.style.backgroundColor = newColor;
    });
  };
}

// buttonAll.forEach((ele) => {
//   ele.addEventListener("click", function () {
//     let elements = document.getElementsByClassName("opacityChange");
//     let element;
//     let colors;
//     for (i = 0; i < elements.length; i++) {
//       element = getComputedStyle(ele).getPropertyValue("background-color");
//       colors = element.split(", ");
//       colors[0] = parseFloat(colors[0].split("(")[1]);
//       colors[1] = parseFloat(colors[1]);
//       colors[2] = parseFloat(colors[2]);
//       if (colors.length === 3) {
//         colors[3] = 1;
//         colors[3] = parseFloat(colors[3] - 0.1);
//       }
//       elements[i].style.backgroundColor = colors =
//         "rgba(" + colors.join(",") + ")";
//     }
//   });
// });
