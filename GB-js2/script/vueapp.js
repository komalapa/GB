
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
            </div> ` ;
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
                this.$parent.filter(); //не уверена, что решение правильное, но оно позволяет использовать любой "поиск" из родительского приложения
                //console.log(this.$parent);
                //this.filter();
            }
        }
    }),
        cartSection: Vue.component('cart-section', {
        props: ['cart','is-visible-cart'],
        template: 
        `<section class="cart-wrp" v-if="isVisibleCart">
            <span class="cart-title">
            <span class="cart">
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="39" viewBox="0 0 45 39">
                    <path fill-rule="evenodd"
                        d="M21.896118,1.0094223 C20.430176,1.0094223 19.228394,2.015686 18.956665,3.3909397 C18.956665,3.3909397 18.880127,3.3909397 18.880127,3.3909397 C18.880127,3.3909397 9.230957,14.131458 9.230957,14.131458 C9.230957,14.131458 14.055542,14.131458 14.055542,14.131458 C14.055542,14.131458 20.729858,6.7112865 20.729858,6.7112865 C21.089111,6.86195 21.483887,6.9741573 21.896118,6.9741573 C22.315186,6.9741573 22.702515,6.86195 23.069214,6.7112865 C23.069214,6.7112865 29.735962,14.131458 29.735962,14.131458 C29.735962,14.131458 34.568115,14.131458 34.568115,14.131458 C34.568115,14.131458 24.912231,3.3909397 24.912231,3.3909397 C24.912231,3.3909397 24.834839,3.3909397 24.834839,3.3909397 C24.57129,2.015686 23.368896,1.0094223 21.896118,1.0094223 C21.896118,1.0094223 21.896118,1.0094223 21.896118,1.0094223 ZM4.4072266,16.514553 C3.0690918,16.514553 1.9910889,17.58059 1.9910889,18.903515 C1.9910889,18.903515 1.9910889,20.096306 1.9910889,20.096306 C1.9910889,21.355068 2.9682007,22.345428 4.218628,22.445122 C4.218628,22.445122 8.023315,35.602905 8.023315,35.602905 C9.230957,37.990402 10.439331,37.990402 11.639404,37.990402 C11.639404,37.990402 33.35962,37.990402 33.35962,37.990402 C34.568115,37.990402 35.76819,37.990402 36.976562,35.602905 C36.976562,35.602905 40.78882,22.445122 40.78882,22.445122 C42.030884,22.345428 43.00879,21.355068 43.00879,20.096306 C43.00879,20.096306 43.00879,18.903515 43.00879,18.903515 C43.00879,17.58059 41.936768,16.514553 40.60022,16.514553 C40.60022,16.514553 4.4072266,16.514553 4.4072266,16.514553 C4.4072266,16.514553 4.4072266,16.514553 4.4072266,16.514553 ZM11.193359,22.47929 C11.193359,22.47929 11.793457,22.47929 11.793457,22.47929 C13.131348,22.47929 14.450928,23.475407 14.73291,24.716122 C14.73291,24.716122 16.429443,32.137875 16.429443,32.137875 C16.713013,33.384342 15.847046,34.408764 14.509155,34.408764 C14.509155,34.408764 13.901489,34.408764 13.901489,34.408764 C12.565796,34.408764 11.246338,33.384342 10.962769,32.137875 C10.962769,32.137875 9.266235,24.716122 9.266235,24.716122 C8.984253,23.475407 9.855347,22.47929 11.193359,22.47929 C11.193359,22.47929 11.193359,22.47929 11.193359,22.47929 ZM22.503662,22.47929 C23.84021,22.47929 24.912231,23.545326 24.912231,24.868366 C24.912231,24.868366 24.912231,32.025665 24.912231,32.025665 C24.912231,33.348705 23.84021,34.408764 22.503662,34.408764 C21.16565,34.408764 20.087769,33.348705 20.087769,32.025665 C20.087769,32.025665 20.087769,24.868366 20.087769,24.868366 C20.087769,23.545326 21.16565,22.47929 22.503662,22.47929 C22.503662,22.47929 22.503662,22.47929 22.503662,22.47929 ZM33.20642,22.47929 C33.20642,22.47929 33.814087,22.47929 33.814087,22.47929 C35.150513,22.47929 36.015625,23.475407 35.733643,24.716122 C35.733643,24.716122 34.03711,32.137875 34.03711,32.137875 C33.75354,33.384342 32.435547,34.408764 31.097656,34.408764 C31.097656,34.408764 30.48999,34.408764 30.48999,34.408764 C29.154297,34.408764 28.288452,33.384342 28.570435,32.137875 C28.570435,32.137875 30.266968,24.716122 30.266968,24.716122 C30.550537,23.475407 31.86853,22.47929 33.20642,22.47929 C33.20642,22.47929 33.20642,22.47929 33.20642,22.47929 Z" />
                </svg>
                <span class="cart-sum">\${{cart.sum}}</span>
            </span>
        </span>
        <div class="cart-list">
            <goods-item v-for="good in cart.orderList" :key="good.art" :good="good" :cart="cart"></goods-item>

        </div>
    </section>`
      }),
        goodsSection: Vue.component('goods-section', {
            props: ['filtered-goods', 'cart'],
            template: 
            `<section class="goods">
                <span class="goods-title">FEATURED goods</span>
                <span class="not-found-msg" v-if="!filteredGoods.length">Нет данных</span>
                <div v-else="!filteredGoods.length" class="goods-list">
                    <goods-item v-for="good in filteredGoods" :key="good.art" :good="good" :cart="cart"></goods-item>
                </div>
            </section>`
      }),
      connectionErr: Vue.component('connection-error', {
        props: ['goodsList'],
        template: 
        `<div class="error-not-connected" v-if="!goodsList.goods.length"><slot></slot></div>`
      }),
    },
    mounted: function(){
        this.filteredGoods=this.goodsList.goods;
    }
  });
