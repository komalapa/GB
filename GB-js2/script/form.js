function verifyName(mode){
    let id='';
    let rExp='';
    //console.log("Param=",mode)
    switch (mode){
        case "name":
            id='name';
            rExp=/^[a-zA-ZА-Яа-я]+$/;
            break;
        case "phone":
            id='phone';
            rExp=/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/;
            break;
        case "email":
            id='email';
            rExp=/^[a-zA-Z0-9\._\-]{2,255}\@([a-zA-Z0-9\-]{2,63}\.){1,127}[a-zA-Z]{2,63}$/ //не понимаю как проверить общую длинну доменного имени. максимально 127 поддоменов по 63 символа, но не больше 255 символов в сумме
            break;
        }
    let element= document.getElementById(id);
    let val=element.value;
    //let rExp=/^[a-zA-ZА-Яа-я]+$/;
    //console.log(val)
    let verFlag=false;
    if (rExp.test(val)){
        //console.log('true');
        verFlag=true;
        element.classList.remove("red-border")
    } else {
        verFlag=false
        //console.log('false');
        element.classList.add("red-border")
       // alert ('Ошибка заполнения поля!')   
    }
    return verFlag;
}
function verifier(event){
    //console.log(event)
    event.preventDefault();
    verifyName("name");
    verifyName("phone");
    verifyName("email");
    if (verifyName("name")&&verifyName("phone")&&verifyName("email")){
        alert("Готово!")
    } else {
        alert("В форме есть ошибки.\nПроверьте, пожалуйста")    
    }
    
}