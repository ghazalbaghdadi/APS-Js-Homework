function listOfColours(colours) {
  // Write your code here...
  const content = document.querySelector("#content");
  const select = document.createElement("select");
  const para = document.createElement("p");
  content.append(select,para);
  for (let i = 0; i < colours.length; i++) {
    const option = document.createElement("option");
    option.innerText = colours[i];
    select.append(option);
    select.onchange = (event) => {
      para.innerText = `You have selected ${event.target.value} !`;
      para.style.color = event.target.value;
      content.style.boxShadow = `0px 2px 18px 0px ${event.target.value}`;
    };
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
