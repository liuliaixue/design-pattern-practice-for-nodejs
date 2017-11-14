const Item = require('./Item');
const pack = 'WRAPPER';

class Burger extends Item {
    constructor({name, price}) {
        super({pack, price});
        this.name = name;
    }
}

const VegBurger = new Burger({name: 'VerBurger', price: 30.00});
const ChickenBurger = new Burger({name: 'ChickenBurger', price: 40.00});

module.exports = {
    VegBurger,
    ChickenBurger,
}