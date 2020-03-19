"use strict"
console.log("---------- RLE ----------")
function rle(raw){
    let curSimbol='';
    let code='';
    let counter=1;
    for (let i=0; i<raw.length; i++){
        if (raw[i]==curSimbol){
            counter++
        } else {
            code = code + counter+ raw[i];
            counter = 1;
            curSimbol = raw[i];
        }
    }
    return code.slice(1);//delete first "1"
}
function unrle(code){

}

let input="AAAAAAAAAAAABAAAAAAAAAAAABBBAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAA";
input="rrrtttyyyr";
console.log(rle(input));