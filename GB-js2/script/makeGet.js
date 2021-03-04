const url="https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const requestType={
    goodsList: "/catalogData.json", cart: "/getBasket.json", add: "/addToBasket.json", delete: "/deleteFromBasket.json"
}
async function makeGETRequest(url) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    const promice = new Promise ((resolve,reject) =>
        {
                console.log("ready")
                xhr.onreadystatechange = function () {
                    console.log ("ready state ", xhr.readyState)
                    if (xhr.readyState === 4)  {
                        if (xhr.status==200){ 
                            console.log("state200")
                            resolve(xhr.responseText);}
                        else {
                        console.log("state!200")
                        errorCB();
                        }
                    }
                }               
        }
    );
    console.log("open ",url)
                xhr.open('GET', url, true);
                console.log("send")
                xhr.send();
    
    return promice;

  }
function successCB(data){
    console.log( data);
}
function errorCB(data){
    console.log("Something wrong");
}

makeGETRequest(url+requestType["goodsList"]).then((data)=>successCB("goods list: "+data)).catch( ()=>errorCB())
makeGETRequest(url+requestType["cart"]).then((data)=>successCB("cart: "+data)).catch( ()=>errorCB())
makeGETRequest(url+requestType["add"]).then((data)=>successCB("add: "+data)).catch( ()=>errorCB())
makeGETRequest(url+requestType["delete"]).then((data)=>successCB("delete: "+data)).catch( ()=>errorCB())

// function testPromice(time){
//     let flag = false;
//     const promice = new Promise ((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("OK");
//             flag=true;
//             if (flag) {resolve("true")} 
//             else {reject("false")}},time);
        
//     })
//     return promice;
// }
// testPromice(3000).then((date)=>console.log("resolve ",date)).catch((date)=>console.log("reject ",date))