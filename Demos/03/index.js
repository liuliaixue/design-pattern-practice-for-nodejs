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

// const ShapeFactory  = (shape) =>{
//     if(shape === 'Rectangle') return new Rectangle();
//     if(shape === 'Square') return new Square();
//     return new Shape();
// }
// const runDemo = () => {
//     const shape_1 =  ShapeFactory('Rectangle');
//     const shape_2 =  ShapeFactory('Square');
//     const shape_3 =  ShapeFactory();
//     shape_1.draw();
//     shape_2.draw();
//     shape_3.draw();
// }
class ShapeFactory {
    constructor(shape) {
        if(shape === 'Rectangle') return new Rectangle();
        if(shape === 'Square') return new Square();
        return new Shape();
    }
}

const runDemo = () => {
    const shape_1 = new ShapeFactory('Rectangle');
    const shape_2 = new ShapeFactory('Square');
    const shape_3 = new ShapeFactory();
    shape_1.draw();
    shape_2.draw();
    shape_3.draw();
}
runDemo();
