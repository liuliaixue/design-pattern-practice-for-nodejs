const Item = require('./Item');
const pack = 'BOTTLE'

class ColdDrink extends Item {
    constructor({name, price}) {
        super({pack, price});
        this.name = name;
    }
}

const Coke = new ColdDrink({name: 'Coke', price: 20.00});
const Pepsi = new ColdDrink({name: 'Coke', price: 18.00});

module.exports = {
    Coke,
    Pepsi,
};

