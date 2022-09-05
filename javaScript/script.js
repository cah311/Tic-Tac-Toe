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
  xButton.setAttribute("data-close-button", "");
  xButton.innerHTML = "X";
  buttonContainer.append(xButton);

  const oButton = document.createElement("button");
  oButton.setAttribute("class", "marker-button");
  oButton.setAttribute("id", "o-button");
  oButton.setAttribute("value", "O");
  oButton.setAttribute("data-close-button", "");
  oButton.innerHTML = "O";
  buttonContainer.append(oButton);

  //Close Popup
  const popupOverlay = document.getElementById("popup-overlay");
  const popupClose = document.querySelectorAll("[data-close-button]");
  popupClose.forEach((button) => {
    button.addEventListener("click", () => {
      x = x + 1;
      popupTitle.innerHTML = `Player ${x}`;
      console.log(button.value);
      if (button.value === "X") {
        xButton.setAttribute("class", "active");
      } else if (button.value === "O") {
        oButton.setAttribute("class", "active");
      }
      const popup = document.getElementById("popup-window");
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
