"use strict";
console.log("=========Bulls&Cows======");

function getAnswer(){
    let answer=prompt('Ваша попытка (четырехзначное число) :')
    let regexp = /^([0-9]){4}$/;
    if (answer=='exit'){
        return 'exit';
    }
    if ((regexp.test(answer))&&(answer[0]!=answer[1])&&(answer[0]!=answer[2])&&(answer[0]!=answer[3])&&(answer[1]!=answer[2])&&(answer[1]!=answer[3])&&(answer[2]!=answer[3])){
        console.log(answer+ ' - ответ принят');
        return answer;
    } else {
        console.log(answer+ ' - нужно ввести только 4х-значное число различными цифрами! (для выхода "exit")');
        alert(answer+ ' - нужно ввести только 4х-значное число различными цифрами! (для выхода "exit")');
        return null;
    }
}
//пока делаю без нулей в начале
function genNumber(min=1000,max=9999){
    let number = min - 0.5 + Math.random() * (max - min + 1);
    number=Math.round(number).toString();
    if ((number[0]!=number[1])&&(number[0]!=number[2])&&(number[0]!=number[3])&&(number[1]!=number[2])&&(number[1]!=number[3])&&(number[2]!=number[3])){
        return number;
    } else { 
        console.log('regen');
        number=genNumber(min,max);
    }
    return number;
  
}

function compareStrings(number, answer){
    let result= { 'bulls': 0, 'cows':0};
    if (number&&answer){
        for(let i=0; i<4;i++){
            for(let j=0; j<4;j++){
                if (number[i]==answer[j]){
                    if (i==j){
                       result['bulls']++;
                       //console.log('bull: '+number[i]+' counter '+result['bulls']);
                    }else{
                        result['cows']++;
                        //console.log('cow: '+number[i]);
                    }
                }
            }
        }
    }
    return result;
}
function game(){
    let bulls=0;
    let guess;
    let compareResult={ 'bulls': 0, 'cows':0};
    let counter=0;
    const pattern=genNumber();
    //console.log('patt: '+pattern);
    while (bulls<4){
        guess = getAnswer();
        if (guess=='exit'){
            console.log('It was '+ pattern+ ' EXIT');
            alert('It was '+ pattern+ ' EXIT');
            break;
        }
        counter++;
        compareResult=compareStrings(pattern, guess);
        console.log(compareResult);
        bulls=compareResult['bulls'];
        console.log('bulls: '+compareResult['bulls']+'; cows: '+compareResult['cows']);
        alert('bulls: '+compareResult['bulls']+'; cows: '+compareResult['cows']);
    }
    if (bulls==4){
        console.log('win. tryes: '+counter);
        alert('WIN! tryes: '+counter);
    }

}
game();

