// ////////////////
// Rehearsal
// ////////////////
// 1. Select an element (hint-button, hint)
const hintBtn = document.querySelector("#show-hint");
const hintText = document.querySelector(".hint");

// 2. Listen to an event (click on my button)
hintBtn.addEventListener("click", () => {
  // 3. Change the DOM (display the hint)
  hintText.classList.add("active");
});

// ////////////////
// Live code
// ////////////////

// 1. Select the tiles
const allTiles = document.querySelectorAll("table td");
// 2. Listen to click on each tile
const nextToEmpty = (tile) => {
  const emptyTile = document.querySelector(".empty");
  const emptyTileX = emptyTile.cellIndex;
  const emptyTileY = emptyTile.parentElement.rowIndex;
  const tileX = tile.cellIndex;
  const tileY = tile.parentElement.rowIndex;

  return (
    (emptyTileX === tileX && Math.abs(emptyTileY - tileY) === 1) || emptyTileY === tileY && Math.abs(emptyTileX - tileX) === 1
  )
};

const swapTile = (tile) => {
  const emptyTile = document.querySelector(".empty");
  // remove .empty class on empty tile
  emptyTile.classList.remove("empty");
  // add .empty class on tile
  tile.classList.add("empty");
  // add number inside empty tile
  emptyTile.innerText = tile.innerText;
  // remove number from tile
  tile.innerText = "";
};

const didWeWin = (allTiles) => {
  const numbers = [];
  allTiles.forEach((tile) => {
    numbers.push(tile.innerText);
  });
  return numbers.join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
};

allTiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    // console.log(event);
    // 3. If the tile is next to the empty tile
    const clickedTile = event.currentTarget;
    console.log(nextToEmpty(clickedTile))
    if (nextToEmpty(clickedTile)) {
      // swap place with the empty tile
      swapTile(clickedTile);
      // If order is correct display win message
      if(didWeWin(allTiles)) {
        alert("We won!! 🎸");
      }
    }
  });
});