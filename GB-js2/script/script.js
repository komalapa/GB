
class GoodsItem {
    constructor(title, price,img) {
      this.title = title;
      this.price = price;
      this.img = img;
      this.countInCart=0;
    }
    render() {
      return `<div class="goods-item">
                <div class="img-wrp"><img src="${this.img}" alt="shoes"></div>
                <span class="goods-item-title">${this.title}</span>
                <div class="goods-item-buy-wrp">  
                    <span class="goods-item-price">$${this.price}</span>
                    <button class="goods-item-buy btn">bUY NOW</button>
                    <button class="cart-delete">&#10008;</button>
                </div>  
            </div> ` ;// у кнопки cart-delete убрала  onclick="cart.deleteItem(new GoodsItem('${this.title}',${this.price},'${this.img}')) т.к. в таком случае не работает поиск в корзине indexOf т.к. это уже другой объект. Кнопки пока не работают. 
    }
  }

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
        const goodsInput=[{
            title: 'BRANDED SHOE',
            price: 150,
            img: "img/product1.png"
        },
        {
            title: 'BRANDED T-SHIRT',
            price: 50,
            img: "img/product2.png"
        }, {
            title: 'BRANDED T-SHIRT',
            price: 20,
            img: "img/product3.png"
        }, {
            title: 'BRANDED THING',
            price: 300,
            img: "img/product4.png"
        }, {
            title: 'BRANDED BAG',
            price: 400,
            img: "img/product5.png"
        }, {
            title: 'BRANDED BREECHES',
            price: 150,
            img: "img/product6.png"
        }];
        
        const promise= new Promise((resolve, reject)=>
        {
            setTimeout(() => {
                goodsInput.forEach(item => {
                    const goodsItem = new GoodsItem(item.title, item.price, item.img);
                    this.goods.push(goodsItem)
                });
                //console.log(this.goods)
                if (this.goods) {
                    resolve();
                    //console.log("true")
                } else {
                    reject()
                }
            }, 0);//}, 3000);
            
        })
        return promise;
        
    }
    render() {
        //console.log("render")
        let listHtml = '';
        this.goods.forEach(item => {
          listHtml += item.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
      }
    sumAll(){
        let sum = 0;
        this.goods.forEach(item => {
            sum+= item.price;
            });
        return sum;
    }
}

class Cart {
    constructor() {
        this.orderList = [];
        this.sum = 0;
        this.finSum=0;
      }
    addItem(item){
        if (this.orderList.indexOf(item)>=0){ //Если есть в списке, просто увеличиваем количество
            this.orderList[this.orderList.indexOf(item)].countInCart++
        } else {
            //console.log(item)
            item.countInCart++;
            this.orderList.push(item);
        }
        this.sum+=item.price;
        this.renderCartList();
    }
    deleteItem(item){
        //console.log("delete ",item)
        if (item.countInCart>1){
            this.orderList[this.orderList.indexOf(item)].countInCart--;
            this.sum-=item.price;
        } else {
            if (this.orderList.indexOf(item)>=0){
                this.orderList.splice(this.orderList.indexOf(item),1);
                this.sum-=item.price;
            }
        }
        this.renderCartList();
    }
    sale (sum, prcnt){
        if (this.sum > sum) {this.finSum=this.sum*(1-prcnt/100);}
        else {
            {this.finSum=this.sum}
        }
    }
    consoleLogList(){
        this.orderList.forEach(item=>console.log(item))
    }
    renderCartList(){
        let listHtml = '';
        this.orderList.forEach(item => {
          listHtml += item.render();
        });
        document.querySelector('.cart-list').innerHTML = listHtml;
      
    }
}


const list = new GoodsList();

list.fetchGoods()
    .then(()=>{
        list.render();
        const cart = new Cart();
        cart.addItem(list.goods[1]);
        cart.addItem(list.goods[2]);
        cart.renderCartList();
    })
    .catch(()=>console.log("empty"))

// let item = new GoodsItem('test item', 120, 'img.jpg');
// cart.addItem(item);
// item= new GoodsItem('title',333,"img")
// cart.addItem(item);
// console.log("cart: ");
// cart.consoleLogList();
// cart.sale(200,10)
// console.log("sum: "+cart.sum)
// console.log("finSum: "+cart.finSum)
// cart.deleteItem(item)
// console.log("cart (delete item): ");
// cart.consoleLogList();
