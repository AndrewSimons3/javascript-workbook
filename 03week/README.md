1. Get the current startStack and endStack values (either through user input or test values)
- Pass those values to isLegal function
- Pass those values to movePiece function

2. Check that a piece is allowed to move (isLegal function)
- Use the startStack and endStack values to determine if it would be a legal move based off the rules 
  of the game
  - StartStack and endStack should be different letters
  - access the numbers inside the arrays that correspond to the startStack/endStack 
    values ('a', 'b', or 'c'), these are the keys of the stacks object
  - A bigger number can not be placed on top of a smaller number
    - Any number can be placed on top of an empty stack (array inside the stacks object)
- Nice to have: return an error message (string) telling the user if their 
input is invalid (should be 'a', 'b', or 'c')
- Nice to have: further input validation like making sure the startStack/endStack values are 1 character long
(there are a lot of other cases to think about too)

3. Move a piece from one stack to another (movePiece function) 
- Update the stacks object inside of the movePiece function using the startStack and endStack values
- Take the value from the end of the startStack array and add to the end of the endStack array
- maybe use .pop?, .shift?, or different array methods

4. Check to see if the game is won (checkForWin function)
- When all the blocks are stacked into column 2 or 1 return true otherwise false
- Nice to have: console log a winning message


