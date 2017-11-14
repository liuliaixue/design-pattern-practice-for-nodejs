
const { rectangle, square, shape } = require('./shapes');

class Cache {
  constructor() {
    this.db = {};
  }
  loadData() {
    // spend lots of time and performance to init cache
    this.db[1] = rectangle;
    this.db[2] = square;
    this.db[3] = shape;
  }
  getById (id) {
    return  Object.assign({},this.db[id]) ;
    
  }
  update() {
    // spend lots of time and performance to update cache
    this.db[4] = shape;
  }
}

const cache = new Cache();
cache.loadData();

const shape_1 = cache.getById(1); 
const shape_4 = cache.getById(4);
console.log(shape_1)
console.log(shape_4)

cache.update();
const shape_4_new = cache.getById(4);
console.log(shape_4_new)
