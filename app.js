let bigTable = document.getElementById("table");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let columns = parseInt(document.getElementById("inputHeight").value);
let rows = parseInt(document.getElementById("inputWidth").value);




function makeTable () {
    let columns = parseInt(document.getElementById("inputHeight").value);
    let rows = parseInt(document.getElementById("inputWidth").value);
    let tbody = document.createElement("tbody");


    for (let i = 0; i < rows; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let c = document.createElement("td");
            r.appendChild(c);
        }
        tbody.appendChild(r);
    }
    bigTable.appendChild(tbody);
    console.log(bigTable);
}   


function wow () {
    let columns = parseInt(document.getElementById("inputHeight").value);
    let rows = parseInt(document.getElementById("inputWidth").value);
    console.log(rows);
    console.log(columns);
}

document.getElementById("makeTable").addEventListener("click", makeTable);
