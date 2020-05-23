// "/catalog" возвращает весь каталог
// "/cart/user" возвращает корзину пользователя
// "/add/user/art" добавит товар в корзину
// "/delete/user/art" удалит товар из корзины



const fs = require('fs');
const express = require('express');
const server = express();
var cors = require('cors');

server.use(cors());


server.listen(3000, () => {
    console.log('server is running on port 3000!');
});



const pathGoods = "goods.json"
const pathCart = "cart.json"
const logPath = "stats.json"

console.log("START");

// "/catalog" возвращает весь каталог
async function sendCatalog(path) {
    let prms = new Promise((resolve, reject) => {
        fs.promises.readFile(path, 'utf8')
            .then(result => {
                //    console.log(result)   
                resolve(result);
            })
            .catch(error => {
                console.log(error);
                reject = error
            });
    })
    return prms;
}


// "/cart/user" возвращает корзину пользователя
async function sendCart(pthCart, pthGoods, user) {
    let cartList=[]
    let prms = new Promise((resolve, reject) => { 
        fs.promises.readFile(pthCart, 'utf8')
        .then(resultCart => {
            //console.log(result)
                let cart = JSON.parse(resultCart)[user];
                fs.promises.readFile(pthGoods, 'utf8')
                    .then(resultGoods => {
                        //console.log(result)
                        let goods = JSON.parse(resultGoods);
                        //cart.keys().foreach(key => console.log(key+" -> "+cart[key]))
                        // for(element in cart) {
                        //     console.log(element.getKey())
                        // };
                        
                        for (var key in cart) {
                           // console.log(key);
                           // console.log(cart[key]);
                            goods.forEach(good=>{
                                if (good.art==key){
                                    good.count=cart[key]
                                    cartList.push(good)
                                }
                            })
                            console.log(cartList)
                          }
                          resolve(JSON.stringify(cartList));  
                    })
                .catch(error => {
                    console.log(error);
                    reject("");
                })
                
                
                
                  
        })
        .catch(error => {
            console.log(error);
            reject("")            
        })
    })
    return prms;
}
// "/add/user/art" добавит товар в корзину
async function addToCart(path, user, art) {
    let prms = new Promise((resolve, reject) => {
        fs.promises.readFile(path, 'utf8', 'w+')
            .then(result => {
                //console.log(result);
                let cart = JSON.parse(result);
                // console.log(cart["u123"]);
                if (cart[user][art]) {
                    cart[user][art]++
                } else {
                    cart[user][art] = 1
                };
                //console.log(cart[req.params.user]);


                //console.log(cart);
                fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
                    .then(wrResult => {
                        //console.log("done" + wrResult);
                        resolve("DONE")
                        fs.promises.appendFile(logPath, `{"add": {"user": "${user}", "art": "${art}", "time": "${Date()}"}}, `, 'utf8')
                    })
                    .catch(wrError => {
                        console.log(wrError)
                        reject("DENY");
                    });
            });
    })
    return prms;

}
// "/delete/user/art" удалит товар из корзины
function deleteFromCart(path, user, art, count) {
    let prms = new Promise((resolve, reject) => fs.promises.readFile(path, 'utf8', 'w+')
        .then(result => {
            //console.log(result);
            let cart = JSON.parse(result);
            //console.log(cart["u123"]);
            //console.log(cart[user])
            if (cart[user][art]) {
                cart[user][art]--;
//                console.log("DELETE " + cart[user][art])
                if (cart[user][art] == 0) {
                    delete(cart[user][art]);
                }

                //console.log(JSON.stringify.cart);
                fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
                    .then(wrResult => {
                        console.log("done" + wrResult)
                        resolve("DONE");
                    })
                    .catch(wrError => {
                        console.log(wrError);
                    });
                fs.promises.appendFile(logPath, `{"delete": {"user": "${user}", "art": "${art}", "time": "${Date()}"}}, `, 'utf8')
            } else {
                reject("DENY");
            }
        
    }))
    return prms;
}

server.get('/catalog', (req, res) => {
    sendCatalog(pathGoods).then(data => res.send(data))

});
server.get('/add/:user/:art', (req, res) => {
    addToCart(pathCart, req.params.user, req.params.art).then(data => res.send(data)).catch(data => res.send(data))
});
server.get('/delete/:user/:art', (req, res) => {
    deleteFromCart(pathCart, req.params.user, req.params.art).then(data => res.send(data)).catch(data => res.send(data))
});
server.get('/cart/:user', (req, res) => {
    sendCart(pathCart, pathGoods, req.params.user ).then(data => res.send(data)).catch(data => res.send(data))

});