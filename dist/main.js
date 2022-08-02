/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map