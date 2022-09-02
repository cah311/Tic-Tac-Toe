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
const playerFactory = (name, marker) => {};

// Gameflow Functions
const displayController = (() => {
  let player1 = "Player 1";

  //Create popup window
  const playerPopup = document.getElementById("player-popup");
  const popupWindow = document.createElement("div");
  popupWindow.setAttribute("id", "popup-window");
  popupWindow.setAttribute("class", "active");
  playerPopup.append(popupWindow);

  //Create Player Heading
  const popupHeader = document.createElement("div");
  popupHeader.setAttribute("id", "popup-header");
  const popupTitle = document.createElement("h1");
  popupTitle.setAttribute("id", "popup-title");
  popupTitle.innerHTML = player1;
  popupWindow.append(popupHeader);
  popupHeader.append(popupTitle);

  // Popup Text
  const popupText = document.createElement("div");
  popupText.setAttribute("id", "popup-text");
  popupText.innerHTML = "Choose your Marker";
  popupWindow.append(popupText);

  //create buttons
  const buttonContainer = document.createElement("div");
  popupWindow.append(buttonContainer);

  const xButton = document.createElement("button");
  xButton.setAttribute("class", "marker-button");
  xButton.setAttribute("id", "x-button");
  xButton.setAttribute("value", "X");
  xButton.setAttribute("data-close-button", "");
  xButton.innerHTML = "X";
  buttonContainer.append(xButton);

  const oButton = document.createElement("button");
  oButton.setAttribute("class", "marker-button");
  oButton.setAttribute("id", "o-button");
  oButton.setAttribute("value", "O");
  oButton.innerHTML = "O";
  buttonContainer.append(oButton);

  //Close Popup
  const popupOverlay = document.getElementById("popup-overlay");
  const popupClose = document.querySelectorAll("[data-close-button]");
  popupClose.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = document.getElementById("popup-window");
      closePopup(popup);
    });
  });

  function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove("active");
    console.log("bang");

    popupOverlay.classList.remove("active");
  }
})();
