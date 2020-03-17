"use strict";
function tempConverter(){
    let tempC=prompt("Введите температуру по Цельсию:");
    if (isNaN(tempC)){
        alert("Недопустимое значение")
    } else {
        let tempF=(9 / 5) * tempC + 32;
        alert("Температура по Фаренгейту:"+tempF);
    }
}
function rename(){
    let name='';
    let admin='';
    name='Василий';
    admin=name;
    alert("admin:" + admin);
}
function sum(){
    alert ("Чему будет равно JS-выражение 1000 + \"108\"? " +(1000 + "108")+ " ("+typeof(1000 + "108") +")")
}
tempConverter();
rename();
sum();
