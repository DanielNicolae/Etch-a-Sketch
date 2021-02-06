
let grid = document.getElementById("grid");
let rgba = "";

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        if ((i + j) % 2 === 0) {
            let cell = document.createElement("div");
            cell.classList.add("even");
            cell.addEventListener("mouseover", () => {
                cell.setAttribute("style", `background: rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]}) !important;`);
            });
            grid.appendChild(cell);
        }
        else {
            let cell = document.createElement("div");
            cell.classList.add("odd");
            cell.addEventListener("mouseover", () => {
                cell.setAttribute("style", `background: rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]}) !important;`);
            });
            grid.appendChild(cell);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let clicked = false;
let button = document.getElementById("reset");
button.addEventListener("click", () => {
    removeAllChildNodes(grid);
    let rows = prompt("Choose the number of rows:");
    let columns = prompt("Choose the number of columns:");
    document.documentElement.style.setProperty("--rows", rows);
    document.documentElement.style.setProperty("--columns", columns);
    if (rows <= 100 && columns <= 100) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let cell = document.createElement("div");
                cell.addEventListener("mouseover", () => {
                    cell.classList.add("cellHover");
                });
                grid.appendChild(cell);
            }
        }
    }
    else {
        alert("The maximum number of rows or columns is 100.")
    }
    clicked = !clicked;
    if (clicked) {
        button.classList.add("clicked");
    }
    else {
        button.classList.remove("clicked");
    }
});

let colorPicker = document.getElementById("colorWheel");
let canvasContext = colorPicker.getContext("2d");
var image = new Image(150, 150);
image.onload = () => canvasContext.drawImage(image, 0, 0, image.width*2, image.height);
image.src = "./images/color-wheel.jpg";
colorPicker.addEventListener("click", (mouseEvent) => {
    let imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
    rgba = imgData.data;
});