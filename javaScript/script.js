// Gameboard Module
const gameBoard = (() => {
  let gameboardArray = [];
  let gameBoardHTML = document.getElementById("game-space");

  for (let i = 0; i <= 2; i++) {
    let gameRow = document.createElement("div");
    gameRow.setAttribute("id", `row${i}`);
    gameRow.setAttribute("class", `game-row`);
    gameBoardHTML.append(gameRow);
    for (let j = 0; j <= 2; j++) {
      let gameCell = document.createElement("div");
      gameCell.setAttribute("id", `cell${i}${j}`);
      gameCell.setAttribute("class", `game-cell`);
      gameboardArray.push(gameCell);
      gameRow.append(gameCell);
    }
  }
})();

// Player Objects
const Player = (name, marker) => {
  name = name;
  marker = marker;
  const setMarker = () => console.log(name, marker);
  return { setMarker, marker };
};

const player1 = Player("Jim", "X");
const player2 = Player("Mark", "O");

player1.marker;
player2.marker;

player1.setMarker();
player2.setMarker();

// Gameflow Functions
const displayController = ((marker) => {
  const gameMark = document.getElementsByClassName("game-cell");
  const markFunction = () => {
    const mark = document.createElement("h1");
    mark.textContent = marker;
    gameMark.append.mark;
  };

  document.addEventListener("click", markFunction);
})(marker);
