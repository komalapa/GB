"use strict"
//1
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

//2
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
//3
console.log("------ 3 ------");

//"долг" простые числа
console.log("---------- простые ----------");
function simple(maxNmb=100){
    if (isNaN(maxNmb)||maxNmb<0||maxNmb>1000){
        return null;
    }
    let i=2; 
    let simpleNmbs=[];
    let simpleFlag=true;
    while (i<=maxNmb){
        simpleFlag=true;
        for (let j=0; simpleNmbs[j]<=(i/2); j++){
            //проверка перенесена в for вместо j<simpleNmbs.length
            //if (simpleNmbs[j]<=(i/2)){
                if (i%simpleNmbs[j]==0){
                    simpleFlag=false;
                    break;
                }            
            //}
        }
        if (simpleFlag){
            simpleNmbs.push(i++);
        } else {
            i++;
        }
    }
    return simpleNmbs;
}
console.log(simple());
console.log("эталон: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.");
console.log(91%7);