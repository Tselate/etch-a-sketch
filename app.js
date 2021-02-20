let bigTable = document.getElementById("table");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let columns = parseInt(document.getElementById("inputHeight").value);
let rows = parseInt(document.getElementById("inputWidth").value);

// Furction makes table 

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
    
} 

//Make table on click command 
document.getElementById("makeTable").addEventListener("click", makeTable);


let any = Math.floor(Math.random()*16777215).toString(16);

// Function to change each box into a random color on click
function rgb () {
    let columns = parseInt(document.getElementById("inputHeight").value);
    let rows = parseInt(document.getElementById("inputWidth").value);
    let tbody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            data = document.createElement("td");
            
            r.appendChild(data);  
        }
        tbody.appendChild(r);
        
    }
    
    let boxes = document.getElementsByTagName("td");
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].addEventListener("click", function () {
            boxes[k].style.background = "#" + any;
        }
        );
    }
}


// Function to make each clicked box to turn black 
function black () {
    let columns = parseInt(document.getElementById("inputHeight").value);
    let rows = parseInt(document.getElementById("inputWidth").value);
    let tbody = document.createElement("tbody");

    for (let i = 0; i < rows; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            data = document.createElement("td");
            
            r.appendChild(data);  
        }
        tbody.appendChild(r);
        
    }
    
    let boxes = document.getElementsByTagName("td");
    for (let k = 0; k < boxes.length; k++) {
        boxes[k].addEventListener("click", function () {
            boxes[k].style.background = "#000";
        }
        );
    }
}



