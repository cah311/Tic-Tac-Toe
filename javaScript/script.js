// Gameboard Module
const gameBoard = (() => {
  let gameboardArray = [];
  let gameBoardHTML = document.getElementById("game-space");

  //create grid
  for (let i = 0; i <= 2; i++) {
    let gameRow = document.createElement("div");
    gameRow.setAttribute("id", `row${i}`);
    gameRow.setAttribute("class", `game-row`);
    gameBoardHTML.append(gameRow);
    for (let j = 0; j <= 2; j++) {
      let gameCell = document.createElement("div");
      gameCell.setAttribute("id", `cell${i}${j}`);
      gameCell.setAttribute("class", `game-cell`);
      gameCell.addEventListener("click", function () {
        const mark = document.createElement("h1");
        mark.setAttribute("class", "X");
        mark.textContent = "X";
        gameCell.appendChild(mark);
        console.log(`cell${i}${j}`);
      });
      gameboardArray.push(gameCell);
      gameRow.append(gameCell);
    }
  }
})();

// Player Objects
const playerFactory = (marker) => {
  //   this.name = name;

  //   if (typeof Object == "undefined") {
  //     name = "player1";
  //   } else {
  //     name = "player2";
  //   }
  //   Object = this.name;

  //   console.log(Object, this.name);
  //   return { Object };
  marker;
  console.log(`player${marker}`);
  return marker;
};

// const person1 = Player();
// const person2 = Player();
// console.log(person1);
// console.log(person2);

const markerSelection = document.getElementsByClassName("marker-button");
for (let i in markerSelection) {
  markerSelection[i].onclick = function () {
    let a = markerSelection[i].value;
    playerFactory(a);
    console.log(a);
  };
}

function playerSelectionX() {
  let a = document.getElementById("x-button").value;
  console.log(a);
}
function playerSelectionO() {
  let b = document.getElementById("o-button").value;
  console.log(b);
}
// const player1 = Player("Jim", "X");
// const player2 = Player("Mark", "O");

// player1.marker;
// player2.marker;

// player1.setMarker();
// player2.setMarker();

// Gameflow Functions
const displayController = (() => {})();
