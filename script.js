// ? Display the following array on the page
// todo-1: First, watch the video in the help folder.
// todo-2: In the next step, review the HTML and CSS files.
// todo-3: Iterate over the "data" array and create a card for each array index.
// todo-4: Append the created card to the element with the class "cards".
// todo-5: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".

const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

data.forEach((ele) => {
  const cardsSection = document.querySelector(".cards");

  const card = document.createElement("div");
  card.classList.add("cards__card");

  cardsSection.append(card);

  const imgHolder = document.createElement("div");
  imgHolder.classList.add("cards__card__img");

  const cardsImg = document.createElement("img");
  cardsImg.setAttribute("src", ele.src);

  const cardsIcon = document.createElement("i");
  cardsIcon.classList.add("cards__card__img__icon", "ri-heart-3-line");
  cardsIcon.innerText = "100";

  imgHolder.append(cardsImg, cardsIcon);

  const title = document.createElement("h3");
  const span = document.createElement("span");
  title.classList.add("cards__card__body__title");
  title.innerText = ele.title;
  span.innerText = "BSC";
  title.append(span);

  const footer = document.createElement("div");
  footer.classList.add("cards__card__footer");

  card.append(imgHolder, title, footer);

  const account = document.createElement("div");
  account.classList.add("cards__card__footer__account");

  const icon = document.createElement("img");
  icon.setAttribute("src", ele.accountImage);

  const userName = document.createElement("h4");
  userName.innerText = ele.account;

  account.append(icon, userName);

  const button = document.createElement("button");
  button.classList.add("ri-handbag-line");
  button.innerText = "Please Bid";
  button.addEventListener("click", () => {
    document.querySelector(".cardSelected").innerText = `you Selected card #${ele.id}`;
  });

  footer.append(account, button);
});
