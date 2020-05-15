
class GoodsItem {
    constructor(title, price,img,art) {
      this.title = title;
      this.price = price;
      this.img = img;
      this.countInCart=0;
      this.art=art;
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
      this.fetchGoods();
    }
    fetchGoods() {
        const goodsInput=[{
            title: 'BRANDED SHOE',
            price: 150,
            img: "img/product1.png",
            art:1
        },
        {
            title: 'BRANDED T-SHIRT',
            price: 50,
            img: "img/product2.png",
            art:2
        }, {
            title: 'BRANDED T-SHIRT',
            price: 20,
            img: "img/product3.png",
            art:3
        }, {
            title: 'BRANDED THING',
            price: 300,
            img: "img/product4.png",
            art:4
        }, {
            title: 'BRANDED BAG',
            price: 400,
            img: "img/product5.png",
            art:5
        }, {
            title: 'BRANDED BREECHES',
            price: 150,
            img: "img/product6.png",
            art:6
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
        //this.renderCartList();
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
        //this.renderCartList();
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

const shoppyApp = new Vue({
    el: '#shoppy-app',
    data: {
        goodsList: new GoodsList(),
        filteredGoods: [],
        searchLine: '',
        cart: new Cart(),
      },
    computed: {
        isVisibleCart: function () {
          return Boolean(this.cart.orderList.length);
        }
        },
    methods:{
        filter: function(){
            this.filteredGoods= this.goodsList.goods.filter(item =>(item.title.toLowerCase().indexOf(this.searchLine.toLowerCase())>=0));
        }
    },
    components:{
        goodsItem: Vue.component('goods-item', {
            props: ['good','cart'],
            template: 
            `<div class="goods-item">
                <div class="img-wrp"><img v-bind:src="good.img" alt="shoes"></div>
                <span class="goods-item-title">{{good.title}}</span>
                <div class="goods-item-buy-wrp">
                    <span class="goods-item-price">\${{good.price}}</span>
                    <button class="goods-item-buy btn" v-on:click.prevent="cart.addItem(good)">bUY NOW</button>
                </div>
                <div class="goods-item-in-cart">
                                Qty: {{good.countInCart}}
                            </div>
                <button class="cart-delete" v-on:click.prevent="cart.deleteItem(good)">&#10008;</button>
            </div>`
          }),
        searchForm:Vue.component('search-form', {
            
            template: 
            `
            <form action="#" class="search" v-on:submit.prevent="search">
                <input type="text" id="search-input" v-bind:value="this.searchLine"
                v-on:input="\$emit('input', $event.target.value)">
                <button v-on:click="search" class="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22"
                        height="22" viewBox="0 0 26 26">
                        <path fill-rule="evenodd"
                            d="M23.51477,22.871792 C23.51477,22.871792 22.870789,23.515156 22.870789,23.515156 C22.22406,24.161343 21.175537,24.161343 20.52887,23.515156 C20.52887,23.515156 16.477356,19.467545 16.477356,19.467545 C15.023132,20.377842 13.303833,20.904713 11.461182,20.904713 C6.235901,20.904713 1.9998779,16.672718 1.9998779,11.452278 C1.9998779,6.2318344 6.235901,1.9998417 11.461182,1.9998417 C16.686523,1.9998417 20.922485,6.2318344 20.922485,11.452278 C20.922485,13.303993 20.389038,15.030983 19.468079,16.489124 C19.468079,16.489124 23.51477,20.532001 23.51477,20.532001 C24.161499,21.178185 24.161499,22.225723 23.51477,22.871792 ZM11.461182,4.615925 C7.682068,4.615925 4.618408,7.67667 4.618408,11.452278 C4.618408,15.227882 7.682068,18.288628 11.461182,18.288628 C15.240356,18.288628 18.304016,15.227882 18.304016,11.452278 C18.304016,7.67667 15.240356,4.615925 11.461182,4.615925 Z" />
                    </svg>
                </button>
            </form>
            `,
        methods:{
            search: function(){
                this.$parent.filter();
                //console.log(this.$parent);
                //this.filter();
            }
        }
    }),
    },
    mounted: function(){
        this.filteredGoods=this.goodsList.goods;
    }
  });

