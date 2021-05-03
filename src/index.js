//card options

const cardArray = [
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
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
//put random card in grid

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenIds = [];
let cardWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
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
  //   console.log(cardArray[cardId]); // click on it see the random images
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  if (cardChosenIds[0] == cardChosenIds[1]) {
    alert("You have clicked the same image");
    cards[cardChosenIds[0]].setAttribute("src", "src/images/blank.png");
    cards[cardChosenIds[1]].setAttribute("src", "src/images/blank.png");
  } else if (cardChosen[0] === cardChosen[1]) {
    alert("You have found a match");
    cards[cardChosenIds[0]].setAttribute("src", "src/images/white.png");
    cards[cardChosenIds[1]].setAttribute("src", "src/images/white.png");
    cards[cardChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardChosenIds[1]].removeEventListener("click", flipCard);
    cardWon.push(cardChosen);
  } else {
    cards[cardChosenIds[0]].setAttribute("src", "src/images/blank.png");
    cards[cardChosenIds[1]].setAttribute("src", "src/images/blank.png");
    alert("Sorry no match");
  }
  //start over
  cardChosen = [];
  cardChosenIds = [];
  resultDisplay.textContent = cardWon.length;
  if (cardWon.length === cardArray.length / 2) {
    return (resultDisplay.textContent = "congratulations! you have won");
  }
}

createBoard();
