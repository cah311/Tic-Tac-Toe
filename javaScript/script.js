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
        mark.setAttribute("value", currentPlayer.marker);
        mark.textContent = currentPlayer.marker;
        gameCell.appendChild(mark);
        console.log(`cell${i}${j}`);

        // Winning conditions

        let cellUp1 = document.getElementById(`cell${i - 1}${j}`);
        let cellDown1 = document.getElementById(`cell${i + 1}${j}`);
        let cellLeft1 = document.getElementById(`cell${i}${j - 1}`);
        let cellRight1 = document.getElementById(`cell${i}${j + 1}`);
        let cellUp1Left1 = document.getElementById(`cell${i - 1}${j - 1}`);
        let cellUp1Right1 = document.getElementById(`cell${i - 1}${j + 1}`);
        let cellDown1Left1 = document.getElementById(`cell${i + 1}${j - 1}`);
        let cellDown1Right1 = document.getElementById(`cell${i + 1}${j + 1}`);
        let cellUp2 = document.getElementById(`cell${i - 2}${j}`);
        let cellDown2 = document.getElementById(`cell${i + 2}${j}`);
        let cellRight2 = document.getElementById(`cell${i}${j + 2}`);
        let cellLeft2 = document.getElementById(`cell${i}${j - 2}`);
        let cellDown2Left2 = document.getElementById(`cell${i + 2}${j - 2}`);
        let cellDown2Right2 = document.getElementById(`cell${i + 2}${j + 2}`);
        let cellUp2Left2 = document.getElementById(`cell${i - 2}${j - 2}`);
        let cellUp2Right2 = document.getElementById(`cell${i - 2}${j + 2}`);

        if (cellUp1 !== null && this.textContent === cellUp1.textContent) {
          if (
            cellDown1 !== null &&
            this.textContent === cellDown1.textContent
          ) {
            if (
              this.textContent === cellUp1.textContent &&
              this.textContent === cellDown1.textContent
            ) {
              alert(`${currentPlayer.name} wins!!`);
              console.log(`${currentPlayer.name} wins!!`);
              console.log(
                "-----------------------------------------------------"
              );
            } else {
              console.log(cellUp1.value);
              console.log(cellDown1.value);
              console.log("test1");

              switchPlayers();
            }
          } else if (!cellDown1) {
            {
              console.log("test2");

              console.log(this);
              switchPlayers();
            }
          }
        } else if (
          cellLeft1 !== null &&
          this.textContent === cellLeft1.textContent
        ) {
          if (
            cellRight1 !== null &&
            this.textContent === cellRight1.textContent
          ) {
            if (
              this.textContent === cellLeft1.textContent &&
              this.textContent === cellRight1.textContent
            ) {
              alert(`${currentPlayer.name} wins!!`);
              console.log(`${currentPlayer.name} wins!!`);
              console.log(
                "-----------------------------------------------------"
              );
            } else {
              console.log("test3");

              switchPlayers();
            }
          } else if (!cellRight1) {
            {
              console.log("test4");

              console.log(this);
              switchPlayers();
            }
          }
        } else {
          console.log("test5");

          switchPlayers();
        }

        // if (`cell${i}${j - 1}` != null) {
        //   let cellLeft1 = document.getElementById(`cell${i}${j - 1}`);
        //   console.log("cellLeft1", cellLeft1);
        // }
        // if (`cell${i}${j + 1}` != null) {
        //   let cellRight1 = document.getElementById(`cell${i}${j + 1}`);
        //   console.log("cellRight1", cellRight1);
        // }
        // if (`cell${i - 1}${j - 1}` != null) {
        //   let cellUp1Left1 = document.getElementById(`cell${i - 1}${j - 1}`);
        //   console.log("cellUp1Left1", cellUp1Left1);
        // }
        // if (`cell${i - 1}${j + 1}` != null) {
        //   let cellUp1Right1 = document.getElementById(`cell${i - 1}${j + 1}`);
        //   console.log("cellUp1Right1", cellUp1Right1);
        // }
        // if (`cell${i + 1}${j - 1}` != null) {
        //   let cellDown1Left1 = document.getElementById(`cell${i + 1}${j - 1}`);
        //   console.log("cellDown1Left1", cellDown1Left1);
        // }
        // if (`cell${i + 1}${j + 1}` != null) {
        //   let cellDown1Right1 = document.getElementById(`cell${i + 1}${j + 1}`);
        //   console.log("cellDown1Right1", cellDown1Right1);
        // }
        // if (`cell${i - 2}${j}` != null) {
        //   let cellUp2 = document.getElementById(`cell${i - 2}${j}`);
        //   console.log("cellUp2", cellUp2);
        // }
        // if (`cell${i + 2}${j}` != null) {
        //   let cellDown2 = document.getElementById(`cell${i + 2}${j}`);
        //   console.log("cellDown2", cellDown2);
        // }
        // if (`cell${i}${j + 2}` != null) {
        //   let cellRight2 = document.getElementById(`cell${i}${j + 2}`);
        //   console.log("cellRight2", cellRight2);
        // }
        // if (`cell${i}${j - 2}` != null) {
        //   let cellLeft2 = document.getElementById(`cell${i}${j - 2}`);
        //   console.log("cellLeft2", cellLeft2);
        // }
        // if (`cell${i + 2}${j - 2}` != null) {
        //   let cellDown2Left2 = document.getElementById(`cell${i + 2}${j - 2}`);
        //   console.log("cellDown2Left2", cellDown2Left2);
        // }
        // if (`cell${i + 2}${j + 2}` != null) {
        //   let cellDown2Right2 = document.getElementById(`cell${i + 2}${j + 2}`);
        //   console.log("cellDown2Right2", cellDown2Right2);
        // }
        // if (`cell${i - 2}${j - 2}` != null) {
        //   let cellUp2Left2 = document.getElementById(`cell${i - 2}${j - 2}`);
        //   console.log("cellUp2Left2", cellUp2Left2);
        // }
        // if (`cell${i - 2}${j + 2}` != null) {
        //   let cellUp2Right2 = document.getElementById(`cell${i - 2}${j + 2}`);
        //   console.log("cellUp2Right2", cellUp2Right2);
        // }

        // if (gameCell.textContent == cellDown1.textContent) {
        //   console.log(`${currentPlayer} wins!!`);
        // }

        // Switch turns
        function switchPlayers() {
          if (currentPlayer.marker === "X") {
            currentPlayer = playerO;
          } else if (currentPlayer.marker === "O") {
            currentPlayer = playerX;
          }
        }
        //switchPlayers();
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

let winner;

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
    console.log("-----------------------------------------------------");

    popupOverlay.classList.remove("active");
  }

  //Winning rules
})();
