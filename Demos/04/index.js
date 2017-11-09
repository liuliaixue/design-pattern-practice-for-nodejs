const ShapeFactory = require( './ShapeFactory');
const ColorFactory = require( './ColorFactory');


class Cloth {
    constructor(shape, color){
        this.shape = new ShapeFactory(shape);
        this.color = new ColorFactory(color);
    }
}

const runDemo = () => {
    const cloth_1 = new Cloth('Rectangle', 'Blue');
    cloth_1.shape.draw();
    cloth_1.color.fill();
}
runDemo();

module.exports =  Cloth;