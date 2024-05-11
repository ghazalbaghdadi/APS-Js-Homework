//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
// i think there's something wrong with the first photo's link address :/
const allImg = document.querySelectorAll('img[alt=photos]');
allImg.forEach((element, i) => {
    if (i % 2 === 0) {
        element.style.border = "solid 5px #4169e1";
        element.style.width= '250px';
        element.style.height= '250px';
        element.style.margin= '25px';
        element.style.borderRadius = "8px";
    } else {
        element.style.border = "dotted 5px #ff00ff";
        element.style.width= '250px';
        element.style.height= '250px';
        element.style.margin= '25px';
        element.style.borderRadius = "8px";
    }
  });