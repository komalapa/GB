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
    let curSimbol='';
    let output='';
    let regexpNmb = /^(\d+)/;
    let regexpLtr = /^[a-zA-Z]/;
    while(code){
        if (regexpLtr.test(code)){
            curSimbol=code[0]
            output=output+code[0];
            code=code.slice(1);
        } else{
            for(let j=1; j<code.match(regexpNmb)[0]; j++){
                output=output+curSimbol; 
            }
            while (regexpNmb.test(code)){
                code=code.slice(1);
            }
        }       
    }
    return output;    
}

let input="AAAAAAAAAAAABAAAAAAAAAAAABBBAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAA";
//input="rrrtttyyyrr";
console.log(input+" >>RLE>> "+rle(input));

console.log(unrle(rle(input))+" - unRLE");

