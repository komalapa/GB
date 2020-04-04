function highlightFigure(cell) {
    if (cell.style.color == cell.style.backgroundColor) {
        if (cell.style.backgroundColor == "black") {
            cell.style.textShadow = "0 0 5px white";
        } else if (cell.style.backgroundColor == "white") {
            cell.style.textShadow = "0 0 10px gray";
        }
    } else {
        cell.style.textShadow = "none";
    }
}

function cellToBuff(cell) {
    let buff = {};
    buff.cellId = cell.id;
    buff.figure = cell.innerHTML; //innerText не работает с кодами символов
    buff.color = cell.style.color;
    return buff;
}

function markCell(cell, figureBuffer) {
    if (cell.classList.contains("cell-marked")) {
        cell.classList.remove("cell-marked");
        figureBuffer = {};//"руки"
    } else if (cell.innerText) { //выделять пустые клетки бессмысленно если буфер пустой
        if (figureBuffer.cellId) { //фигура "в руках" -ход
            let lastCell = document.getElementById(figureBuffer.cellId);
            lastCell.classList.remove("cell-marked");
            if (figureBuffer.color == cell.style.color) {
                cell.classList.add("cell-marked");
                figureBuffer = cellToBuff(cell);
            } else {
                cell.style.color = figureBuffer.color;
                cell.innerHTML = figureBuffer.figure;
                lastCell.innerHTML = "";
                figureBuffer = {};
            }
        } else { //"берем" фигуру
            cell.classList.add("cell-marked");
            figureBuffer = cellToBuff(cell);
        }
    } else if (figureBuffer.cellId) { //фигура "в руках" - ставим на пустую клетку
        cell.style.color = figureBuffer.color;
        cell.innerHTML = figureBuffer.figure;
        let lastCell = document.getElementById(figureBuffer.cellId);
        lastCell.classList.remove("cell-marked");
        lastCell.innerHTML = "";
        figureBuffer = {};
    }
    highlightFigure(cell);
    return figureBuffer;
}

function generateField(color1 = "white", color2 = "black") {
    const figurs = {
        king: '&#9818',
        rook: '&#9820',
        bishop: '&#9821',
        queen: '&#9819',
        knight: '&#9822',
        pawn: '&#9823',
    };
    //добавляет 8 div - строк в каждом 8 div клеток
    let field = document.getElementById("chess");
    let figureBuffer = {};
    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement("div");
            cell.onclick = function () {
                figureBuffer = markCell(cell, figureBuffer)
            };
            if (i % 2 == j % 2) {
                cell.style.backgroundColor = `${color1}`;
                cell.className = "cell cell-color1";
            } else {
                cell.style.backgroundColor = `${color2}`;
                cell.className = "cell cell-color2";
            }
            //сверху черные, снизу белые фигуры
            if ((i == 1) || (i == 0)) {
                cell.style.color = "black";
            } else if ((i == 6) || (i == 7)) {
                cell.style.color = "white";
            }

            //расстановка фигур
            if ((i == 1) || (i == 6)) {
                cell.innerHTML = figurs.pawn;
            } else if ((i == 0) || (i == 7)) {
                if ((j == 0) || (j == 7)) {
                    cell.innerHTML = figurs.rook;
                } else if ((j == 1) || (j == 6)) {
                    cell.innerHTML = figurs.knight;
                } else if ((j == 2) || (j == 5)) {
                    cell.innerHTML = figurs.bishop;
                } else if (((i == 0) && (j == 3)) || ((i == 7) && (j == 4))) {
                    cell.innerHTML = figurs.queen;
                } else if (((i == 0) && (j == 4)) || ((i == 7) && (j == 3))) {
                    cell.innerHTML = figurs.king;
                }
            }
            let cellId = 8 * i + (j + 1); //+1 для человеческой нумерации с 1
            cell.id = `cell${cellId}`;
            row.appendChild(cell);
        }
        field.appendChild(row);
    }

}

function arrowOnClick(isLeft, colors, visibleColorsStart, visibleColorsCount) {
    if (((visibleColorsStart < 1) && isLeft) || ((visibleColorsStart >= colors.length - visibleColorsCount) && !isLeft)) {
        return visibleColorsStart;
    }
    for (let i = visibleColorsStart; i < visibleColorsStart + visibleColorsCount; i++) { //выкл старый набор
        let index = i;
        index = (index >= colors.length) ? index - colors.length : index;
        document.getElementById(`color${index}`).style.display = "none";
    }

    visibleColorsStart = isLeft ? visibleColorsStart - 1 : visibleColorsStart + 1;
    for (let i = visibleColorsStart; i < visibleColorsStart + visibleColorsCount; i++) { //вкл новый набор
        let index = i;
        if (index >= colors.length) {
            index = index - colors.length
        }
        document.getElementById(`color${index}`).style.display = "block";
    }
    //"отключение" стрелок на краях
    if (visibleColorsStart==0) {
        document.getElementsByClassName("carousel-arrow-left")[0].style.opacity="0.1";
    } else {
        document.getElementsByClassName("carousel-arrow-left")[0].style.opacity="1";
    }
    if (visibleColorsStart==colors.length-visibleColorsCount) {
        document.getElementsByClassName("carousel-arrow-right")[0].style.opacity="0.1";
    } else {
        document.getElementsByClassName("carousel-arrow-right")[0].style.opacity="1";
    }
    return visibleColorsStart;
}

function createCarousel(colors = ["red", "orange", "yellow", "green", "lightblue", "blue", "violet", "white", "grey", "black"]) {
    let colorFlag = true;
    let visibleColorsCount = 3;
    let visibleColorsStart = 0;
    let carousel = document.getElementById("carousel");
    let choosen = document.createElement("div");
    choosen.className = "carousel-choosen";
    let cell1 = document.createElement("div");
    cell1.style.backgroundColor = `black`;
    cell1.className = "cell cell-color1-example";
    cell1.id = "cell-color1-example";
    choosen.appendChild(cell1);
    let cell2 = document.createElement("div");
    cell2.style.backgroundColor = `white`;
    cell2.className = "cell cell-color2-example";
    cell2.id = "cell-color2-example";
    choosen.appendChild(cell2);
    let cell3 = cell1.cloneNode();
    let cell4 = cell2.cloneNode();
    choosen.appendChild(cell4);
    choosen.appendChild(cell3);
    choosen.onclick = function () {
        let chessCells1 = document.getElementsByClassName("cell-color1");
        let chessCells2 = document.getElementsByClassName("cell-color2");
        for (let i = 0; i < chessCells1.length; i++) {
            chessCells1[i].style.backgroundColor = document.getElementsByClassName("cell-color1-example")[0].style.backgroundColor;
            chessCells2[i].style.backgroundColor = document.getElementsByClassName("cell-color2-example")[0].style.backgroundColor;

            highlightFigure(chessCells1[i]);
            highlightFigure(chessCells2[i]);

        }
    }
    carousel.appendChild(choosen);
    let listWrp = document.createElement("div");
    listWrp.className = "carousel-list-wrp";
    let arrowLeft = document.createElement("div");
    arrowLeft.className = "carousel-arrow carousel-arrow-left";
    arrowLeft.style.opacity="0.1";
    arrowLeft.onclick = function () {
        visibleColorsStart = arrowOnClick(true, colors, visibleColorsStart, visibleColorsCount);
    }
    listWrp.appendChild(arrowLeft);
    let itemsList = document.createElement("ul");
    itemsList.className = "carousel-colors-list";

    for (let i = 0; i < colors.length; i++) {
        let item = document.createElement("li");
        item.className = "carousel-colors-list-item";
        item.id = `color${i}`;
        item.style = `background-color : ${colors[i]}; display:none`;
        item.onclick = function () {
            choosen.style = `background-color : ${colors[i]}`;
            let cells = {};
            if (colorFlag) {
                cells = document.getElementsByClassName("cell-color1-example");
            } else {
                cells = document.getElementsByClassName("cell-color2-example");
            }
            colorFlag = !colorFlag;
            for (let j = 0; j < cells.length; j++) {
                cells[j].style.backgroundColor = `${colors[i]}`;
            }
        }
        itemsList.appendChild(item);
    }
    listWrp.appendChild(itemsList);
    let arrowRight = document.createElement("div");
    arrowRight.className = "carousel-arrow carousel-arrow-right";
    arrowRight.onclick = function () {
        visibleColorsStart = arrowOnClick(false, colors, visibleColorsStart, visibleColorsCount);
    }
    listWrp.appendChild(arrowRight);
    carousel.appendChild(listWrp);
    for (let i = 0; i < visibleColorsCount; i++) {
        document.getElementById(`color${i}`).style.display = "block";
    }
}

function preparePage() {
    createCarousel();
    generateField("green", "yellow");
}

window.onload = preparePage;
