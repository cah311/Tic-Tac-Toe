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

      // Cell onClick
      gameCell.addEventListener("click", function () {
        const mark = document.createElement("h1");
        mark.setAttribute("class", "game-board-mark");
        mark.textContent = currentPlayer.marker;
        gameCell.appendChild(mark);
        console.log(`cell${i}${j}`);

        // Switch turns
        if (currentPlayer.marker === "X") {
          currentPlayer = playerO;
        } else if (currentPlayer.marker === "O") {
          currentPlayer = playerX;
        }
      });

      gameboardArray.push(gameCell);
      gameRow.append(gameCell);
    }
  }
})();

// Player Objects
const playerFactory = (name, marker) => {
  name;
  marker;
  const sayPlayer = () => {
    console.log(`Player Object: ${name} ${marker}`);
  };
  return { name, marker, sayPlayer };
};

let playerX;
let playerO;
let currentPlayer;

// Gameflow Functions
const displayController = (() => {
  let x = 1;
  let player = `Player ${x}`;

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
  popupTitle.innerHTML = player;
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
  xButton.setAttribute("data-button", "");
  xButton.innerHTML = "X";
  buttonContainer.append(xButton);

  const oButton = document.createElement("button");
  oButton.setAttribute("class", "marker-button");
  oButton.setAttribute("id", "o-button");
  oButton.setAttribute("value", "O");
  oButton.setAttribute("data-button", "");
  oButton.innerHTML = "O";
  buttonContainer.append(oButton);

  //Button Functions
  const popupOverlay = document.getElementById("popup-overlay");
  const buttonClick = document.querySelectorAll("[data-button]");

  buttonClick.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.value);
      console.log(player);

      let markerValue;

      if (button.value === "X") {
        xButton.setAttribute("class", "active");
        markerValue = button.value;
        playerX = playerFactory(player, markerValue);
        if (playerX.name === "Player 1") {
          currentPlayer = playerX;
        }
        console.log(playerX);
        console.log(`Current Player: ${currentPlayer}`);
      } else if (button.value === "O") {
        oButton.setAttribute("class", "active");
        markerValue = button.value;
        playerFactory(player, markerValue);
        playerO = playerFactory(player, markerValue);
        if (playerO.name === "Player 1") {
          currentPlayer = playerO;
        }
        console.log(playerO);
        console.log(`Current Player: ${currentPlayer}`);
      }
      const popup = document.getElementById("popup-window");
      x = x + 1;
      popupTitle.innerHTML = `Player ${x}`;
      player = `Player ${x}`;

      closePopup(popup);
      closeOverlay(popupOverlay);
    });
  });

  function closePopup(popup) {
    if (popup == null) return;
    if (x < 3) return;
    popup.classList.remove("active");
    console.log("bang");

    popupOverlay.classList.remove("active");
  }

  function closeOverlay(popupOverlay) {
    if (popupOverlay == null) return;
    if (x < 3) return;
    popupOverlay.classList.remove("active");
    console.log("bang2");

    popupOverlay.classList.remove("active");
  }
})();
