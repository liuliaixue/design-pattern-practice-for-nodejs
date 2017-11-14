class Shape  {
  constructor() {
    this.name = 'shape';
  }
  draw() {
      console.log('@@@@@@@ draw Shape')
  }
}

class Rectangle extends Shape{
  constructor() {
    super()
    this.name = 'rectangle';
  }
  draw() {
      console.log('@@@@@@@ draw Rectangle')
  }
}

class Square  extends Shape{
  constructor() {
    super()
    this.name = 'square';
  }
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

const rectangle = new ShapeFactory('Rectangle');
const square = new ShapeFactory('Square');
const shape = new ShapeFactory();

module.exports = {
  rectangle,
  square,
  shape
}