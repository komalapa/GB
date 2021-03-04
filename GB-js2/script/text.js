const testText = `"Am I busy?" exclaimed Arthur. "Well, I've just got all these 
bulldozers and things to lie in front of because they'll knock my house 
down if I don't, but other than that... well, no not especially, why?" 

They don't have sarcasm on Betelgeuse, and Ford Prefect often 
failed to notice it unless he was concentrating. He said, "Good, is 
there anywhere we can talk?" 
`;
// Подготовка текста т.к. с одинарными кавычками в прямой речи и апострофами одновременно быстро не нашла
function removeDoubleQuotes(str){
    let rExp=/"/mg;
    //console.log(str.match(rExp));   
    str=str.replace(rExp, "'"); 
    //console.log(str); 
    return str;
}

let formatedTestText=removeDoubleQuotes(testText);

function makeAllQuotsDouble(str){
    let rExp=/'/mg;
    str=str.replace(rExp, '"'); 
    //console.log(str); 
    return str;
}
console.log('1) Замена всех кавычек')
console.log(makeAllQuotsDouble(formatedTestText))

function makeOnlyQuotsDouble(str){
    //Вариант требует двух запусков замены
    //let rExpLeft=/\w'\s/mg; 
    //let rExpRight=/\s'\w/mg;
    //str=str.replace(rExpLeft, '" ');
    //str=str.replace(rExpRight, ' "');
     
    //console.log(str);
    
    //Вариант с одним запуском замены
    let rExpAllTemplate=/('(?=\s))|((?<=\s)')|('(?=$))|((?<=^)')/mg //Валидатор https://regexr.com/ предупреждает, что сработает не во всех браузерах. Использую подзитивный просмотр назад и вперед. Ищу пробел хотя бы с одной стороны или границу строки.
    //console.log(str.match(rExpAllTemplate));
    str=str.replace(rExpAllTemplate, '"' )
    return str;
}
console.log('2) Замена только кавычек прямой речи')
console.log(makeOnlyQuotsDouble(formatedTestText))

