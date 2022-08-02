// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on the button)
button.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM (add a class active to the hint)
  hint.classList.add("active");
});


// ////////////////
// Live code
// ////////////////
const isNeighborEmpty = (tile) => {
  //find the cell index of the clicked tile (row index, parent)
  //the find the row of the clicked tile.
  //select the empty tile
  //find cell index and row index
  //if we are next to empty, return true, if not return false 
  const tileCellIndex = tile.cellIndex;
  const tileRowIndex = tile.parentElement.rowIndex;
  const empty = document.querySelector(".empty");
  const emptyCellIndex = empty.cellIndex;
  const emptyRowIndex = empty.parentElement.rowIndex;
  // (tileCellIndex - emptyCellIndex ---> +1 or -1) AND (tileRowIndex === emptyRowIndex)
  // OR
  // (tileRowIndex - emptyRowIndex ---> +1 or -1) AND (tileCellIndex === emptyCellIndex)
  // -----> TRUE
  return ( Math.abs(tileCellIndex - emptyCellIndex) + Math.abs(tileRowIndex - emptyRowIndex) === 1 );
};

const swap = (tile) => {
  const empty = document.querySelector(".empty");
  // remove .empty class from empty
  empty.classList.remove("empty");
  // add .empty class to tile
  tile.classList.add("empty");
  // add innerText to empty
  empty.innerText = tile.innerText;
  // remove innerText from tile
  tile.innerText = "";

};

const didWeWin = (tiles) => {
  const result = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const tileNumbers = [];
  tiles.forEach((tile) => {
    tileNumbers.push(tile.innerText);
  });
  return (result === tileNumbers.join());
}

// 1. Select all the tiles
const tiles = document.querySelectorAll("td"); // NOICE
// 2. forEach element 
tiles.forEach((tile) => {
  // 3. Listen to a click
  tile.addEventListener("click", (event) => {
    // console.log(event);
    // 4. Check if clicked tile is next to empty one (create a function!)
    const clickedTile = event.currentTarget;
    //isNeighborEmpty returning a boolean. 
    if(isNeighborEmpty(clickedTile)) {
      //swap a tile to it
      // 5. If "yes" use swap tiles 
      swap(clickedTile);
      // 6. Check if we win 
      if (didWeWin(tiles)) {
        alert("We won 🎸")
      }
    }

  });
})