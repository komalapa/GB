"use strict"
//1
console.log("------ 1 ------");

function convertToObJ(nmb) {
    let outputObj = {};
    if (!(isNaN(nmb) || (nmb < 0) || (nmb > 999))) {
        outputObj.units = nmb % 10;
        outputObj.tens = (nmb - outputObj.units) % 100 / 10;
        outputObj.hundreds = (nmb - outputObj.units - outputObj.tens * 10) / 100;
    }
    return outputObj;
}

console.log("convert 345: ", convertToObJ(345));
console.log("convert 1345: ", convertToObJ(1345));
console.log("convert \"тысяча\": ", convertToObJ("тысяча"));

//2
console.log("------ 2 ------");

function showFruct() {
    console.log(`color: ${this.color}
    form: ${this.form}`)
}

function Fruct(name, color, form, isTasty) {
    this.name = name,
        this.color = color,
        this.form = form,
        this.isTasty = isTasty,
        this.show = showFruct
}
let apple = new Fruct('apple', 'green', 'sphere', true);
apple.show();

//3 - пока не поняла задание как здесь применить рекурсию
console.log("------ 3 ------");

function comparison(a, b) {
    let result = false;
    if (a === b) {

        result = true;
    }
    //if (Array.isArray(a)&&Array.isArray(b)) {
    //    if (a.length==b.length){    
    //        result=true;
    //        for (let i=0; i<a.length;i++){
    //            if (!comparison(a[i],b[i])) result = false;
    //        }
    //    }
    //}
    //сравнение массивов и объектов одинаково
    if (typeof (a) == "object" && typeof (b) == "object") {
        result = true;
        //console.log("OBJECT")
        for (let i in a) {
            if (!comparison(a[i], b[i])) result = false;
        }
        for (let i in b) {
            if (!comparison(a[i], b[i])) result = false;
        }
    }
    return result
}

console.log("comparison(1,2) = "+comparison(1,2));
console.log("comparison([1,2],[1,2]) = "+comparison([1,2],[1,2]));
console.log("comparison([1,2,3],[1,2]) = "+comparison([1,2,3],[1,2]));
console.log("comparison({'q':'w','s':'d','h':'t'},{'q':'w','s':'d'}) = "+comparison({'q':'w','s':'d','h':'t'},{'q':'w','s':'d'}));
console.log("comparison({'q':'w','s':'d'},{'q':'w','s':'d'}) = "+comparison({'q':'w','s':'d'},{'q':'w','s':'d'}));

//"долг" простые числа
console.log("---------- простые ----------");

function simple(maxNmb = 100) {
    if (isNaN(maxNmb) || maxNmb < 0 || maxNmb > 1000) {
        return null;
    }
    let i = 2;
    let simpleNmbs = [];
    let simpleFlag = true;
    while (i <= maxNmb) {
        simpleFlag = true;
        for (let j = 0; simpleNmbs[j] <= (i / 2); j++) {
            //проверка перенесена в for вместо j<simpleNmbs.length
            //if (simpleNmbs[j]<=(i/2)){
            if (i % simpleNmbs[j] == 0) {
                simpleFlag = false;
                break;
            }
            //}
        }
        if (simpleFlag) {
            simpleNmbs.push(i++);
        } else {
            i++;
        }
    }
    return simpleNmbs;
}
console.log(simple());
console.log("эталон: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.");
console.log(91 % 7);