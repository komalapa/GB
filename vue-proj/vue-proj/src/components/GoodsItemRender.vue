<template>
  <div class="goods-item">
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
            </div>
</template>

<script>
export default {
  name: 'GoodsItemRender',
  props: {
    good: Object,
    cart: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.goods .cart-delete{
    display: none;
}
.goods-title, .cart-title {
    display: block;
    width: 100%;
    background-color: #3cc0b5;
    font-family: 'Bebas Neue';
    font-size: 31px;
    line-height: 1;
    font-weight: 800;
    color: #ffffff;
    padding: 24px 186px 16px 186px;
    box-sizing: border-box;
}

.goods-list, .cart-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 205px 73px 205px;

}

.goods-item {
    /*display: flex;*/
    width: 253px;
    min-height: 155px;
    /*flex-direction: column;
    align-items: center;*/
    border-bottom: 5px solid #3cc395;
    padding-top: 70px;
    padding-bottom: 35px;
    text-align: center;
    margin-right: 53px;
}

.goods-item .img-wrp {
    width: 190px;
    height: 131px;
    text-align: center;
    margin: 0 auto 10px;
}

.goods-item:nth-of-type(3n),.goods-item:last-of-type {
    margin-right: 0;
}

.goods-item-buy-wrp {
    margin-top: 15px;
    vertical-align: baseline;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
}

.goods-item-price, .goods-item-in-cart {
    font-family: 'Bebas Neue';
    font-size: 27px;
    line-height: 25px;
    font-weight: 800;
    color: #afafaf;
}
.goods-item-in-cart{
    width: 100%;
    margin-top: 10px;
}


.goods .goods-item-title,
.goods .goods-item-buy {
    margin-top: 0;
}

.goods-item-buy {
    width: 72px;
    margin-left: 15px;

}
.goods .goods-item-in-cart{
    display: none;
}

</style>
