let container = document.getElementById("grid16");

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

const COLOR_DEFAULT = "#333333";
const MODE_DEFAULT = "color";
const DEFAULT_SIZE = 16;

let currentColor = COLOR_DEFAULT;
let currentMode = MODE_DEFAULT;
let currentSize = DEFAULT_SIZE;



const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('grid');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);

function apagadorMode() {

    currentMode = "eraser";
}

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function cleanGrid() {
    grid.innerHTML = "";
    createGrid(16);
}

function createGrid(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return

     else if (currentMode === "color") {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === "eraser") {
      e.target.style.backgroundColor = '#fefefe'
    }
}


function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

window.onload = () => {
    createGrid(16)
  }







////////////////////// OLD CODE ///////////////////


//function createGrid() {

//    cleanGrid()
    
//    var xn = document.getElementById('sizeSlider').value;
//    var yn = document.getElementById('sizeSlider').value;

//    if (yn > 64 || xn > 64 ) {
//        console.log("The value has to be below 64")
//    }
//    else{
//        makeRows(xn);
//        makeColumns(yn);

//        for (let g = 0; g < cells.length; g++) {

//            (cells.item(g)).addEventListener('mouseover', () => (cells.item(g)).classList.add("colorn"));
//        }
//    }
//}




//function makeRows(rowNum) {


//    for (r = 0; r < rowNum; r++) {

//        let row = document.createElement("div");
//        container.appendChild(row).className = "gridRow";
//    }

//}

//function makeColumns (cellNum) {

//    for (i= 0; i < rows.length; i++) {
//        for (j = 0; j < cellNum; j++) {

//            let newCell = document.createElement("div");
//            rows[j].appendChild(newCell).className = "cell";

//        }
//    }
//}


