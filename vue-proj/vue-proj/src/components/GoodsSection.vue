<template>
 <section class="goods">
                <span class="goods-title">FEATURED goods</span>
                <span class="not-found-msg" v-if="!filteredGoods.length">Нет данных</span>
                <div v-if="filteredGoods.length" class="goods-list">
                    <GoodsItemRender v-for="good in filteredGoods" :key="good.art" :good="good" :cart="cart"></GoodsItemRender>
                </div>
            </section>
</template>

<script>
import GoodsItemRender from './GoodsItemRender.vue'
export default {
  name: 'GoodsSection',
  props: {
    cart: Object,
    filteredGoods: Array
  },
  components:{
      GoodsItemRender
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cart {
    display: flex;
    align-items: flex-end;
    padding: 5px 10px;
    fill:  white;
    color:white;
}

.cart:hover {
    /* fill: #2da89b;
    color: #2da89b; */
    opacity: 0.7;
}

.cart:active {
    /* fill: #afafaf;
    color: #afafaf; */
    opacity: 0.5;
}

.cart-sum, .not-found-msg {
    font-family: 'Bebas Neue';
    font-size: 33px;
    line-height: 1;
    font-weight: bold;
    /* color: white; */
    margin-left: 17px;
}
.not-found-msg{
    display: block;
    text-align: center;
    margin: 75px auto;
    color: #afafaf;
}
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
