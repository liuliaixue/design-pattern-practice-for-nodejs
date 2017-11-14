const ItemPackingTypeMap = {
    WRAPPER: 'Wrapper',
    BOTTLE: 'Bottle',
};

const getPacking = (pack) => {
    const packingType = ItemPackingTypeMap[pack];
    return packingType;
};


class Item {
    constructor({price, pack}) {
        this.price = price;
        this.pack = getPacking(pack);
    }
    
}

module.exports = Item;