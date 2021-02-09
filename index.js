
let grid = document.getElementById("grid");
let rgba = "";

function evenOddCells() {
    let rows = getComputedStyle(document.body).getPropertyValue("--rows");
    let columns = getComputedStyle(document.body).getPropertyValue("--columns");
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
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

}

evenOddCells();


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let clicked = false;
let button = document.getElementById("reset");
button.addEventListener("click", () => {
    removeAllChildNodes(grid);
    let newRows = prompt("Choose the number of rows:");
    let newColumns = prompt("Choose the number of columns:");
    document.documentElement.style.setProperty("--rows", newRows);
    document.documentElement.style.setProperty("--columns", newColumns);
    console.log(newRows);
    console.log(newColumns)
    if (newRows <= 100 && newColumns <= 100) {
        evenOddCells();
    }
    else {
        alert("The maximum number of rows or columns is 100.");
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