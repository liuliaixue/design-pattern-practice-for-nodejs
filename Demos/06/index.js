const { VegBurger, ChickenBurger } = require('./Burger');
const { Coke, Pepsi } = require('./ColdDrink');
const UNIT = '$';

class Meal {
  constructor(items) {
    this.itemList = [];

  }

  addItem(item) {
    this.itemList.push(item);
  }

  getCost() {
    let cost = 0.00;
    for (let item of this.itemList) {
      cost += item.price;
    }
    return parseFloat(cost).toFixed(2) ;
  }

  showItemList() {
    console.log('=======');
    for (let item of this.itemList) {
      console.log(`Item:${item.name}, Price: ${item.price}, Packing: ${item.pack} `)
    }
    console.log('=======');
  }
}


const runDemo = () => {
  const lunch = new Meal();
  lunch.addItem(VegBurger);
  lunch.addItem(Pepsi);
  lunch.showItemList();
  const cost = lunch.getCost();
  console.log(`=======Cost: ${UNIT}${cost}=======`);
}
runDemo();

module.exports = Meal;
