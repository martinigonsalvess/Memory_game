//card options

const cards = [
  {
    name: "one",
    img: "scr/images/one.png",
  },
  {
    name: "two",
    img: "scr/images/two.png",
  },
  {
    name: "three",
    img: "scr/images/three.png",
  },
  {
    name: "four",
    img: "scr/images/four.png",
  },
  {
    name: "five",
    img: "scr/images/five.png",
  },
  {
    name: "six",
    img: "scr/images/six.png",
  },
  {
    name: "one",
    img: "scr/images/one.png",
  },
  {
    name: "two",
    img: "scr/images/two.png",
  },
  {
    name: "three",
    img: "scr/images/three.png",
  },
  {
    name: "four",
    img: "scr/images/four.png",
  },
  {
    name: "five",
    img: "scr/images/five.png",
  },
  {
    name: "six",
    img: "scr/images/six.png",
  },
];
cards.sort(() => 0.5 - Math.random());
console.log(cards);
//put random card in grid

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/images/blank.png");
    card.setAttribute("data-id", i);
  }
}
