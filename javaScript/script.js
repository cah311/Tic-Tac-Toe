// Gameboard Module
const gameBoard = (() => {
  let gameboardArray = [];
  let gameBoardHTML = document.getElementById("game-space");
  let randomize = "off";

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
        // Computer Selection
        function randomCompSelection(array) {
          randomize = "on";
          switchPlayers();
          randomCycle();
          function randomCycle() {
            for (let i = array.length - 1; i >= 0; i--) {
              if (i < 0) {
                draw();
                return;
              }
              let j = Math.floor(Math.random() * (i + 1));
              let k = gameboardArray[j];
              let x = document.getElementById(k.id);
              if (x.textContent !== "") {
                randomCycle();
              }
              console.log(k);
              console.log(k.id);
              x.click();
              console.log(`Computer Selection: ${x}`);
              switchPlayers();
              randomize = "off";
              return;
            }
          }
        }

        //check for existing mark
        if (gameCell.textContent === "") {
          console.log(this.textContent);
          const mark = document.createElement("h1");
          mark.setAttribute("class", "game-board-mark");
          mark.setAttribute("value", currentPlayer.marker);
          mark.textContent = currentPlayer.marker;
          gameCell.appendChild(mark);
          //console.log(`cell${i}${j}`);
        } else {
          return;
        }

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

        //Vertical check
        if (cellUp1 !== null && this.textContent === cellUp1.textContent) {
          if (
            cellDown1 !== null &&
            this.textContent === cellDown1.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else if (
            cellUp2 !== null &&
            this.textContent === cellUp2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          cellDown1 !== null &&
          this.textContent === cellDown1.textContent
        ) {
          if (
            cellDown2 !== null &&
            this.textContent === cellDown2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          // horizontal check
          cellLeft1 !== null &&
          this.textContent === cellLeft1.textContent
        ) {
          if (
            cellRight1 !== null &&
            this.textContent === cellRight1.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else if (
            cellLeft2 !== null &&
            this.textContent === cellLeft2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          cellRight1 !== null &&
          this.textContent === cellRight1.textContent
        ) {
          if (
            cellRight2 !== null &&
            this.textContent === cellRight2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          // diagonal check
          cellUp1Left1 !== null &&
          this.textContent === cellUp1Left1.textContent
        ) {
          if (
            cellDown1Right1 !== null &&
            this.textContent === cellDown1Right1.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else if (
            cellUp2Left2 !== null &&
            this.textContent === cellUp2Left2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          cellDown1Right1 !== null &&
          this.textContent === cellDown1Right1.textContent
        ) {
          if (
            cellDown2Right2 !== null &&
            this.textContent === cellDown2Right2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          cellUp1Right1 !== null &&
          this.textContent === cellUp1Right1.textContent
        ) {
          if (
            cellDown1Left1 !== null &&
            this.textContent === cellDown1Left1.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else if (
            cellUp2Right2 !== null &&
            this.textContent === cellUp2Right2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else if (
          cellDown1Left1 !== null &&
          this.textContent === cellDown1Left1.textContent
        ) {
          if (
            cellDown2Left2 !== null &&
            this.textContent === cellDown2Left2.textContent
          ) {
            alert(`${currentPlayer.name} wins!!`);
            console.log(`${currentPlayer.name} wins!!`);
            console.log(
              "-----------------------------------------------------"
            );
          } else {
            //console.log("final test");
            switchPlayers();
          }
        } else {
          //console.log("final test");
          switchPlayers();
        }

        // Switch turns
        function switchPlayers() {
          if (
            currentPlayer.compStatus === "computerOn" &&
            currentPlayer.name === "Player 1" &&
            randomize === "off"
          ) {
            randomCompSelection(gameboardArray);
          }
          if (currentPlayer.marker === "X") {
            currentPlayer = playerO;
          } else if (currentPlayer.marker === "O") {
            currentPlayer = playerX;
          }
        }
        // Check for draw
        function draw() {
          if (
            cell01.textContent !== "" &&
            cell02.textContent !== "" &&
            cell10.textContent !== "" &&
            cell11.textContent !== "" &&
            cell12.textContent !== "" &&
            cell20.textContent !== "" &&
            cell21.textContent !== "" &&
            cell22.textContent !== "" &&
            cell00.textContent !== "" &&
            winner === ""
          ) {
            alert("Draw");
            return;
          }
        }

        draw();
      });

      gameboardArray.push(gameCell);
      gameRow.append(gameCell);
    }
  }

  // reset button
  const btnContainer = document.getElementById("button-container");
  const resetButton = document.createElement("button");
  resetButton.setAttribute("id", "reset-button");
  resetButton.textContent = "Reset";
  btnContainer.append(resetButton);

  //reset gameboard
  resetButton.addEventListener("click", function () {
    cell01.textContent = "";
    cell02.textContent = "";
    cell10.textContent = "";
    cell11.textContent = "";
    cell12.textContent = "";
    cell20.textContent = "";
    cell21.textContent = "";
    cell22.textContent = "";
    cell00.textContent = "";
  });
})();

// Player Objects
const playerFactory = (name, marker, compStatus) => {
  name;
  marker;
  compStatus;
  const sayPlayer = () => {
    console.log(`Player Object: ${name} ${marker} ${compStatus}`);
  };
  return { name, marker, compStatus, sayPlayer };
};

let playerX;
let playerO;
let currentPlayer;

let winner;

// Game Functions
const displayController = (() => {
  let x = 1;
  let player = `Player ${x}`;

  let compStatus = "computerOff";

  const playerPopup = document.getElementById("player-popup");

  //Create opponant popup window
  const opPopupWindow = document.createElement("div");
  opPopupWindow.setAttribute("id", "op-popup-window");
  opPopupWindow.setAttribute("class", "active");
  playerPopup.append(opPopupWindow);

  //Create Opponant Heading
  const opPopupHeader = document.createElement("div");
  opPopupHeader.setAttribute("id", "popup-header");
  const opPopupTitle = document.createElement("h1");
  opPopupTitle.setAttribute("id", "popup-title");
  opPopupTitle.innerHTML = "Choose your Opponant";

  opPopupWindow.append(opPopupHeader);
  opPopupHeader.append(opPopupTitle);

  //Create popup window

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
  const opButtonContainer = document.createElement("div");
  opPopupWindow.append(opButtonContainer);

  const buttonContainer = document.createElement("div");
  popupWindow.append(buttonContainer);

  const compOpBtn = document.createElement("button");
  compOpBtn.setAttribute("class", "opponant-button");
  compOpBtn.setAttribute("id", "computer-opponant");
  compOpBtn.setAttribute("value", "comp");
  compOpBtn.setAttribute("op-data-button", "");

  compOpBtn.innerHTML = "Computer";
  opButtonContainer.append(compOpBtn);

  const humanOpBtn = document.createElement("button");
  humanOpBtn.setAttribute("class", "human-button");
  humanOpBtn.setAttribute("id", "human-opponant");
  humanOpBtn.setAttribute("value", "human");
  humanOpBtn.setAttribute("op-data-button", "");

  humanOpBtn.innerHTML = "Human";
  opButtonContainer.append(humanOpBtn);

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

  //Opponant Button Functions
  const popupOverlay = document.getElementById("popup-overlay");
  const opButtonClick = document.querySelectorAll("[op-data-button]");

  opButtonClick.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "human") {
        const opPopup = document.getElementById("op-popup-window");
        console.log(button.value);
        closeOpPopup(opPopup);
      }
      if (button.value === "comp") {
        const opPopup = document.getElementById("op-popup-window");
        console.log(button.value);
        compStatus = "computerOn";
        closeOpPopup(opPopup);
      }
    });
  });
  //Player Marker Button Functions
  const buttonClick = document.querySelectorAll("[data-button]");

  buttonClick.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.value);
      console.log(player);

      let markerValue;

      if (button.value === "X") {
        xButton.setAttribute("class", "active");
        markerValue = button.value;
        if (player === "Player 1") {
          playerX = playerFactory(player, markerValue, compStatus);
        } else {
          playerX = playerFactory(player, markerValue);
        }

        if (playerX.name === "Player 1") {
          currentPlayer = playerX;
        }
        console.log(playerX);
        console.log(`Current Player: ${currentPlayer}`);
      } else if (button.value === "O") {
        oButton.setAttribute("class", "active");
        markerValue = button.value;

        if (player === "Player 1") {
          playerO = playerFactory(player, markerValue, compStatus);
        } else {
          playerO = playerFactory(player, markerValue);
        }

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

  function closeOpPopup(opPopup) {
    opPopup.classList.remove("active");
    console.log("bang");
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
