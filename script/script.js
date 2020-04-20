
class GoodsItem {
    constructor(title, price,img) {
      this.title = title;
      this.price = price;
      this.img = img;
    }
    render() {
      return `<div class="goods-item">
                <div class="img-wrp"><img src="${this.img}" alt="shoes"></div>
                <span class="goods-item-title">${this.title}</span>
                <div class="goods-item-buy-wrp">  
                    <span class="goods-item-price">$${this.price}</span>
                    <button class="goods-item-buy btn">bUY NOW</button>
                </div>  
            </div> ` ;
    }
  }

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [{
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
                    },
                    ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(item => {
          const goodItem = new GoodsItem(item.title, item.price, item.img);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
      }
}

class MyGoodsList {
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
            goodsInput.forEach(item => {
                const goodsItem = new GoodsItem(item.title, item.price, item.img);
                this.goods.push(goodsItem)
                });
        
    }
    render() {
        let listHtml = '';
        this.goods.forEach(item => {
          listHtml += item.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
      }
}

//const list = new GoodsList();
//list.fetchGoods();
//list.render();

const myList = new MyGoodsList();
myList.fetchGoods();
myList.render();