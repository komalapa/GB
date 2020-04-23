        class Hamburger {
            constructor(size, stuffing) {
                this.size=size;
                this.stuffing=stuffing;
                this.toppings=[];
                this.price=0;
                this.cal=0;
                this.priceList={};
                this.calsList={};
                this.fetchPrice();
                this.fetchCals();
                this.calculatePriceAndCalories()
            }
            fetchPrice(){
                let priceList={
                    "size":{
                        "big": 100,
                        "small":50
                    }, "stuffing":{
                        "cheese":10, 
                        "salad":20, 
                        "potato":15
                    },"topping":{
                        "spice":15,
                        "mayonnaise":20
                    }
                }
                this.priceList=priceList;
            }
            fetchCals(){
                let calsList={
                    "size":{
                        "big": 40,
                        "small":20
                    }, "stuffing":{
                        "cheese":20, 
                        "salad":5, 
                        "potato":10
                    },"topping":{
                        "spice":0,
                        "mayonnaise":5
                    }
                }
                this.calsList=calsList;
            }

            addTopping(topping) {    // Добавить добавку 
                this.toppings.push(topping);
                this.calculatePriceAndCalories()
            }
            removeTopping(topping) { // Убрать добавку 
                if (this.toppings.indexOf(topping)>=0){
                    this.toppings.splice(this.toppings.indexOf(topping),1);
                }
                this.calculatePriceAndCalories()
            }
            
            getToppings(topping) {   // Получить список добавок 
                return this.toppings
            }
            getSize() {              // Узнать размер гамбургера 
                return this.size
            }
            getStuffing() {          // Узнать начинку гамбургера 
                return this.stuffing
            }
            calculatePriceAndCalories() {       // Узнать цену и каллорийность
                this.price=0;
                this.cal=0;
                
                this.price+=this.priceList["size"][this.size];
                this.price+=this.priceList["stuffing"][this.stuffing];
                this.toppings.forEach(topping => { this.price+=this.priceList["topping"][topping]})

                this.cal+=this.calsList["size"][this.size];
                this.cal+=this.calsList["stuffing"][this.stuffing];
                this.toppings.forEach(topping => { this.cal+=this.calsList["topping"][topping]})
            }
            
}
