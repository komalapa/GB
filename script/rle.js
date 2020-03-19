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
            if (counter>1){
                code = code + counter+ raw[i];
            } else {
                code = code + raw[i];
            }
            counter = 1;
            curSimbol = raw[i];
        }
    }
    if (counter>1){
        code = code + counter;
    }
    return code;
}
function unrle(code){

}

let input="AAAAAAAAAAAABAAAAAAAAAAAABBBAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAA";
input="rrrtttyyyr";
console.log(input+" >>RLE>> "+rle(input));