function generateField(color1 = "white", color2 = "black") {
    //добавляет 8 div - строк в каждом 8 div клеток
    let field = document.getElementById("chess");
    //console.log(field);
    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement("div");
            //cell.className = "cell";
            if (i % 2 == j % 2) {
                cell.style = `background-color : ${color1}`;
                cell.className = "cell cell-color1";
            } else {
                cell.style = `background-color : ${color2}`;
                cell.className = "cell cell-color2";
            }

            row.appendChild(cell);
        }
        field.appendChild(row);
    }

}

function arrowOnClick(isLeft,colors,visibleColorsStart,visibleColorsCount){
    if (((visibleColorsStart<1)&&isLeft)||((visibleColorsStart>=colors.length-visibleColorsCount)&&!isLeft)) {
        return visibleColorsStart;
    }
    for (let i=visibleColorsStart;i<visibleColorsStart+visibleColorsCount;i++){//выкл старый набор
        let index=i;
        if (index>= colors.length){
            index = index - colors.length
        }
        document.getElementById(`color${index}`).style.display="none";
    }
    if (isLeft){
        visibleColorsStart--;
    } else {
        visibleColorsStart++;
    }
    //console.log("start"+visibleColorsStart);
    for (let i=visibleColorsStart;i<visibleColorsStart+visibleColorsCount;i++){//вкл новый набор
        let index=i;
        if (index>= colors.length){
            index = index - colors.length
        }
        document.getElementById(`color${index}`).style.display="block";
    }
    return visibleColorsStart;
}

function createCarousel(colors = ["red", "orange", "yellow", "green", "lightblue", "blue", "violet", "white", "grey", "black"]) {
    let colorFlag=true;
    let visibleColorsCount=3;
    let visibleColorsStart=0;
    let carousel = document.getElementById("carousel");
    let choosen = document.createElement("div");
    choosen.className = "carousel-choosen";
    carousel.appendChild(choosen);
    let listWrp = document.createElement("div");
    listWrp.className = "carousel-list-wrp";
    let arrowLeft = document.createElement("div");
    arrowLeft.className = "carousel-arrow carousel-arrow-left";
    arrowLeft.onclick= function () {
        visibleColorsStart = arrowOnClick(true,colors,visibleColorsStart,visibleColorsCount);
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
            let cells={};
            if (colorFlag) {
                cells=document.getElementsByClassName("cell-color1");
            } else {
                cells=document.getElementsByClassName("cell-color2");
            }
            colorFlag=!colorFlag;
            for (let j=0; j<cells.length; j++){
                cells[j].style=`background-color : ${colors[i]}`;
            }
        }
        itemsList.appendChild(item);
    }
    listWrp.appendChild(itemsList);
    let arrowRight = document.createElement("div");
    arrowRight.className = "carousel-arrow carousel-arrow-right";
    arrowRight.onclick= function () {
        visibleColorsStart = arrowOnClick(false,colors,visibleColorsStart,visibleColorsCount);
    }
    listWrp.appendChild(arrowRight);
    carousel.appendChild(listWrp);
    for (let i=0; i<visibleColorsCount;i++){
        document.getElementById(`color${i}`).style.display="block";
    }
}

function preparePage(){
    createCarousel();
    generateField("green", "yellow");
}

window.onload = preparePage;
