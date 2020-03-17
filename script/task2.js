"use strict";

/*
//1

var a = 1, b = 1, c, d;      //присвоили значения
c = ++a; alert(c);           // 2 c=a+1=1+1=2  (a=2) прибавили, потом присвоили
d = b++; alert(d);           // 1 d=b=1  (b=2) сначала присвоили, потом прибавили
c = (2+ ++a); alert(c);      // 5 c= 2+(1+2)=5 (a=3) 
d = (2+ b++); alert(d);      // 4 d= 2+(2)=4 (b=3)
alert(a);                    // 3
alert(b);                    // 3

//2

var a = 2;
var x = 1 + (a *= 2); //x=1+(2*2)=5 , a=4

*/

//3

function compare(a,b){
    if ((a>=0)&&(b>=0)){
        return (a-b)
    } else if ((a<0)&&(b<0)){
        return (a*b)
    } else {
        return (a+b)
    }
}

console.log ("№3 сравнение: " + (compare (-1,-2)));

//4

function counter(a){
    switch(a){
        case 0:
            console.log ("0");
        case 1:
            console.log ("1");
        case 2:
            console.log ("2")
        case 3:
            console.log ("3");
        case 4:
            console.log ("4");
        case 5:
            console.log ("5");
        case 6:
            console.log ("6");
        case 7:
            console.log ("7")
        case 8:
            console.log ("8");
        case 9:
            console.log ("9");
        case 10:
            console.log ("10");
        case 11:
            console.log ("11");
        case 12:
            console.log ("12");
        case 13:
            console.log ("13")
        case 14:
            console.log ("14");
        case 15:
            console.log ("15");          
    }
}
console.log ("№4 счет от а: ");    
    counter(7);

//5

function sum(a,b){
    return (a+b);
}
function mult(a,b){
    return (a*b);
}
function sub(a,b){
    return (a-b);
}
function div(a,b){
    return (a/b);
}
console.log ("№5 функции счета: ");   
console.log("3+5="+sum(3,5));
console.log("3-5="+sub(3,5));
console.log("3*5="+mult(3,5));
console.log("3/5="+div(3,5));

//6
function calc(a,b,operation){
    switch (operation){
        case "sum":
            return sum(a,b);
        case "sub":
            return sub(a,b);
        case "mult":
            return mult(a,b);
        case "div":
            return div(a,b);
        default:
            console.log ("not realized");
            return null;
    }
}
console.log ("№6 калькулятор: calc(5,6,\"sub\") = " + calc(5,6,"sub"));  

//7 
//null и 0 не равны. Для null и undefined приведение типов не выполняется, они равны только друг другу. Оба значения используются как "нет значения", а 0 - это просто число.

//8
function power (val, pow){
    if (pow>1){
        return (val*power(val,(pow-1)))
    }else if (pow == 0){
        return 1;
    } else if (pow == 1){
        return val
    } else if (pow<0){
        return (1/(val*power(val,(((-1)*pow)-1)))) ;
    }
}
console.log ("№8 степень: power(2,3) = " + power(2,3));
console.log ("№8 степень: power(2,-3) = " + power(2,-3));
console.log ("№8 степень: power(2,0) = " + power(2,0));
console.log ("№8 степень: power(2,1) = " + power(2,1));

//9 к false приводятся: undefined, null, числа 0 и NaN,  пустая строка, других вариантов не нашла

//10 к числу
