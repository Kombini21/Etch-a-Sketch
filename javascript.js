const container = document.getElementById("grid16");

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");





defaultGrid();

for (let g = 0; g < cells.length; g++) {

    (cells.item(g)).addEventListener('mouseover', () => (cells.item(g)).classList.add("colorn"));
}


function defaultGrid() {

    makeRows(24);
    makeColumns(24);

}


function makeRows(rowNum) {


    for (r = 0; r < rowNum; r++) {

        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }

}

function makeColumns (cellNum) {

    for (i= 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {

            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";

        }
    }
}


