// Gameboard Module
const gameBoard = (() => {
  const gameboard = [];
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

      gameRow.append(gameCell);
    }
  }
  //gameBoard.push(gameCell);
})();

// Player Objects
const Player = (name, marker) => {};

// Gameflow Functions
const displayController = (() => {})();
