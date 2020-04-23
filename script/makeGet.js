const url="https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const requestType={
    goodsList: "/catalogData.json", cart: "/getBasket.json", add: "/addToBasket.json", delete: "/deleteFromBasket.json"
}
function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

makeGETRequest(url+requestType["goodsList"], (data) =>  console.log("Goods List: ", data));
makeGETRequest(url+requestType["cart"], (data) =>  console.log("Cart: ", data));
makeGETRequest(url+requestType["add"], (data) =>  console.log("Add Result: ", data));
makeGETRequest(url+requestType["delete"], (data) =>  console.log("Delete Result: ", data));