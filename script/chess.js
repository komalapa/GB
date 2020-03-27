function generateField(color1="white",color2="black"){
    //добавляет 8 div - строк в каждом 8 div клеток
    let field = document.getElementById("chess-field");
    console.log(field);
    for (let i=0;i<8;i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j=0;j<8;j++){
            let cell = document.createElement("div");
            cell.className="cell";
            if (i%2==0){
                if (j%2==0){
                    cell.style=`background-color : ${color1}`;
                } else {
                    cell.style=`background-color : ${color2}`; 
                }
            } else {
                if (j%2==0){
                    cell.style=`background-color : ${color2}`;
                } else {
                    cell.style=`background-color : ${color1}`; 
                }
            }
            row.appendChild(cell);    
        }
        field.appendChild(row);
    }

}
function initChess(){
    alert("hello");
    
}

window.onload = function() {
    generateField();
}