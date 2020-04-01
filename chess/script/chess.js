function generateField(color1 = "white", color2 = "black") {
    const figurs = {
        black: {
            king: '&#9818',
            rook: '&#9820',
            bishop: '&#9821',
            queen: '&#9819',
            knight: '&#9822',
            pawn: '&#9823',
      
        },
        white: {
            king: '&#9812',
            rook: '&#9814',
            bishop: '&#9815',
            queen: '&#9813',
            knight: '&#9816',
            pawn: '&#9817',
        }
      };
      
    //добавляет 8 div - строк в каждом 8 div клеток
    let field = document.getElementById("chess");
    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement("div");
            cell.onclick= function(){
                if (cell.classList.contains("cell-marked")){
                    cell.classList.remove("cell-marked");
                } else {
                    cell.classList.add("cell-marked");
                }
            };
            if (i % 2 == j % 2) {
                cell.style.backgroundColor = `${color1}`;
                cell.style.color="black";
                cell.className = "cell cell-color1";
                cell.innerHTML = figurs.black.queen;
                } else {
                cell.style.backgroundColor = `${color2}`;
                cell.style.color="white";
                cell.className = "cell cell-color2";
                cell.innerHTML = figurs.white.king;
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
        index = (index>= colors.length) ? index - colors.length : index;
        document.getElementById(`color${index}`).style.display="none";
    }

    visibleColorsStart = isLeft ? visibleColorsStart-1 : visibleColorsStart+1;
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
    let cell1 = document.createElement("div");
    cell1.style.backgroundColor = `black`;
    cell1.className = "cell cell-color1-example";
    cell1.id="cell-color1-example";
    choosen.appendChild(cell1);
    let cell2 = document.createElement("div");
    cell2.style.backgroundColor = `white`;
    cell2.className = "cell cell-color2-example";
    cell2.id="cell-color2-example";
    choosen.appendChild(cell2);
    let cell3 = cell1.cloneNode();
    let cell4 = cell2.cloneNode();
    choosen.appendChild(cell4);
    choosen.appendChild(cell3);
    choosen.onclick=function(){
        let chessCells1=document.getElementsByClassName("cell-color1");
        let chessCells2=document.getElementsByClassName("cell-color2");
        for (let i=0; i<chessCells1.length;i++){
            chessCells1[i].style.backgroundColor=document.getElementsByClassName("cell-color1-example")[0].style.backgroundColor;
            chessCells2[i].style.backgroundColor=document.getElementsByClassName("cell-color2-example")[0].style.backgroundColor;
            if (chessCells1[i].style.color == chessCells1[i].style.backgroundColor) {
                if (chessCells1[i].style.color=="white"){ 
                    chessCells1[i].style.color="wheat"; 
                } else if (chessCells1[i].style.color=="black") { 
                    chessCells1[i].style.color="blue";
                }
            } else {
                if ((chessCells1[i].style.color=="wheat")&&(chessCells1[i].style.backgroundColor!="white")){ 
                    chessCells1[i].style.color="white";
                } else if ((chessCells1[i].style.color=="blue")&&(chessCells1[i].style.backgroundColor!="black"))  { chessCells1[i].style.color="black";
                }
            }
            if (chessCells2[i].style.color == chessCells2[i].style.backgroundColor) {
                if (chessCells2[i].style.color=="white"){ chessCells2[i].style.color="wheat";}
                else if (chessCells2[i].style.color=="black") { chessCells2[i].style.color="blue";}
            } else {
                if ((chessCells2[i].style.color=="wheat")&&(chessCells2[i].style.backgroundColor!="white")){ chessCells2[i].style.color="white";}
                else if ((chessCells2[i].style.color=="blue")&&(chessCells2[i].style.backgroundColor!="black"))  { chessCells2[i].style.color="black";}
            }
        }
    }
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
                cells=document.getElementsByClassName("cell-color1-example");
            } else {
                cells=document.getElementsByClassName("cell-color2-example");
            }
            colorFlag=!colorFlag;
            for (let j=0; j<cells.length; j++){
                cells[j].style.backgroundColor=`${colors[i]}`;
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
