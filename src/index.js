//card options

const cards = [
  {
    name: "one",
    img: "src/images/one.png",
  },
  {
    name: "two",
    img: "src/images/two.png",
  },
  {
    name: "three",
    img: "src/images/three.png",
  },
  {
    name: "four",
    img: "src/images/four.png",
  },
  {
    name: "five",
    img: "src/images/five.png",
  },
  {
    name: "six",
    img: "src/images/six.png",
  },
  {
    name: "one",
    img: "src/images/one.png",
  },
  {
    name: "two",
    img: "src/images/two.png",
  },
  {
    name: "three",
    img: "src/images/three.png",
  },
  {
    name: "four",
    img: "src/images/four.png",
  },
  {
    name: "five",
    img: "src/images/five.png",
  },
  {
    name: "six",
    img: "src/images/six.png",
  },
];
cards.sort(() => 0.5 - Math.random());
console.log(cards);
//put random card in grid

const grid = document.querySelector(".grid");
let cardChosen = [];
let cardChosenIds = [];

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
    //creating: img src='src/images/blank.png' data-id='0'...etc
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  //   console.log(cards[cardId]); // click on it see the random images
  cardChosen.push(cards[cardId].name);
  cardChosenIds.push(cardId);

  this.setAttribute("src", cards[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
createBoard();
