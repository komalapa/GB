function generateField(color1 = "white", color2 = "black") {
    //добавляет 8 div - строк в каждом 8 div клеток
    let field = document.getElementById("chess-field");
    //console.log(field);
    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            if (i % 2 == j % 2) {
                cell.style = `background-color : ${color1}`;
            } else {
                cell.style = `background-color : ${color2}`;
            }

            row.appendChild(cell);
        }
        field.appendChild(row);
    }

}

function createCarousel(colors = ["red", "orange", "yellow", "green", "lightblue", "blue", "violet", "white", "grey", "black"]) {
    let carousel = document.getElementById("carousel");
    let choosen = document.createElement("div");
    choosen.className = "carousel-choosen";
    carousel.appendChild(choosen);
    let itemsList = document.createElement("ul");
    itemsList.className = "carousel-colors-list";

    for (let i = 0; i < colors.length; i++) {
        let item = document.createElement("li");
        item.className = "carousel-colors-list-item";
        item.id = `color${i}`;
        item.style = `background-color : ${colors[i]}`;
        item.onclick = function () {
            choosen.style = `background-color : ${colors[i]}`;
        }
        itemsList.appendChild(item);
    }
    carousel.appendChild(itemsList);
}

window.onload = function () {
    createCarousel();
    generateField("green", "yellow");
}
