# Tic-Tac-Toe

~~ Interactive Tic-Tac-Toe Game ~~~

// Goals to accomplish with this code

1.  store gameboard as array inside Gameboard Object

    - players will be stored in objects as well
    - an object will also control the flow of the game

      - have a little global code as possible

      ***

            if you need ONE of something, use a MODULE,
            if you need MULTIPLE, use a FACTORY FFUNCTION

      ***

2.  SET UP HTML & JAVASCRIPT FUNCTION THAT WILL RENDER CONTENTS
    OF GAMEBOARD ARRAY TO THE WEBPAGE

    - to start just manually fill array with X's & O's

3.  Create functions that allow players to add marks to specific
    spots on the board then tie it to the DOM, letting players click
    on the gameboard to place their marker

    - establish logic that keeps players from playing in spots already taken

      - Think carefully about where each bit of logic should reside.
        Each little piece of functionality should be able to fit
        in the game, player or gameboard objects.. but take care to
        put them in “logical” places. Spending a little time brainstorming
        here can make your life much easier

4.  build logic that checks when the game is over (look for 3 in a row)

5.  Clean up interface that allows players to input names

    - create a start/ restart button
    - create a display element that congragulates winner

6.  Create AI (see Project page on Odin Project)
