"use strict"
console.log("------ 1 ------");
function convertToObJ(nmb){
    let outputObj = {};
    if (!(isNaN(nmb) || (nmb<0) || (nmb>999))){
        outputObj.units = nmb%10;
        outputObj.tens = (nmb-outputObj.units)%100/10;
        outputObj.hundreds = (nmb - outputObj.units -outputObj.tens*10)/100;
    }
    return outputObj;
}

console.log("convert 345: ", convertToObJ(345));
console.log("convert 1345: ", convertToObJ(1345));
console.log("convert \"тысяча\": ", convertToObJ("тысяча"));

console.log("------ 2 ------");
function showFruct(){
    console.log (`color: ${this.color}
    form: ${this.form}`)
}
function newFruct(name,color,form,isTasty){
    let outputObj={
        name,
        color,
        form,
        isTasty,
    }
    outputObj.show=showFruct;
    return outputObj;
};
let apple = newFruct('apple','green','sphere', true);
apple.show();

console.log("------ 3 ------");


