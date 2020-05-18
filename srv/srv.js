const fs = require('fs');

const pathGoods="goods.json"
const pathCart="cart.json"

console.log("START");

function sendCatalog(path){
    fs.promises.readFile(path, 'utf8')
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error));
}
function sendCart(path){
    fs.promises.readFile(path, 'utf8',"w")
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error));
}
function addToCart(path, user, art){
    fs.promises.readFile(path, 'utf8','w+')
    .then(result => {
        //console.log(result);
        let cart=JSON.parse(result);
        // console.log(cart["u123"]);
        if (cart[user][art]) {
            cart[user][art]++
        } else {
            cart[user][art]=1
        };
        console.log(cart[user]);
          
        console.log(cart);
        fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
        .then(wrResult=>{console.log("done" + wrResult)})
        .catch(wrError=>console.log(wrError));
    })
    .catch(error => console.log(error)); 
}
function deleteFromCart(path, user, art,count){
    fs.promises.readFile(path, 'utf8','w+')
    .then(result => {
        console.log(result);
        let cart=JSON.parse(result);
        // console.log(cart["u123"]);
        console.log(cart[user])
        if (cart[user][art]){ 
            cart[user][art]--; 
            if (cart[user][art]==0){delete(cart[user][art])}       
            console.log(cart);
            fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
                .then(wrResult=>{console.log("done" + wrResult)})
            .catch(wrError=>console.log(wrError));
        }
    })

    .catch(error => console.log(error)); 
}
//sendCatalog(pathGoods);
//sendCart(pathCart);
//addToCart(pathCart,"u123","art5");
deleteFromCart(pathCart,"u123","art6")
