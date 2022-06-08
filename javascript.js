let container = document.getElementById("grid16");

let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



function cleanGrid() {

    let romws = document.getElementById("grid16");
    romws.innerHTML = "";


}



function defaultGrid() {


    var xn = document.getElementById('xname').value;
    var yn = document.getElementById('yname').value;

    if (yn > 64 || xn > 64 ) {
        console.log("The value has to be below 64")
    }
    else{
        makeRows(xn);
        makeColumns(yn);

        for (let g = 0; g < cells.length; g++) {

            (cells.item(g)).addEventListener('mouseover', () => (cells.item(g)).classList.add("colorn"));
        }
    }
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


