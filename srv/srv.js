// "/catalog" возвращает весь каталог
// "/cart/user" возвращает корзину пользователя
// "/add/user/art" добавит товар в корзину



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
function sendCatalog(path) {
    fs.promises.readFile(path, 'utf8')
        .then(result => {
            //console.log(result)
            server.get('/catalog', (req, res) => {
                res.send(result);
            });
        })
        .catch(error => console.log(error));
}
// "/cart/user" возвращает корзину пользователя
function sendCart(path) {
    fs.promises.readFile(path, 'utf8', "w")
        .then(result => {
            //console.log(result)
            server.get('/cart/:user', (req, res) => {
                let cart = JSON.parse(result);
                res.send(JSON.stringify(cart[req.params.user]));
            });
        })
        .catch(error => console.log(error));
}
// "/add/user/art" добавит товар в корзину
function addToCart(path) { //, user, art){
    fs.promises.readFile(path, 'utf8', 'w+')
        .then(result => {
            //console.log(result);
            let cart = JSON.parse(result);
            // console.log(cart["u123"]);
            server.get('/add/:user/:art', (req, res) => {
                //let cart=JSON.parse(result);

                if (cart[req.params.user][req.params.art]) {
                    cart[req.params.user][req.params.art]++
                } else {
                    cart[req.params.user][req.params.art] = 1
                };
                //console.log(cart[req.params.user]);
                

                console.log(cart);
                fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
                    .then(wrResult => {
                        //console.log("done" + wrResult);
                        res.send("DONE");
                        fs.promises.appendFile(logPath, `{"add": {"user": "${req.params.user}", "art": "${req.params.art}", "time": "${Date()}"}}, `, 'utf8')
                    })
                    .catch(wrError => {console.log(wrError)
                        res.send("DENY");
                    });
            });
        })
        .catch(error => console.log(error));
}
// "/delete/user/art" добавитудалит товар из корзины
function deleteFromCart(path) { //, user, art, count) {
    fs.promises.readFile(path, 'utf8', 'w+')
        .then(result => {
                //console.log(result);
                let cart = JSON.parse(result);
                // console.log(cart["u123"]);
                //console.log(cart[user])
                server.get('/delete/:user/:art', (req, res) => {
                    if (cart[req.params.user][req.params.art]) {
                        cart[req.params.user][req.params.art]--;
                        
                        if (cart[req.params.user][req.params.art] == 0) {
                            delete(cart[req.params.user][req.params.art]);
                           
                        } 
                        
                        console.log(cart);
                        fs.promises.writeFile(path, JSON.stringify(cart), "utf8")
                            .then(wrResult => {
                                console.log("done" + wrResult)
                                res.send("DONE");  
                            })
                            .catch(wrError => {
                                console.log(wrError);
                            });
                        fs.promises.appendFile(logPath, `{"delete": {"user": "${req.params.user}", "art": "${req.params.art}", "time": "${Date()}"}}, `, 'utf8')
                    } else {
                        res.send("DENY"); 
                    }
                })
            })

            .catch(error => console.log(error));
        }
    

    sendCatalog(pathGoods);
    sendCart(pathCart);
    addToCart(pathCart); //,"u123","art5");
    deleteFromCart(pathCart); //,"u123","art6")