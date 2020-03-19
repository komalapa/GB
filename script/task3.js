"use strict"

//1
console.log("---------- 1 ----------");
function simple(){
    let i=1; 
    let simpleFlag=true;
    while (i<=100){
        simpleFlag=true;
        for (let j=2; j<i/2;j++){
            if (i%j==0){
                simpleFlag=false
                break;
            }
        }
        if (simpleFlag){
            console.log(i++);
        }
        i++;
    }
}
simple();

//2-3
console.log("---------- 2-3 ----------");
function countBasketPrice(basket){
    return basket.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
}
let basket=[11, 13, 15, 3];
console.log("total price: "+countBasketPrice(basket))


//4
console.log("---------- 4 ----------");
for(let i=0;i<10;console.log(i++)){

}
//5
console.log("---------- 5 ----------");
function piramid(n){
    let level='';
    for (let i=1; i<=n; i++){
        level=level+'x';
        console.log(level);
    }
}
piramid(20);