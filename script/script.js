const goods = [{
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
const renderGoodsItem = (title, price, img) => {
    return `<div class="goods-item">
                    <div class="img-wrp"><img src="${img}" alt="shoes"></div>
                    <span class="goods-item-title">${title}</span>
                    <div class="goods-item-buy-wrp">  
                        <span class="goods-item-price">$${price}</span>
                        <button href="#" class="goods-item-buy btn">bUY NOW</button>
                    </div>  
                </div>  
`
};
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
renderGoodsList(goods);