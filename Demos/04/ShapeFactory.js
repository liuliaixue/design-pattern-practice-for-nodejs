class Shape  {
    draw() {
        console.log('@@@@@@@ draw Shape')
    }
}

// class Shape_c extends Shape {

// }

class Rectangle extends Shape{
    draw() {
        console.log('@@@@@@@ draw Rectangle')
    }
}

class Square  extends Shape{
    draw() {
        console.log('@@@@@@@ draw Square')
    }
}

class ShapeFactory {
    constructor(shape) {
        if(shape === 'Rectangle') return new Rectangle();
        if(shape === 'Square') return new Square();
        return new Shape();
    }
}



module.exports = ShapeFactory;